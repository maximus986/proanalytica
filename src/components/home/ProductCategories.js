/** @jsx jsx */
import { graphql } from 'gatsby';
import React from 'react';
import { Grid, jsx } from 'theme-ui';
import { Container } from '../container';
import { SectionContainer } from '../SectionContainer';
import Img from 'gatsby-image';
import { Button } from '../button';
import { Link } from '../link';

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
`;

export const ProductCategories = ({ sectionTitle, category }) => {
  return (
    <SectionContainer sectionTitle={sectionTitle}>
      <Grid gap={[5]} columns={[1, 2, 4]} sx={{ px: [4, 7] }}>
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
            <Link
              to={categorySlug}
              sx={{
                display: 'block',
                position: 'relative',
                textAlign: 'center',
                transition: 'imageLink',
                borderRadius: 'image',
                overflow: 'hidden',
                maxHeight: '210px',
                '&:hover': {
                  'figure::before': {
                    boxShadow: 'inset 0px -100px 50px -40px rgba(0,104,119,1)', // Adjust the height of the shadow on breakpoints, depending of the height of the element
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
              <figure
                sx={{
                  display: 'block',
                  overflow: 'hidden',
                  borderRadius: 'image',
                  '&::before': {
                    position: 'absolute',
                    content: "''",
                    width: '100%',
                    height: '100%',
                    left: '0',
                    top: '0',
                    right: '0',
                    boxShadow:
                      'inset 0px -100px 50px -40px rgba(0,104,119,0.4)',
                    zIndex: 1,
                    transition: 'imageLink',
                  },
                }}
              >
                <Img fluid={fluid} alt="" />
              </figure>
              <p
                sx={{
                  position: 'absolute',
                  bg: 'primaryPassive',
                  px: '15px',
                  py: '7px',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  color: 'primary',
                  minWidth: '190px',
                  transition: 'imageLink',
                  fontSize: [1],
                }}
              >
                {categoryName}
              </p>
            </Link>
          );
        })}
      </Grid>
    </SectionContainer>
  );
};
