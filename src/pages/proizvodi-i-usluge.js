/** @jsx jsx */
import React from 'react';
import { usePageContext, useTranslation } from '@3nvi/gatsby-theme-intl';
import { graphql } from 'gatsby';
import { Grid, jsx } from 'theme-ui';
import { PageIntro } from '../components/PageIntro';
import SEO from '../components/seo';
import { useLocalizedWpData } from '../hooks/useLocalizedWpData';
import Img from 'gatsby-image';
import { Link } from '../components/link';
import { Container } from '../components/container';

const Products = ({ data }) => {
  const localizedPageData = useLocalizedWpData(data.allWpPage.nodes)[0];
  const {
    productsAndCategoryPage: {
      pageTitle,
      pageSubtitle,
      pageIntroImage,
      productCategories,
    },
  } = localizedPageData;
  const { t } = useTranslation();
  const { lang } = usePageContext();

  return (
    <>
      <SEO title={t('products')} />
      {/* Possible candidate for fragment instead of using props */}
      <PageIntro
        pageTitle={pageTitle}
        pageSubtitle={pageSubtitle}
        pageIntroImage={pageIntroImage}
      />
      <section>
        <Container>
          <Grid>
            {productCategories.map(({ productCategoryItem }, index) => {
              const {
                id,
                productCategory: {
                  categoryName,
                  categorySlug,
                  categoryImage: {
                    localFile: {
                      childImageSharp: { fluid },
                    },
                  },
                },
              } = productCategoryItem;
              return (
                <Link key={id} to={categorySlug}>
                  <figure sx={{ mb: 5 }}>
                    <Img fluid={fluid} alt="" />
                  </figure>
                  <article>
                    <h3>{categoryName}</h3>
                    <p>{`0${index + 1}`}</p>
                  </article>
                </Link>
              );
            })}
          </Grid>
        </Container>
      </section>
    </>
  );
};

export default Products;

export const PAGE_QUERY = graphql`
  {
    allWpPage(
      filter: {
        productsAndCategoryPage: {
          fieldGroupName: { eq: "productsAndCategoryPage" }
        }
      }
    ) {
      nodes {
        language {
          code
        }
        productsAndCategoryPage {
          pageSubtitle
          pageTitle
          pageIntroImage {
            localFile {
              childImageSharp {
                fluid(quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          productCategories {
            fieldGroupName
            productCategoryItem {
              ... on WpProductCategory {
                id
                productCategory {
                  categoryName
                  categorySlug
                  categoryImage {
                    localFile {
                      childImageSharp {
                        fluid(quality: 100) {
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
