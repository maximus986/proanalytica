/** @jsx jsx */
import styled from '@emotion/styled';
import { graphql } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import { jsx } from 'theme-ui';
import { Container } from '../container';
import { SectionContainer } from '../SectionContainer';

export const fragment = graphql`
  fragment CharitySection on WpPage_Homepagesections_Content_Charity {
    description
    fieldGroupName
    introText
    sectionTitle
    title
    image {
      localFile {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`;

export const Charity = ({
  sectionTitle,
  description,
  introText,
  title,
  image: {
    localFile: {
      childImageSharp: { fluid },
    },
  },
}) => {
  return (
    <SectionContainer sectionTitle={sectionTitle}>
      <StyledBackgroundImage
        fluid={fluid}
        alt=""
        sx={{ width: ['100%', null, null, '100%'] }}
      >
        <Container>
          <div
            sx={{
              mx: [4, 0],
              my: [6],
              bg: 'primaryBackground',
              py: [9],
              px: [6],
              width: [null, null, null, '70%'],
              mr: [4, null, null, 'auto'],
            }}
          >
            <p sx={{ color: 'primary', mb: 3, fontWeight: 'bold' }}>
              {introText}
            </p>
            <h3>{title}</h3>
            <p sx={{ color: 'textPrimary' }}>{description}</p>
          </div>
        </Container>
        <Overlay />
      </StyledBackgroundImage>
    </SectionContainer>
  );
};

const StyledBackgroundImage = styled(BackgroundImage)`
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  &,
  &::before,
  &::after {
    background-attachment: fixed;
  }
`;

const Overlay = styled.div`
  background: linear-gradient(
    to top,
    rgba(0, 104, 119, 0.5),
    rgba(80, 138, 135, 0.5),
    rgba(138, 172, 156, 0.5),
    rgba(192, 205, 188, 0.5),
    rgba(241, 241, 230, 0.5)
  );
  width: 100%;
  height: 100%;
  background-size: cover;
  position: absolute;
  top: 0;
  z-index: -2;
`;
