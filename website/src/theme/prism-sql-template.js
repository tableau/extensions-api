Prism.languages.sql_template = {
    comment: /--.*/,
    variable: [/<[^>\s]+>/, { pattern: /(\s|\[|\[, ])\.\.\.(?=\]|\))/, lookbehind: true }],
    keyword: /\b[A-Z_]+\b/,
    string: /\'[^\']*\'/,
    punctuation: /[;[\]{}]/,
};
