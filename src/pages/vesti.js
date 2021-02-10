/** @jsx jsx */
import { graphql } from 'gatsby';
import React from 'react';
import { useLocalizedWpData } from 'hooks';
import SEO from 'components/seo';
import { PageIntro, Container, Post } from 'components';
import { Grid, jsx } from 'theme-ui';
import { Fragment } from 'react';

const News = ({ data }) => {
  const localizedPageData = useLocalizedWpData(data.allWpPage.nodes)[0];
  const localizedPostsData = useLocalizedWpData(data.allWpPost.nodes);
  const {
    newsPage: {
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
          <Grid
            columns={[1, null, 2, null, 3]}
            gap={['24px', null, '30px', null, null, '70px']}
          >
            {localizedPostsData.map((post) => {
              return (
                <Fragment key={post.id}>
                  <Post post={post} />
                </Fragment>
              );
            })}
          </Grid>
        </Container>
      </section>
    </>
  );
};

export default News;

export const PAGE_QUERY = graphql`
  {
    allWpPost {
      nodes {
        id
        title
        language {
          code
        }
        featuredImage {
          node {
            localFile {
              childImageSharp {
                fluid(toFormat: WEBP, quality: 100, cropFocus: CENTER) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
        excerpt
        date(formatString: "DD.MM.YYYY.")
        news {
          newsAuthor
          newsSlug
        }
      }
    }
    allWpPage(filter: { newsPage: { fieldGroupName: { eq: "newsPage" } } }) {
      nodes {
        language {
          code
        }
        newsPage {
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
