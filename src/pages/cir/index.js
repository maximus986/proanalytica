import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { useTranslation } from 'react-i18next';
import SEO from '../../components/seo';

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    {
      allWpPost(filter: { language: { code: { eq: SR } } }) {
        nodes {
          title
        }
      }
    }
  `);
  const [t] = useTranslation();
  return (
    <>
      <SEO title="Home" />
      <h1>{t('home')}</h1>
      <h1>{data.allWpPost.nodes[0].title}</h1>
    </>
  );
};

export default IndexPage;
