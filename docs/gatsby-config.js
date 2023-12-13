const remarkSlug = require('remark-slug');

const corePackage = require('../src/asuikit-core/package.json');

module.exports = {
  pathPrefix: 'as-uikit',
  flags: {
    DEV_SSR: false,
    FAST_DEV: true,
  },

  siteMetadata: {
    title: 'AS.UIKit Docs',
    description: 'AS.UIKit documentation',
    author: '@rtivital',
    siteUrl: 'https://srcalienswap.github.io/as-uikit/',
    version: corePackage.version,
  },

  plugins: [
    'gatsby-plugin-cname',
    'gatsby-plugin-tsconfig-paths',
    {
      resolve: 'gatsby-plugin-layout',
      options: {
        component: `${__dirname}/src/components/Layout/Layout`,
      },
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        remarkPlugins: [remarkSlug],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },

    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'docs',
        path: `${__dirname}/src/docs/`,
      },
    },

    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'AS.UIKit Docs',
        short_name: 'asuikit',
        start_url: '/',
        background_color: '#228be6',
        theme_color: '#228be6',
        display: 'minimal-ui',
        icon: 'src/images/favicon.svg',
      },
    },

    {
      resolve: 'gatsby-plugin-nprogress',
      options: {
        color: '#228be6',
        showSpinner: false,
      },
    },
  ],
};
