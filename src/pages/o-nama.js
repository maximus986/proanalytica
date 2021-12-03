/** @jsx jsx */
import React from 'react';
import { useTranslation } from '@3nvi/gatsby-theme-intl';
import { jsx } from 'theme-ui';
import SEO from 'components/seo';
import { graphql } from 'gatsby';
import { useLocalizedWpData } from 'hooks';
import { PageIntro, WpContent, Container } from 'components';
import { parseContentWithLinks } from 'utils/utils';

const AboutUs = ({ data }) => {
  const { t } = useTranslation();
  const localizedPageData = useLocalizedWpData(
    data.allWpPage.nodes.filter((page) => page.content),
  )[0];

  const {
    aboutUsPage: {
      pageIntros: {
        pageIntroItem: { pageTitle, pageSubtitle, pageIntroImage },
      },
    },
    content,
  } = localizedPageData;

  return (
    <>
      <SEO title={t('aboutUs')} />
      <PageIntro
        pageTitle={pageTitle}
        pageSubtitle={pageSubtitle}
        pageIntroImage={pageIntroImage}
      />
      <section sx={{ px: [4, 0], py: [8] }}>
        <Container>
          <WpContent>{parseContentWithLinks(content)}</WpContent>
        </Container>
      </section>
    </>
  );
};

export default AboutUs;

export const PAGE_QUERY = graphql`
  {
    allWpPage(
      filter: { aboutUsPage: { fieldGroupName: { eq: "aboutUsPage" } } }
    ) {
      nodes {
        title
        language {
          code
        }
        content
        aboutUsPage {
          pageIntros {
            ... on WpPageIntro {
              pageIntroItem {
                pageTitle
                pageSubtitle
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
