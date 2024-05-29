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
              'https://github.dev/tableau/extensions-api/blob/main/website/',
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
              href:  'https://github.com/tableau/extensions-api/blob/main/Tutorial/readme.md',
            },
            {
              label: 'Community Extensions',
              href: 'https://tableau.github.io/extensions-api/community/',
            }
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
                  href: 'https://github.com/tableau/extensions-api/blob/main/Tutorial/readme.md',
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
                  href: 'https://tableau.github.io/extensions-api/community/',
                },
              ],
            },
            {
              title: 'Legal',
              items: [
                {
                label: 'Legal',
                href: 'https://www.tableau.com/en-us/legal',
                },
                {
                  label: 'Privacy',
                  href: 'https://www.salesforce.com/company/privacy/'
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
            trackingID: 'UA-625217-51',
            anonymizeIP: true,
          },
        ],
      //    '@cmfcmf/docusaurus-search-local',
      /*  [
          require.resolve("@easyops-cn/docusaurus-search-local"),
         // /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} 
          ({
            // ... Your options.
            // `hashed` is recommended as long-term-cache of index file is possible.
            hashed: true,
            // For Docs using Chinese, The `language` is recommended to set to:
            // ```
            // language: ["en", "zh"],
            // ```
          }),  
          ], */
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
      ]
  };
}

module.exports = getConfig;
