const path = require('path');
const createCategoryPages = require(`./gatsby/createCategoryPages`);

exports.onCreateWebpackConfig = ({ stage, actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
  });
};

exports.createPages = async ({ actions, graphql }) => {
  await createCategoryPages({ actions, graphql });
};
