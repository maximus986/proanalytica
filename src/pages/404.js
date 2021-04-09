/** @jsx jsx */
import React from 'react';
import { useTranslation } from '@3nvi/gatsby-theme-intl';
import { Info } from 'components';
import SEO from 'components/seo';
import { ImNotification } from 'react-icons/im';
import { jsx } from 'theme-ui';

const NotFoundPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <SEO title={t('notFound')} />
      <Info>
        <ImNotification sx={{ color: 'primary' }} size={60} />
        <h2 sx={{ my: 5, fontSize: [null, null, null, null, null, 11] }}>
          {t('notFoundTitle')}
        </h2>
        <p sx={{ mb: 5, fontSize: [null, null, null, null, null, 6] }}>
          {t('notFoundMessage')}
        </p>
      </Info>
    </>
  );
};

export default NotFoundPage;
