/** @jsx jsx */
import React, { useState } from 'react';
import { Grid, jsx } from 'theme-ui';
import SEO from 'components/seo';
import { useLocalizedWpData } from 'hooks';
import { PageIntro, Container } from 'components';
import { graphql } from 'gatsby';

const Links = ({ data }) => {
  const localizedPageData = useLocalizedWpData(
    data.allWpPage.nodes.filter(({ usefulLinksPage }) => {
      return usefulLinksPage.webinars;
    }),
  )[0];
  const {
    usefulLinksPage: {
      pageIntros: {
        pageIntroItem: { pageTitle, pageSubtitle, pageIntroImage },
      },
      webinars,
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
      <section sx={{ py: [8] }}>
        <Container>
          <Grid columns={[null, null, null, 2]} gap={8}>
            {webinars.map(({ webinar }, id) => {
              return (
                <React.Fragment key={id}>
                  <Video
                    src={webinar.webinarItem.webinarVideoLink}
                    title={webinar.webinarItem.webinarTitle}
                  />
                </React.Fragment>
              );
            })}
          </Grid>
        </Container>
      </section>
    </>
  );
};

const Video = ({ src, title }) => {
  const [loaded, setLoaded] = useState(false);
  return (
    <div>
      {!loaded ? <Placeholder /> : null}
      <iframe
        src={src}
        title={title}
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        frameBorder="0"
        webkitallowfullscreen="true"
        mozallowfullscreen="true"
        allowFullScreen
        width={loaded ? '100%' : '0'}
        height={loaded ? '400px' : '0'}
        loading="lazy"
        sx={{
          transition: 'opacity 0.1s linear',
          opacity: loaded ? 1 : '0',
        }}
        onLoad={() => {
          setLoaded(true);
        }}
      />
    </div>
  );
};

const Placeholder = () => {
  return <div sx={{ width: '100%', height: '400px', bg: '#f2f2f2' }} />;
};

export default Links;

export const PAGE_QUERY = graphql`
  {
    allWpPage {
      nodes {
        language {
          code
        }
        usefulLinksPage {
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
          webinars {
            webinar {
              ... on WpWebinar {
                id
                webinarItem {
                  webinarTitle
                  webinarVideoLink
                }
              }
            }
          }
        }
      }
    }
  }
`;
