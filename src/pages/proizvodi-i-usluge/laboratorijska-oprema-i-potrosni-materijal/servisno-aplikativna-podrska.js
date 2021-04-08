/** @jsx jsx */
import React from 'react';
import { Grid, jsx } from 'theme-ui';
import SEO from 'components/seo';
import { useLocalizedWpData } from 'hooks';
import { PageIntro, Container, Form } from 'components';
import { graphql } from 'gatsby';

const Services = ({ data }) => {
  const localizedPageData = useLocalizedWpData(data.allWpPage.nodes)[0];
  const {
    serviceApplicationSupportPage: {
      pageIntros: {
        pageIntroItem: { pageTitle, pageSubtitle, pageIntroImage },
      },
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
      <section sx={{ px: [4, 0], py: [8] }}>
        <Container>
          <Form />
        </Container>
      </section>
    </>
  );
};

export default Services;

export const PAGE_QUERY = graphql`
  {
    allWpPage(
      filter: {
        serviceApplicationSupportPage: {
          fieldGroupName: { eq: "serviceApplicationSupportPage" }
        }
      }
    ) {
      nodes {
        language {
          code
        }
        serviceApplicationSupportPage {
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
        }
      }
    }
  }
`;
