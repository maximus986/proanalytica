const path = require('path');
const translations = require('./translations.json');

module.exports = {
  siteMetadata: {
    title: `Proanalytica`,
    description: `Proanalytica`,
    author: `@AleksandarM986`,
    supportedLanguages: ['en', 'sr', 'cir'],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Proanalytica`,
        short_name: `Proanalytica`,
        start_url: `/`,
        background_color: `#f1f1e6`,
        theme_color: `#f1f1e6`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: `${__dirname}/src/components/layout.js`,
      },
    },
    {
      resolve: `gatsby-source-wordpress-experimental`,
      options: {
        url: `https://api.proanalytica.com/graphql`,
      },
    },
    `gatsby-plugin-theme-ui`,
    // {
    //   resolve: 'gatsby-plugin-robots-txt',
    //   options: {
    //     host: `site-url`, // !add site url
    //     sitemap: `site-url/sitemap.xml`, // !add site url
    //     policy: [{ userAgent: '*', allow: '/' }],
    //   },
    // },
    // `gatsby-plugin-sitemap`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-emotion`,
    {
      resolve: `@3nvi/gatsby-theme-intl`,
      options: {
        supportedLanguages: ['en', 'sr', 'cir'],
        defaultLanguage: 'cir',
        i18nextConfig: {
          resources: translations,
        },
      },
    },
    // Used for redirects to the default language prefix. Required @3nvi/gatsby-theme-intl plugin to work when the site is deployed yo netlify
    `gatsby-plugin-netlify`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`ubuntu\:300,400,400i,700`],
        display: 'swap',
      },
    },
    {
      resolve: 'gatsby-plugin-react-leaflet',
    },
  ],
};
