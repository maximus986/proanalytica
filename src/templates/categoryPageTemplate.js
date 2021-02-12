/** @jsx jsx */
import { graphql } from 'gatsby';
import React from 'react';
import { useLocalizedWpData } from 'hooks';
import { usePageContext } from '@3nvi/gatsby-theme-intl';
import { PageIntro, ProductCategoriesSection } from 'components';
import SEO from 'components/seo';
import { jsx } from 'theme-ui';

const CategoryPageTemplate = (props) => {
  const { originalPath } = usePageContext();
  const localizedPageData = useLocalizedWpData(
    props.data.allWpPage.nodes.filter(
      ({ categoryPage }) => categoryPage.productCategories,
    ),
  ).filter((page) => page.categoryPage.pageSlug === originalPath)[0];
  const {
    categoryPage: {
      pageIntros: {
        pageIntroItem: { pageTitle, pageSubtitle, pageIntroImage },
      },
      productCategories,
    },
  } = localizedPageData;
  return (
    <>
      <SEO title={pageTitle} />
      <PageIntro
        pageTitle={pageTitle}
        pageSubtitle={pageSubtitle}
        pageIntroImage={pageIntroImage}
      />
      <ProductCategoriesSection categories={productCategories} />
    </>
  );
};

export default CategoryPageTemplate;

export const PAGE_QUERY = graphql`
  query CATEGORY_PAGES_QUERY {
    allWpPage(
      filter: { categoryPage: { fieldGroupName: { eq: "categoryPage" } } }
    ) {
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
                        ...GatsbyImageSharpFluid
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
                          ...GatsbyImageSharpFluid
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
