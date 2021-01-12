/** @jsx jsx */
import React from 'react';
import { usePageContext, useTranslation } from '@3nvi/gatsby-theme-intl';
import { graphql } from 'gatsby';
import { Grid, jsx, useThemeUI } from 'theme-ui';
import { PageIntro } from '../components/PageIntro';
import SEO from '../components/seo';
import { useLocalizedWpData } from '../hooks/useLocalizedWpData';
import Img from 'gatsby-image';
import { Link } from '../components/link';
import { Container } from '../components/Container';
import styled from '@emotion/styled';
import { hex2rgba } from '../utils/utils';

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
  const {
    theme: { colors },
  } = useThemeUI();
  const boxShadowColor = hex2rgba(colors.primary, 0.6);
  return (
    <>
      <SEO title={t('products')} />
      <PageIntro
        pageTitle={pageTitle}
        pageSubtitle={pageSubtitle}
        pageIntroImage={pageIntroImage}
      />
      <section sx={{ px: [4, null, 5, 7, 8], py: [8], bg: 'primaryPassive' }}>
        <Grid gap={[6]} columns={[1, 2, null, null, 4]}>
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
              <ProductLink key={id} to={categorySlug} {...{ colors }}>
                <Figure
                  sx={{
                    mb: 5,
                  }}
                >
                  <ProductImg
                    fluid={fluid}
                    alt=""
                    sx={{
                      transition: 'button',
                      '&::before': {
                        boxShadow: [
                          `inset 0px -110px 50px -40px ${boxShadowColor}`,
                        ],
                      },
                    }}
                  />
                </Figure>
                <Box
                  sx={{
                    bg: 'primaryBackground',
                    p: 4,
                    '&::before': {
                      bg: 'secondary',
                      transition: 'button',
                    },
                    '&::after': {
                      transition: 'button',
                    },
                  }}
                >
                  <ProductName
                    sx={{
                      fontSize: 6,
                    }}
                  >
                    {categoryName}
                  </ProductName>
                  <ProductCount
                    sx={{
                      fontSize: 9,
                      lineHeight: 'normal',
                    }}
                  >{`0${index + 1}`}</ProductCount>
                </Box>
              </ProductLink>
            );
          })}
        </Grid>
      </section>
    </>
  );
};

export default Products;

const Box = styled.div`
  position: relative;
  height: calc(100% - 624px);
  min-height: 140px;
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
    z-index: 10;
  }
`;

const ProductImg = styled(Img)`
  width: 100%;
  height: 100%;
  &::before {
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    right: 0;
    z-index: 1;
  }
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
        border-bottom-color: ${(props) => props.colors.secondary};
      }
    }
    ${ProductImg} {
      opacity: 0.7;
      transform: scale(1.05);
    }
  }
`;

const Figure = styled.figure`
  height: 600px;
  overflow: hidden;
  position: relative;
`;

const ProductName = styled.h3`
  position: relative;
  z-index: 10;
  word-break: break-word;
`;

const ProductCount = styled.p`
  position: absolute;
  bottom: 10px;
  right: 10px;
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
                fluid(quality: 100, toFormat: WEBP) {
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
                        fluid(quality: 100, cropFocus: CENTER, toFormat: WEBP) {
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
