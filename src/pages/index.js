/** @jsx jsx */
import React from 'react';
import { usePageContext, useTranslation } from '@3nvi/gatsby-theme-intl';
import { graphql } from 'gatsby';
import { jsx } from 'theme-ui';
import { Container } from '../components/container';
import { Hero } from '../components/Hero';
import SEO from '../components/seo';
import { useLocalizedWpData } from '../hooks/useLocalizedWpData';
import { HomeAboutUs } from '../components/HomeAboutUs';

export const PAGE_QUERY = graphql`
  {
    allWpPage {
      nodes {
        language {
          code
        }
        homePageSections {
          content {
            ...HeroSection
            ...AboutUsSection
          }
        }
      }
    }
  }
`;

const IndexPage = ({ data }) => {
  const { lang } = usePageContext();
  const { t } = useTranslation();
  const [localizedPageData] = useLocalizedWpData(data.allWpPage.nodes);
  const content = localizedPageData.homePageSections.content;

  return (
    <>
      <SEO title="Home" />
      {content.map((section, i) => {
        const fieldGroupName = section.fieldGroupName;
        switch (fieldGroupName) {
          case 'page_Homepagesections_Content_Hero': {
            return <Hero key={i} {...section} />;
          }
          case 'page_Homepagesections_Content_AboutUs': {
            return <HomeAboutUs key={i} {...section} />;
          }
          default:
            return <p>Something Went wrong...</p>;
        }
      })}
    </>
  );
};

export default IndexPage;
