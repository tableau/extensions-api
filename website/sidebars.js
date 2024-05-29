// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  Guides: [
    "index",
    'installation',
    'trex_api_about',
    'trex_tableau_help',
    {
      type: 'category',
      label: 'Viz Extensions',
      link: { type: 'doc', id: 'vizext/index' },
      items: [
        'vizext/trex_viz_getstarted',
        'vizext/trex_viz_overview',
        'vizext/trex_viz_create',
        'vizext/trex_viz_manifest',
        'vizext/trex_viz_examples',
      ],
    }, 
    {
      type: 'category',
      label: 'Dashboard Extensions',
      link: { type: 'doc', id: 'dashext/index' }, 
      items: [
        'dashext/trex_getstarted',
        'dashext/trex_create',
        'dashext/trex_overview',
        'dashext/trex_manifest',
        'dashext/trex_examples', 
      ],
    }, 
   /* { 
      type: 'category',
      label: 'Basic Concepts',
      link: {  type: 'doc', id: 'index' },
      items: [
      'trex_api_about',
      'trex_reload',
    ], 
    }, */

    { 
      type: 'category',
      label: 'Extension Fundamentals',
      link: {  type: 'doc', id: 'core/index' },
      items: [
        'core/trex_getdata',
        'core/trex_configure',
        'core/trex_tableau_viz',
        'core/trex_format',
        'core/trex_show_hide',
        'core/trex_events',
        'core/trex_typescript',
    ],
    },

    { 
      type: 'category',
      label: 'Security and Data Access',
      link: {  type: 'doc', id: 'security/index' },
      items: [
      'security/trex_data_access',
      'security/trex_security',
      'security/trex_xss_guidance',
      'security/trex_sandbox_test',
      'security/trex_oauth',
    ],
    },

    { 
      type: 'category',
      label: 'Debugging and Troubleshooting',
      link: {  type: 'doc', id: 'debug/index' },
      items: [
      'debug/trex_debugging',
      'debug/trex_debug_server',
      'debug/trex_reload',
      'debug/trex_logging',
      'debug/trex_error_handling',
    ],
    },

    { 
      type: 'category',
      label: 'Publishing and Distribution',
      link: {  type: 'doc', id: 'publish/index' },
      items: [
      'publish/trex_publish',
      'publish/trex_sandbox_publish',
      'publish/trex_contributing',
    ],
    },

    {
      type: 'category',
      label: 'Reference',
   /*   link: { href: "https://github.com/tableau/hyper-api-samples" }, */
      items: [
      { type: 'link', label: "Samples", href: "https://github.com/tableau/extensions-api-preview/tree/main/Samples" },
      { type: 'link', label: "API Reference",  href: 'pathname:///api' },
      {
        type: 'category',
        label: 'Tableau Viz Reference',
        items: [ 'trex_tableau_viz_ref', 'trex_tableau_viz_ref_v1', 'trex_tableau_viz_ref_v2', ],
      },
      'trex_release-notes',
      'trex_known_issues',
      ],
    }, 


  ],

  Design: [
    "ux_design",
    {
      type: 'category',
      label: 'Interaction Guidelines',
      items: [
        'Interaction_Guidelines/ux_build_test',
        'Interaction_Guidelines/ux_components_modes',
        'Interaction_Guidelines/ux_controls_ui_patterns',
      ],
    },
    {
      type: 'category',
      label: 'Style Guidelines',
      items: [
        'Style_Guidelines/ux_branding',
        'Style_Guidelines/ux_layout',
        'Style_Guidelines/ux_color',
        'Style_Guidelines/ux_fonts',
      ],
    },
    "ux_extension_gallery",
  ],
};

/*
const uxSidebar = {
  docs: [
    "ux_design",
    {
      type: 'category',
      label: 'Interaction Guidelines',
      items: [
        'Interaction_Guidelines/ux_build_test',
        'Interaction_Guidelines/ux_components_modes',
        'Interaction_Guidelines/ux_control_ui_patterns',
      ],
    },
    {
      type: 'category',
      label: 'Style Guidelines',
      items: [
        'Style_Guidelines/ux_branding',
        'Style_Guidelines/ux_layout',
        'Style_Guidelines/ux_color',
        'Style_Guidelines/ux_fonts',
      ],
    },
    "ux_extension_gallery",
  ],


}; */

module.exports = { sidebars };
