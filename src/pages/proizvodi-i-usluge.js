/** @jsx jsx */
import React from 'react';
import { useTranslation } from '@3nvi/gatsby-theme-intl';
import { PageIntro, ProductCategoriesSection } from 'components';
import SEO from 'components/seo';
import { graphql } from 'gatsby';
import { useLocalizedWpData } from 'hooks/useLocalizedWpData';
import { jsx } from 'theme-ui';

const Products = ({ data }) => {
  const localizedPageData = useLocalizedWpData(
    data.allWpPage.nodes.filter(
      ({ productsAndCategoryPage }) =>
        productsAndCategoryPage.productCategories,
    ),
  )[0];
  const {
    productsAndCategoryPage: {
      pageIntros: {
        pageIntroItem: { pageTitle, pageSubtitle, pageIntroImage },
      },
      productCategories,
    },
  } = localizedPageData;
  const { t } = useTranslation();
  return (
    <>
      <SEO title={t('products')} />
      <PageIntro
        pageTitle={pageTitle}
        pageSubtitle={pageSubtitle}
        pageIntroImage={pageIntroImage}
      />
      <ProductCategoriesSection categories={productCategories} />
    </>
  );
};

export default Products;

export const PAGE_QUERY = graphql`
  {
    allWpPage {
      nodes {
        language {
          code
        }
        productsAndCategoryPage {
          fieldGroupName
          pageIntros {
            ... on WpPageIntro {
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
            productCategoryItem {
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
