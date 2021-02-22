const path = require(`path`);
const _ = require('lodash');

module.exports = async ({ actions, graphql }) => {
  const PRODUCTS_LIST_PAGES_QUERY = `
    {
      allWpPage(filter: {productsListPage: {fieldGroupName: {eq: "productsListPage"}}}) {
        nodes {
          title
          language {
            code
          }
          productsListPage {
            pageSlug
            pageIntros {
              ... on WpPageIntro {
                id
                pageIntroItem {
                  pageSubtitle
                  pageTitle
                  pageIntroImage {
                    localFile {
                      childImageSharp {
                        fluid(quality: 100, toFormat: WEBP) {
                          src
                        }
                      }
                    }
                  }
                }
              }
            }
            offerings {
              offering {
                ... on WpOffering {
                  id
                  offeringItem {
                    offeringItemName
                    offeringItemDescription
                    offeringItemButtonLabel
                    offeringItemImage {
                      localFile {
                        childImageSharp {
                          fluid(quality: 100, toFormat: WEBP) {
                            src
                          }
                        }
                      }
                    }
                    offeringItemDocument {
                      localFile {
                        url
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `;
  const { createPage } = actions;

  // Create a function for getting pages
  const fetchPages = async () =>
    await graphql(PRODUCTS_LIST_PAGES_QUERY).then(({ data }) => {
      const productsListData = data.allWpPage.nodes.filter(
        ({ productsListPage }) => productsListPage.offerings,
      );
      return Object.values(
        _.groupBy(productsListData, 'productsListPage.pageSlug'),
      );
    });

  // Map over all of the pages and call CreatePage
  await fetchPages().then((pages) => {
    pages.forEach((page) => {
      createPage({
        path: page[0].productsListPage.pageSlug,
        component: path.resolve(`./src/templates/productsListPageTemplate.js`),
        context: page,
      });
    });
  });
};
