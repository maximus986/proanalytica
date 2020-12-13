/** @jsx jsx */
import { jsx } from 'theme-ui';
import { usePageContext, useTranslation } from '@3nvi/gatsby-theme-intl';
import { graphql, useStaticQuery } from 'gatsby';
import SEO from '../components/seo';

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
    <div sx={{ bg: 'white', padding: 4 }}>
      <SEO title="Home" />
      <h1>{t('home')}</h1>
      <h1>{filteredData.title}</h1>
    </div>
  );
};

export default IndexPage;
