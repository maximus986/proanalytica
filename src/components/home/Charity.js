/** @jsx jsx */
import styled from '@emotion/styled';
import { graphql } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import { jsx } from 'theme-ui';
import { Container } from '../Container';
import { Overlay } from '../Overlay';
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
          fluid(quality: 100, toFormat: WEBP) {
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
              mx: [4, 0, null, 'auto'],
              my: [6, null, null, 7, 8, 10, 13],
              bg: 'primaryBackground',
              py: [9],
              px: [6],
              width: [null, null, null, '70%'],
              // mr: [4, null, null, 'auto'],
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
