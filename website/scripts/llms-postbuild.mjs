// Post-build step for the llms text files.
// docusaurus-plugin-llms reads docs source, so %product_name% and similar
// tokens are still literal, and ```mdx-code-block fences (imports, DocCardList,
// Tabs) are kept because they look like code. Expand the tokens with the same
// map the HTML build uses, drop those fences, then replace the plugin's flat
// page list with a domain map. llms-full.txt stays as an unlinked archive.

import { promises as fs } from 'fs';
import path from 'path';
import { expandVariableText } from '../src/remark/variables.mjs';
import { llmsDomains } from './llms-domains.mjs';

const buildDir = path.resolve('build');

const mdxBlock = /```mdx-code-block\r?\n[\s\S]*?```\r?\n?/g;

function siteRoot() {
  const origin = (process.env.GITHUB_ORIGIN ?? 'http://localhost').replace(/\/+$/, '');
  const base = process.env.GITHUB_BASE_PATH ?? '';
  const prefix = base === '' || base === '/' ? '/' : (base.endsWith('/') ? base : `${base}/`);
  return `${origin}${prefix}`;
}

function domainIndex() {
  const root = siteRoot();
  const official = process.env.GITHUB_ORIGIN === 'https://tableau.github.io';
  const upcoming = !!process.env.IS_UPCOMING;
  const title = !official
    ? 'Unofficial Extensions API'
    : upcoming
      ? 'Pre-Release Extensions API'
      : 'Tableau Extensions API';
  const links = llmsDomains.map((domain) =>
    `- [${domain.navLabel}](${root}${domain.filename}): ${domain.description}`,
  );
  return `# ${title}

> Create dashboard and viz extensions for Tableau.

Read exactly one domain file for the task. For Data Apps, read llms-dataapps.txt and do not load the other domain files.

## Domains

${links.join('\n')}
`;
}

async function expandLlmsVariables() {
  const names = (await fs.readdir(buildDir)).filter((name) => /^llms.*\.txt$/.test(name));
  if (names.length === 0) {
    console.warn('[llms] no llms*.txt files found; skipping.');
    return;
  }
  for (const name of names) {
    const target = path.join(buildDir, name);
    const text = await fs.readFile(target, 'utf8');
    const updated = expandVariableText(text).replace(mdxBlock, '');
    if (updated !== text) await fs.writeFile(target, updated);
    console.log(`[llms] expanded variables in ${name}`);
  }
  await fs.writeFile(path.join(buildDir, 'llms.txt'), domainIndex());
  console.log('[llms] wrote domain index llms.txt');
}

expandLlmsVariables().catch((e) => { console.error('[llms] failed:', e); process.exit(1); });
