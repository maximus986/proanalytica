const path = require('path');

module.exports = {
  siteMetadata: {
    title: `Proanalytica`,
    description: `Proanalytica`,
    author: `@AleksandarM986`,
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-i18n',
      options: {
        langKeyDefault: 'sr',
        useLangKeyLayout: false,
      },
    },
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        src: path.join(__dirname, 'src'),
        i18n: path.join(__dirname, 'src/i18n'),
        images: path.join(__dirname, 'src/images'),
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
  ],
};
