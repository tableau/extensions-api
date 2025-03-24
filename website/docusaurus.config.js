// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

import {themes as prismThemes} from 'prism-react-renderer';

// const lightCodeTheme = require('prism-react-renderer/themes/github');
const lightCodeTheme = require('prism-react-renderer').themes.github;

const getConfig = async () => {
  const remarkDefList = (await import("remark-deflist")).default;

  const isUpcomingVersion =  !!process.env.IS_UPCOMING
  const isInofficial = process.env.GITHUB_ORIGIN !== 'https://tableau.github.io';

  var title = 'Tableau Extensions API';
  if (isInofficial) title = 'Unofficial Extensions API';
  else if (isUpcomingVersion) title = 'Pre-Release Extensions API';

  /** @type {import('@docusaurus/types').Config} */
  return {
    title: title,
    tagline: 'Create dashboard and viz extensions for Tableau.',
    favicon: 'img/favicon.ico',

    // Pick up URL and baseUrl from config parameters set by the Github action runner
    url: process.env.GITHUB_ORIGIN ?? 'http://localhost/',
    baseUrl: (process.env.GITHUB_BASE_PATH ?? '') + '/',

    // We don't want to have the preview version or clones of the Github repository
    // indexed by search engines
    noIndex: isUpcomingVersion || isInofficial,

   // trailing slashes cause relative links to break with URL links
   // trailingSlash: 'false',

    // We want all issues to be reported as build errors
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'throw',
    onBrokenAnchors: 'throw',
    onDuplicateRoutes: 'warn',

    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".
    i18n: {
      defaultLocale: 'en',
      locales: ['en'],
    },

    presets: [
      [
        'classic',
        /** @type {import('@docusaurus/preset-classic').Options} */
        {
          docs: {
            sidebarPath: require.resolve('./sidebars.js' ),
            // Please change this to your repo.
            // Remove this to remove the "edit this page" links.
            editUrl:
              'https://github.com/tableau/extensions-api/blob/gh-pages-dev/website',
            remarkPlugins: [remarkDefList],
            sidebarCollapsed: true,
          },
          theme: {
            customCss: require.resolve('./src/css/custom.css'),
          },
        },
      ],
    ],

    themeConfig:
      /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
      ({
        /* We intentionally don't have a social card, as we are not
         * happy with the design, yet */
        // image: 'img/hyper-social-card.png',
        navbar: {
          title: 'Tableau Extensions API',
          logo: {
            alt: 'Extensions',
            src: 'img/ExtensionApi_24px.svg',
          },
          items: [
            {
              to: '/docs',
              position: 'left',
              label: 'Guides',
            },
            {
              to: 'pathname:///api',
              label: 'API Reference',
            },
            {
              to: '/docs/ux_design',
              position: 'left',
              label: 'Design Guidelines',
            },
            {
              to: '/docs/trex_release-notes',
              position: 'left',
              label: 'Release Notes',
            },
            {
              label: 'Tutorial',
              href:  'https://github.com/tableau/extensions-api/blob/main/Tutorial/Dashboard/readme.md',
            },
           {
              label: 'Community Extensions',
              to: 'pathname:///community',
            },  
         /*   {
              type: 'docSidebar',
              position: 'left',
              sidebarId: 'ux',
              label: 'UX Design',
            }, */
          ],
        },
        docs: {
          sidebar: {
            hideable: true,
            autoCollapseCategories: true,
          },
        },
        colorMode: {
          defaultMode: 'light',
          disableSwitch: false,
        },
        footer: {
          style: 'dark',
          links: [
            {
              title: 'Learn',
              items: [
        /*       {
                  label: 'Releases',
                  to: '/docs/releases',
                },  */
                {
                  label: 'Installation',
                  to: '/docs/installation',
                },
                {
                  label: 'Guides',
                  to: '/docs',
                },
                {
                  label: 'API Reference',
                  to: 'pathname:///api',
                },
                {
                label: 'UX Design Guide',
                to: '/docs/ux_design',
                },
                {
                  label: 'Tutorial',
                  href: 'https://github.com/tableau/extensions-api/blob/main/Tutorial/Dashboard/readme.md',
                },

              ],
            },
            {
              title: 'More',
              items: [
                {
                  label: 'GitHub',
                  href: 'https://github.com/tableau/extensions-api',
                },
                {
                  label: 'Slack',
                  href: 'https://join.slack.com/t/tableau-datadev/shared_invite/zt-1q4rrimsh-lHHKzrhid1MR4aMOkrnAFQ',
                },
                {
                  label: 'Community Extensions',
                  to: 'pathname:///community',
                }, 
              ],
            },
            {
              title: 'Legal',
              items: [
                {
                label: 'Legal',
                href: 'https://www.salesforce.com/company/legal/',
                },
                {
                label: 'Terms of Service',
                href:  'https://www.salesforce.com/company/legal/sfdc-website-terms-of-service/',
                },
                {
                label: 'Privacy',
                href: 'https://www.salesforce.com/company/privacy/'
                },
                {
                label: 'Responsible Disclosure',
                href:  'https://www.salesforce.com/company/legal/disclosure/',
                },
                {
                label: 'Trust',
                href:  'https://trust.salesforce.com/',
                }, 
                {
                  html:  `<a href="#" data-ignore-geolocation="true" class="optanon-toggle-display" style="color:#FFFFFF">Cookie Preferences</a>`,
                }
              ]
          
            },
          ],
          copyright: `Copyright © ${new Date().getFullYear()} Salesforce, Inc. Built with Docusaurus.`,
        },
        prism: {
          theme: lightCodeTheme,
        },
        announcementBar: isUpcomingVersion ? {
          content:
            'You are browsing a preview of the documentation for the upcoming Extensions API release.',
          backgroundColor: '#a00',
          textColor: '#fff',
          isCloseable: false,
        } : undefined,
      }),

      plugins: [
        [
          '@docusaurus/plugin-google-tag-manager',
          {
            containerId: 'GTM-BVCN',
          },
        ],
        [
          '@docusaurus/plugin-google-gtag',
          {
            // trackingID: 'UA-625217-51',
            trackingID: '469571326',
            anonymizeIP: true,
          },
        ],

        [
          '@docusaurus/plugin-client-redirects',
          {
            redirects: [
              // /docs/oldDoc -> /docs/newDoc
              // publish folder
              {
                to: '/docs/publish/trex_publish',
                from: '/docs/trex_publish',
              },
              {
                to: '/docs/publish/trex_sandbox_publish',
                from: '/docs/trex_sandbox_publish',
              },
              //  (portal page fix)
              {
                to: '/docs',
                from: '/docs/trex_getstarted', 
              },
              //   (dev portal page fix)
              {
                to: '/docs/publish/trex_contributing',
                from: '/docs/trex_contributing', 
              },
              //   (dev portal page fix)
              {
                to: '/docs/security/trex_security',
                from: '/docs/trex_security', 
              },
              //  dev portal page fix
              {
                to: '/docs/debug/trex_debugging',
                from: '/docs/trex_debugging', 
              },   
              //  dev portal page fix
              {
                to: '/docs/debug/trex_debug_server',
                from: '/docs/trex_debug_server', 
              }, 
              //  dev portal page fix
              {
                to: '/docs/debug/trex_logging',
                from: '/docs/trex_logging', 
              }, 
              //  dev portal page fix
              {
                to: '/docs/security/trex_xss_guidance',
                from: '/docs/trex_xss_guidance', 
              }, 
              //  dev portal page fix
              {
                to: '/docs/security/trex_sandbox_test',
                from: '/docs/trex_sandbox_test', 
              },                                                                                                                                                                                        
            ],
          },
        ],  

      ],

      markdown: {

        mermaid: true,

      },
  
      themes: [
        
        '@docusaurus/theme-mermaid',
        [
        require.resolve("@easyops-cn/docusaurus-search-local"),
        /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
        ({
          // ... Your options.
          // `hashed` is recommended as long-term-cache of index file is possible.
          hashed: true,
          indexDocs: true,
          indexBlog: false,
          forceIgnoreNoIndex: true,
          highlightSearchTermsOnTargetPage: true,
          // For Docs using Chinese, The `language` is recommended to set to:
          // ```
          // language: ["en", "zh"],
          // ```
        }),
        ],
      ],
    
      clientModules: [
        require.resolve('./_analytics.js'),
      ],

  };
}

module.exports = getConfig;
