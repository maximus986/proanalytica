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
import styled from '@emotion/styled';

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
      <section sx={{ px: [4, 0], py: [8], bg: 'primaryPassive' }}>
        <Container>
          <Grid gap={[6]} columns={[1, null, 2, 4]}>
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
                <ProductLink key={id} to={categorySlug}>
                  <figure
                    sx={{
                      mb: 5,
                      height: '600px',
                      overflow: 'hidden',
                      position: 'relative',
                    }}
                  >
                    <ProductImg fluid={fluid} alt="" sx={{ height: '100%' }} />
                  </figure>
                  <Box
                    sx={{
                      bg: 'primaryBackground',
                      p: 5,
                    }}
                  >
                    <div sx={{ position: 'relative', zIndex: 10 }}>
                      <h3 sx={{ fontSize: 6 }}>{categoryName}</h3>
                      <p
                        sx={{
                          fontSize: 8,
                          lineHeight: 'normal',
                          textAlign: 'right',
                        }}
                      >{`0${index + 1}`}</p>
                    </div>
                  </Box>
                </ProductLink>
              );
            })}
          </Grid>
        </Container>
      </section>
    </>
  );
};

export default Products;

const Box = styled.div`
  position: relative;
  &:before {
    position: absolute;
    content: '';
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
    opacity: 0;
    transform-origin: top;
    transform: scale(0.9) translateY(20px);
    background: #006877;
    transition: all 500ms ease;
  }
  &:after {
    position: absolute;
    content: '';
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-bottom: 5px solid white;
    left: 50%;
    transform: translateX(-100%);
    top: -5px;
    transition: all 500ms ease;
    z-index: 10;
  }
`;

const ProductImg = styled(Img)`
  width: 100%;
  transition: all 500ms ease;
`;

const ProductLink = styled(Link)`
  overflow: hidden;
  &:hover {
    ${Box} {
      &::before {
        opacity: 1;
        transform: scale(1) translateY(0px);
        transition: 1s;
      }
      &::after {
        border-bottom-color: #006877;
      }
    }
    ${ProductImg} {
      opacity: 0.7;
      transform: scale(1.05);
    }
  }
`;

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
                        fluid(quality: 100, cropFocus: CENTER) {
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
