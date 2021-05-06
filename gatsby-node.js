const path = require('path');
const createCategoryPages = require(`./gatsby/createCategoryPages`);
const createPostsPages = require(`./gatsby/createPostsPages`);
const createProductsListPages = require(`./gatsby/createProductsListPage`);

exports.onCreateWebpackConfig = ({ stage, actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
  });
};

exports.createPages = async ({ actions, graphql }) => {
  const { createRedirect } = actions;
  // Used for redirects to the default language prefix. Required for @3nvi/gatsby-theme-intl plugin and form submissions to work when the site is deployed yo netlify and
  createRedirect({
    fromPath: '/',
    toPath: '/sr',
    statusCode: 200,
  });
  await createCategoryPages({ actions, graphql });
  await createPostsPages({ actions, graphql });
  await createProductsListPages({ actions, graphql });
};
