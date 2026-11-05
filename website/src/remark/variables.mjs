// Minimal build-time string-variable substitution for Markdown/MDX content.
//
// Single source of truth for content variables. Author a slug in the form
// `%variable_name%` anywhere in page prose and it is replaced with the value
// below at build time. Percent delimiters are used (not `{{ }}`) because braces
// are interpreted as JSX expressions in MDX; `%…%` is inert text that survives
// parsing and is safe to rewrite in `text` nodes.
//
// This mirrors the mechanism used by the tableau-mcp docs site
// (docs/src/remark/variables.mjs).
export const VARIABLES = {
    product_name: 'Tableau Extensions API',
    // Upcoming named release. Author `%coming_release%` in prose that names it
    // (never a hardcoded "2026.3.1" or "November 2026 (2026.3.1)").
    coming_release: 'November 2026 (2026.3.1)',
};

const TOKEN = /%([a-zA-Z0-9_]+)%/g;

export function expandVariableText(value) {
    return value.replace(TOKEN, (match, key) =>
        Object.prototype.hasOwnProperty.call(VARIABLES, key) ? VARIABLES[key] : match,
    );
}

function walk(node) {
    // Prose text nodes (e.g. `%product_name%`).
    if (node.type === 'text' && typeof node.value === 'string') {
        node.value = expandVariableText(node.value);
    }
    // Link/image URLs are a separate `url` field, not a text child — cover them so a
    // wording slug works inside a link target.
    if ((node.type === 'link' || node.type === 'image' || node.type === 'definition') && typeof node.url === 'string') {
        node.url = expandVariableText(node.url);
    }
    if (Array.isArray(node.children)) {
        for (const child of node.children) {
            walk(child);
        }
    }
}

export default function remarkVariables() {
    return tree => {
        walk(tree);
    };
}
