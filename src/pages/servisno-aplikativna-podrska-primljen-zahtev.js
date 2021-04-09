/** @jsx jsx */
import React from 'react';
import { Container, Button, Info } from 'components';
import SEO from 'components/seo';
import { jsx } from 'theme-ui';
import { GiCheckMark } from 'react-icons/gi';
import { useTranslation } from '@3nvi/gatsby-theme-intl';

const ServiceSuccess = () => {
  const { t } = useTranslation();
  return (
    <>
      <SEO title={t('serviceSupport')} />
      <Info>
        <GiCheckMark sx={{ color: 'primary' }} size={60} />
        <h2 sx={{ my: 5, fontSize: [null, null, null, null, null, 11] }}>
          {t('requestReceivedTitle')}
        </h2>
        <p sx={{ mb: 3, fontSize: [null, null, null, null, null, 6] }}>
          {t('requestReceivedMessage')}
        </p>
        <p sx={{ mb: 5, fontSize: [null, null, null, null, null, 6] }}>
          {t('requestReceivedThanks')}
        </p>
      </Info>
    </>
  );
};

export default ServiceSuccess;
