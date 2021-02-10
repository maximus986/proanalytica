const path = require('path');
const createCategoryPages = require(`./gatsby/createCategoryPages`);
const createPostsPages = require(`./gatsby/createPostsPages`);

exports.onCreateWebpackConfig = ({ stage, actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
  });
};

exports.createPages = async ({ actions, graphql }) => {
  await createCategoryPages({ actions, graphql });
  await createPostsPages({ actions, graphql });
};
