/** @jsx jsx */
import { useTranslation } from '@3nvi/gatsby-theme-intl';
import { jsx } from 'theme-ui';
import SEO from 'components/seo';

const Events = () => {
  const { t } = useTranslation();

  return (
    <div sx={{ bg: 'white', padding: 4 }}>
      <SEO title={t('events')} />
      <h1>{t('events')}</h1>
    </div>
  );
};

export default Events;
