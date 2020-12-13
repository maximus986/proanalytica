/** @jsx jsx */
import { usePageContext, useTranslation } from '@3nvi/gatsby-theme-intl';
import { graphql, useStaticQuery } from 'gatsby';
import { jsx } from 'theme-ui';
import { Field } from '../components/form/field';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { Button } from '../components/button';

const languageMap = {
  sr: 'HR',
  en: 'EN',
  cir: 'SR',
};

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    {
      allWpPost {
        nodes {
          title
          language {
            code
          }
        }
      }
    }
  `);
  const { t } = useTranslation();
  const { lang } = usePageContext();
  const filteredData = data.allWpPost.nodes.filter(
    (item) => item.language.code === languageMap[lang],
  )[0];

  return (
    <Layout>
      <div sx={{ bg: 'white', padding: 4 }}>
        <SEO title="Home" />
        <h1>{t('home')}</h1>
        <h1>{filteredData.title}</h1>
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
          fuga. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Corrupti, fuga. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Corrupti, fuga. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Corrupti, fuga.
        </p>
        <Field
          placeholder="Your Name*"
          name="name"
          onChange={() => {}}
          value=""
        />
      </div>
    </Layout>
  );
};

export default IndexPage;
