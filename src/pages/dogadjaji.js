/** @jsx jsx */
import { usePageContext, useTranslation } from '@3nvi/gatsby-theme-intl';
import { jsx } from 'theme-ui';
import SEO from '../components/seo';

const Events = () => {
  const { t } = useTranslation();
  const { lang } = usePageContext();

  return (
    <div sx={{ bg: 'white', padding: 4 }}>
      <SEO title={t('events')} />
      <h1>{t('events')}</h1>
    </div>
  );
};

export default Events;
