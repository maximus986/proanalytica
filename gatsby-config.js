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
      resolve: `gatsby-source-wordpress-experimental`,
      options: {
        url: `http://proanalytica.local/graphql`,
      },
    },
    `gatsby-plugin-theme-ui`,
  ],
};
