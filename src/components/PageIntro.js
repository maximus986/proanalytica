/** @jsx jsx */
import React from 'react';
import styled from '@emotion/styled';
import BackgroundImage from 'gatsby-background-image';
import { jsx } from 'theme-ui';
import { Overlay } from './Overlay';
import { Container } from 'components';

export const PageIntro = ({ pageTitle, pageSubtitle, pageIntroImage }) => {
  return (
    <div
      sx={{
        position: 'relative',
        // mt: [null, null, '124px', '135px'],
      }}
    >
      <StyledBackgroundImage
        // fluid={pageIntroImage.localFile.childImageSharp.fluid}
        sx={{ pt: [12, null, 21, 22], pb: [12, null, 8] }}
      >
        <Container>
          <article sx={{ px: [4, 0] }}>
            <h1
              sx={{ fontSize: [10, null, 11, 12], color: 'primary', mb: [4] }}
            >
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

const StyledBackgroundImage = styled.div`
  width: 100%;
  background-position: center;
  background-size: cover;
  opacity: 1 !important;
  width: 100%;
  display: flex;
  align-items: center;
`;
