/** @jsx jsx */
import { usePageContext, useTranslation } from '@3nvi/gatsby-theme-intl';
import { jsx } from 'theme-ui';
import SEO from '../components/seo';

const Products = () => {
  const { t } = useTranslation();
  const { lang } = usePageContext();

  return (
    <div sx={{ bg: 'white', padding: 4 }}>
      <SEO title={t('products')} />
      <h1>{t('products')}</h1>
    </div>
  );
};

export default Products;
