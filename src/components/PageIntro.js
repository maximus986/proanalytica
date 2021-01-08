/** @jsx jsx */
import React from 'react';
import styled from '@emotion/styled';
import BackgroundImage from 'gatsby-background-image';
import { jsx } from 'theme-ui';
import { Overlay } from './Overlay';
import { Container } from './container';

export const PageIntro = ({ pageTitle, pageSubtitle, pageIntroImage }) => {
  return (
    <div
      sx={{
        position: 'relative',
        mt: [null, null, null, '135px'],
      }}
    >
      <StyledBackgroundImage
        fluid={pageIntroImage.localFile.childImageSharp.fluid}
        sx={{ py: [12, null, 15] }}
      >
        <Container>
          <article sx={{ px: [4, 0] }}>
            <h1 sx={{ fontSize: [10, 12], color: 'primary', mb: [4] }}>
              {pageTitle}
            </h1>
            <p sx={{ fontSize: [6], color: 'primary' }}>{pageSubtitle}</p>
          </article>
        </Container>
      </StyledBackgroundImage>
      <Overlay />
    </div>
  );
};

const StyledBackgroundImage = styled(BackgroundImage)`
  width: 100%;
  background-position: center;
  background-size: cover;
  opacity: 1 !important;
  width: 100%;
  display: flex;
  align-items: center;
`;
