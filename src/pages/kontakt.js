/** @jsx jsx */
import { usePageContext, useTranslation } from '@3nvi/gatsby-theme-intl';
import { jsx } from 'theme-ui';
import SEO from '../components/seo';

const Contact = () => {
  const { t } = useTranslation();
  const { lang } = usePageContext();

  return (
    <div sx={{ bg: 'white', padding: 4 }}>
      <SEO title={t('contact')} />
      <h1>{t('contact')}</h1>
    </div>
  );
};

export default Contact;
