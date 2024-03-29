/** @jsx jsx */
import { graphql } from 'gatsby';
import React from 'react';
import { useLocalizedWpData } from 'hooks';
import { usePageContext } from '@3nvi/gatsby-theme-intl';
import { PageIntro, Offering } from 'components';
import SEO from 'components/seo';
import { jsx } from 'theme-ui';
import { Fragment } from 'react';

const ProductsListPageTemplate = ({ data }) => {
  const { originalPath } = usePageContext();
  const localizedPageData = useLocalizedWpData(
    data.allWpPage.nodes.filter(
      ({ productsListPage }) => productsListPage.offerings,
    ),
  ).filter((page) => page.productsListPage.pageSlug === originalPath)[0];
  const {
    productsListPage: {
      pageIntros: {
        pageIntroItem: { pageTitle, pageSubtitle, pageIntroImage },
      },
      offerings,
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
      <section>
        {offerings.map(({ offering: { id, offeringItem } }, index) => {
          return (
            <div key={id} sx={{ my: [null, null, null, 5] }}>
              <Offering offeringIndex={index} offeringItem={offeringItem} />
            </div>
          );
        })}
      </section>
    </>
  );
};

export default ProductsListPageTemplate;

export const PAGE_QUERY = graphql`
  {
    allWpPage(
      filter: {
        productsListPage: { fieldGroupName: { eq: "productsListPage" } }
      }
    ) {
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
                        ...GatsbyImageSharpFluid
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
                          ...GatsbyImageSharpFluid
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
