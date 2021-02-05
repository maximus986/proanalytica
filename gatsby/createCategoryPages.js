const path = require(`path`);
const _ = require('lodash');

module.exports = async ({ actions, graphql }) => {
  const CATEGORY_PAGES_QUERY = `
    query MyQuery {
      allWpPage(filter: {categoryPage: {fieldGroupName: {eq: "categoryPage"}}}) {
        nodes {
          id
          title
          language {
            code
          }
          categoryPage {
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
            productCategories {
              productCategory {
                ... on WpProductCategory {
                  id
                  productCategory {
                    categoryName
                    categorySlug
                    categoryImage {
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
            }
          }
        }
      }
    }
  `;
  const { createPage } = actions;

  // Create a function for getting pages
  const fetchPages = async () =>
    await graphql(CATEGORY_PAGES_QUERY).then(({ data }) => {
      // Filter all pages that don't have category page field associated with them
      const categoryData = data.allWpPage.nodes.filter(
        ({ categoryPage }) => categoryPage.productCategories,
      );
      // Category data is a array of all pages with category page field. In order to create category pages the data structure should
      // be array of arrays grouped by page slug.
      // Example: [{page1, pageSlug: /proizvodi-i-usluge/hemija, lang: EN}, {page1, pageSlug: /proizvodi-i-usluge/hemija, lang: SR}, {page2, pageSlug: /proizvodi-i-usluge/laboratorisjka-oprema, lang: EN}, {page2, pageSlug: /proizvodi-i-usluge/laboratorisjka-oprema, lang: SR}]
      // Grouped: [[{page1, pageSlug: /proizvodi-i-usluge/hemija, lang: EN}, {page1, pageSlug: /proizvodi-i-usluge/hemija, lang: SR}], [{page2, pageSlug: /proizvodi-i-usluge/laboratorisjka-oprema, lang: EN}, {page2, pageSlug: /proizvodi-i-usluge/laboratorisjka-oprema, lang: SR}]
      // First element is data for one page with multiple locales, second for another page, etc.
      return Object.values(_.groupBy(categoryData, 'categoryPage.pageSlug'));
    });

  // Map over all of the pages and call CreatePage
  await fetchPages().then((pages) => {
    pages.forEach((page) => {
      createPage({
        path: page[0].categoryPage.pageSlug,
        component: path.resolve(`./src/templates/categoryPageTemplate.js`),
        context: page,
      });
    });
  });
};
