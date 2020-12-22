/** @jsx jsx */
import React from 'react';
import { usePageContext, useTranslation } from '@3nvi/gatsby-theme-intl';
import { graphql } from 'gatsby';
import { jsx } from 'theme-ui';
import SEO from '../components/seo';
import { useLocalizedWpData } from '../hooks/useLocalizedWpData';
import { Hero } from '../components/home/Hero';
import { HomeAboutUs } from '../components/home/HomeAboutUs';
import { ProductCategories } from '../components/home/ProductCategories';
import { Testimonials } from '../components/home/Testimonials';

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
            ...ProductCategoriesSection
            ...TestimonialsSection
          }
        }
      }
    }
  }
`;

const IndexPage = ({ data }) => {
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
          case 'page_Homepagesections_Content_ProductCategory': {
            return <ProductCategories key={i} {...section} />;
          }
          case 'page_Homepagesections_Content_Testimonials': {
            return <Testimonials key={i} {...section} />;
          }
          default:
            return <p>Something Went wrong...</p>;
        }
      })}
    </>
  );
};

export default IndexPage;
