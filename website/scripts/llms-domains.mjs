// Domain files for agents. llms.txt is rewritten after the build into a map of
// these files. llms-full.txt stays on disk as an archive and is not linked.
// Workspace extensions are omitted: this site has no docs/workspaceext pages,
// and the plugin does not emit a file when nothing matches.

export const llmsDomains = [
  {
    filename: 'llms-dataapps.txt',
    navLabel: 'Data Apps',
    title: 'Tableau Data Apps',
    description:
      'Tableau Cloud data apps only. Dashboard, viz, and workspace extension guides are out of scope.',
    rootContent:
      'Use this file for Data Apps. The Dashboard and Viz manifest pages are included only for packaging a data app. Do not apply other Dashboard, Viz, or Workspace extension instructions.',
    includePatterns: [
      'docs/dataapps/**',
      'docs/installation.md',
      'docs/dashext/trex_manifest.md',
      'docs/vizext/trex_viz_manifest.md',
    ],
  },
  {
    filename: 'llms-dashext.txt',
    navLabel: 'Dashboard Extensions',
    title: 'Tableau Dashboard Extensions',
    description: 'Dashboard extensions only. Viz, workspace, and data app guides are out of scope.',
    rootContent:
      'Use this file for Dashboard Extensions. Do not apply Viz, Workspace, or Data Apps instructions.',
    includePatterns: ['docs/dashext/**'],
  },
  {
    filename: 'llms-vizext.txt',
    navLabel: 'Viz Extensions',
    title: 'Tableau Viz Extensions',
    description: 'Viz extensions only. Dashboard, workspace, and data app guides are out of scope.',
    rootContent:
      'Use this file for Viz Extensions. Do not apply Dashboard, Workspace, or Data Apps instructions.',
    includePatterns: ['docs/vizext/**'],
  },
  {
    filename: 'llms-core.txt',
    navLabel: 'Core',
    title: 'Tableau Extensions API Core',
    description: 'Installation, API overview, debugging, and security.',
    rootContent:
      'Shared setup and security for every extension type. Product-specific guides are in the other domain files.',
    includePatterns: [
      'docs/index.md',
      'docs/installation.md',
      'docs/trex_api_about.md',
      'docs/debug/**',
      'docs/security/**',
    ],
  },
  {
    filename: 'llms-fundamentals.txt',
    navLabel: 'Extension Fundamentals',
    title: 'Extension Fundamentals',
    description: 'Data access, dialogs, events, formatting, and TypeScript for extensions.',
    rootContent:
      'Shared extension mechanics. Data Apps packaging and administration are in llms-dataapps.txt.',
    includePatterns: ['docs/core/**'],
  },
  {
    filename: 'llms-design.txt',
    navLabel: 'Design Guidelines',
    title: 'Extension Design Guidelines',
    description: 'Interaction and style guidelines for extensions.',
    rootContent: 'Design guidance. API behavior and product setup are in the other domain files.',
    includePatterns: [
      'docs/ux_design.md',
      'docs/ux_extension_gallery.md',
      'docs/Interaction_Guidelines/**',
      'docs/Style_Guidelines/**',
    ],
  },
  {
    filename: 'llms-reference.txt',
    navLabel: 'Reference',
    title: 'Extensions API Reference Guides',
    description: 'Publishing, Tableau Viz input specs, release notes, and known issues.',
    rootContent: 'Reference material. Use a product domain file for how to build that extension type.',
    includePatterns: [
      'docs/publish/**',
      'docs/trex_tableau_viz_ref.md',
      'docs/trex_tableau_viz_ref_v1.md',
      'docs/trex_tableau_viz_ref_v2.md',
      'docs/trex_release-notes.md',
      'docs/trex_known_issues.md',
      'docs/trex_tableau_help.md',
    ],
  },
];

export function llmsPluginFiles() {
  return llmsDomains.map((domain) => ({
    filename: domain.filename,
    title: domain.title,
    description: domain.description,
    rootContent: domain.rootContent,
    fullContent: true,
    includePatterns: domain.includePatterns,
    orderPatterns: domain.includePatterns,
    includeUnmatchedLast: false,
  }));
}
