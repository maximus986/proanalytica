/** @jsx jsx */
import styled from '@emotion/styled';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import { Grid, jsx, useThemeUI } from 'theme-ui';
import { hex2rgba } from 'utils/utils';
import { Link } from '../link';
import { SectionContainer } from '../SectionContainer';

export const fragment = graphql`
  fragment ProductCategoriesSection on WpPage_Homepagesections_Content_ProductCategory {
    fieldGroupName
    sectionTitle
    category {
      productCategoryItem {
        ... on WpProductCategory {
          id
          productCategory {
            categorySlug
            categoryName
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
`;

export const ProductCategories = ({ sectionTitle, category }) => {
  const {
    theme: { colors },
  } = useThemeUI();
  const boxShadowColor = hex2rgba(colors.primary, 0.6);
  const boxShadowHoverColor = hex2rgba(colors.primary, 0.9);
  return (
    <SectionContainer sectionTitle={sectionTitle} bg="primaryPassive">
      <Grid
        gap={[6]}
        columns={[1, 2, null, null, 4]}
        sx={{ px: [4, null, 5, 7, 8] }}
      >
        {category.map(({ productCategoryItem }, id) => {
          const {
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
            <ImageLink
              to={categorySlug}
              sx={{
                transition: 'imageLink',
                borderRadius: 'image',
                '&:hover': {
                  'figure > div::before': {
                    boxShadow: [
                      `inset 0px -80px 50px -40px ${boxShadowHoverColor}`,
                      `inset 0px -105px 50px -40px ${boxShadowHoverColor}`,
                      `inset 0px -130px 50px -40px ${boxShadowHoverColor}`,
                      `inset 0px -140px 50px -40px ${boxShadowHoverColor}`,
                      `inset 0px -95px 50px -40px ${boxShadowHoverColor}`,
                      `inset 0px -110px 50px -40px ${boxShadowHoverColor}`,
                    ],
                  },
                  p: {
                    bg: 'primary',
                    color: 'primaryBackground',
                    cursor: 'pointer',
                  },
                },
              }}
              key={id}
            >
              <Figure
                sx={{
                  borderRadius: 'image',
                }}
              >
                <StyledImg
                  fluid={fluid}
                  alt=""
                  sx={{
                    '&::before': {
                      boxShadow: [
                        `inset 0px -80px 50px -40px ${boxShadowColor}`,
                        `inset 0px -105px 50px -40px ${boxShadowColor}`,
                        `inset 0px -130px 50px -40px ${boxShadowColor}`,
                        `inset 0px -140px 50px -40px ${boxShadowColor}`,
                        `inset 0px -95px 50px -40px ${boxShadowColor}`,
                        `inset 0px -110px 50px -40px ${boxShadowColor}`,
                      ],
                      transition: 'imageLink',
                    },
                  }}
                />
              </Figure>
              <ProductCategoryName
                sx={{
                  bg: 'primaryPassive',
                  color: 'primary',
                  transition: 'imageLink',
                  fontSize: [1, null, null, null, null, 2],
                }}
              >
                {categoryName}
              </ProductCategoryName>
            </ImageLink>
          );
        })}
      </Grid>
    </SectionContainer>
  );
};

const ImageLink = styled(Link)`
  overflow: hidden;
  display: block;
  position: relative;
  text-align: center;
`;

const Figure = styled.figure`
  display: block;
  overflow: hidden;
`;

const StyledImg = styled(Img)`
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

const ProductCategoryName = styled.p`
  position: absolute;
  padding: 7px 15px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 190px;
`;
