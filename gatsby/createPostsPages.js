const path = require(`path`);
const _ = require('lodash');

module.exports = async ({ actions, graphql }) => {
  const POSTS_PAGES_QUERY = `
    query MyQuery {
      allWpPost {
        nodes {
          id
          title
          content
          language {
            code
          }
          featuredImage {
            node {
              localFile {
                childImageSharp {
                  fluid(toFormat: WEBP, quality: 100, maxHeight: 600) {
                    src
                  }
                }
              }
            }
          }
          excerpt
          date(formatString: "DD.MM.YYYY.")
          news {
            newsAuthor
            newsSlug
          }
        }
      }
    }
  `;
  const { createPage } = actions;

  // Create a function for getting posts
  const fetchPosts = async () =>
    await graphql(POSTS_PAGES_QUERY).then(({ data }) => {
      const posts = data.allWpPost.nodes;
      return Object.values(_.groupBy(posts, 'news.newsSlug'));
    });

  // Map over all of the posts and call CreatePage
  await fetchPosts().then((posts) => {
    posts.forEach((post) => {
      createPage({
        path: post[0].news.newsSlug,
        component: path.resolve(`./src/templates/postTemplate.js`),
        context: post,
      });
    });
  });
};
