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

exports.onCreatePage = async ({ page, actions }) => {
  const { createPage, deletePage } = actions;
  // Check if the page is a localized 404
  if (page.path.match(/^\/[a-z]{2}\/404\/$/)) {
    const oldPage = { ...page };
    // Get the language code from the path, and match all paths
    // starting with this code (apart from other valid paths)
    const langCode = page.path.split(`/`)[1];
    page.matchPath = `/${langCode}/*`;
    // Recreate the modified page
    deletePage(oldPage);
    createPage(page);
  }
};
