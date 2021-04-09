/** @jsx jsx */
import React from 'react';
import { Container, Button } from 'components';
import SEO from 'components/seo';
import { jsx } from 'theme-ui';
import { GiCheckMark } from 'react-icons/gi';
import { useTranslation } from '@3nvi/gatsby-theme-intl';

export const Info = ({ children }) => {
  const { t } = useTranslation();
  return (
    <div
      sx={{
        mt: [null, null, '124px', '135px'],
        flex: 1,
      }}
    >
      <section
        sx={{
          px: [4, null, 5, 7, 8],
          py: [8],
        }}
      >
        <Container>
          <div
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              textAlign: 'center',
            }}
          >
            {children}
            <Button variant="primarySmall" to="/">
              {t('home')}
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
};
