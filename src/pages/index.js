/** @jsx jsx */
import { jsx } from 'theme-ui';
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { useTranslation } from 'react-i18next';
import SEO from '../components/seo';
import { Button } from '../components/button';
import { styled } from 'theme-ui';
import { Field } from '../components/form/field';

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    {
      allWpPost(filter: { language: { code: { eq: HR } } }) {
        nodes {
          title
        }
      }
    }
  `);
  const [t] = useTranslation();
  return (
    <div sx={{ bg: 'white', padding: 4 }}>
      <SEO title="Home" />
      <h1>{t('home')}</h1>
      <h1>{data.allWpPost.nodes[0].title}</h1>
      <h2>
        We Provide You With Access To The Best Pharmacy And Home Medical Car
      </h2>
      <div sx={{ mb: 1 }}>
        <Button variant="primary" to="/en">
          View products
        </Button>
      </div>
      <div sx={{ mb: 1 }}>
        <Button variant="outlineLarge" to="/en">
          View products
        </Button>
      </div>
      <div sx={{ mb: 1 }}>
        <Button variant="outlineSmall" to="/en">
          View products
        </Button>
      </div>
      <div sx={{ mb: 1 }}>
        <Button variant="outlineRegular" to="/en">
          View products
        </Button>
      </div>
      <div sx={{ mb: 1 }}>
        <Button variant="secondary" to="/en">
          View products
        </Button>
      </div>
      <div sx={{ mb: 1 }}>
        <Button variant="link" to="/en">
          View products
        </Button>
      </div>
      <h3>Lorem ipsum dolor sit.</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, fuga.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, fuga.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, fuga.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, fuga.
      </p>
      <Field
        placeholder="Your Name*"
        name="name"
        onChange={() => {}}
        value=""
      />
    </div>
  );
};

export default IndexPage;
