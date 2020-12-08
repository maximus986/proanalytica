import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';
/** @jsx jsx */
import { jsx } from 'theme-ui';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1 sx={{ color: 'primary' }}>Cao ljudi</h1>
    <p sx={{ color: 'secondary' }}>Cao ljudi.</p>
    <p>Cao ljudi.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
);

export default IndexPage;
