/** @jsx jsx */
import { usePageContext, useTranslation } from '@3nvi/gatsby-theme-intl';
import { jsx } from 'theme-ui';
import SEO from 'components/seo';

const AboutUs = () => {
  const { t } = useTranslation();
  const { lang } = usePageContext();

  return (
    <div sx={{ bg: 'white', padding: 4 }}>
      <SEO title={t('aboutUs')} />
      <h1>{t('aboutUs')}</h1>
    </div>
  );
};

export default AboutUs;
