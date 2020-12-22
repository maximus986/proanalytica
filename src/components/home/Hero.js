/** @jsx jsx */
import React from 'react';
import styled from '@emotion/styled';
import { graphql } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import { Flex, jsx } from 'theme-ui';
import { Button } from '../button';
import { Container } from '../container';
import { heroSliderSettings } from './sliderConfig';

export const fragment = graphql`
  fragment HeroSection on WpPage_Homepagesections_Content_Hero {
    fieldGroupName
    heroItems {
      heroitem {
        ... on WpHeroItem {
          id
          heroItem {
            title
            subtitle
            backgroundImage {
              localFile {
                childImageSharp {
                  fluid(quality: 100) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

export const Hero = ({ heroItems, className }) => {
  return (
    <Slider {...heroSliderSettings}>
      {heroItems.map(({ heroitem }, i) => {
        return (
          <React.Fragment key={i}>
            <Container>
              <StyledBackgroundImage
                className={className}
                fluid={
                  heroitem.heroItem.backgroundImage.localFile.childImageSharp
                    .fluid
                }
                sx={{
                  height: ['100vh', null, '90vh', null, '80vh'],
                  justifyContent: ['center'],
                  pt: [null, null, null, '135px'],
                }}
              >
                <Flex
                  sx={{
                    position: 'relative',
                    zIndex: 100,
                    flexDirection: 'column',
                    alignContent: 'center',
                    justifyContent: 'center',
                    height: '100%',
                    px: [4, 0],
                    width: [null, null, null, '70%', '60%'],
                  }}
                >
                  <h1>{heroitem.heroItem.title}</h1>
                  <p sx={{ color: 'primaryBackground', fontSize: 5, mb: 5 }}>
                    {heroitem.heroItem.subtitle}
                  </p>
                  <Button
                    variant="outlineLarge"
                    sx={{ alignSelf: 'flex-start' }}
                  >
                    Products
                  </Button>
                </Flex>
              </StyledBackgroundImage>
            </Container>
            <Dim />
          </React.Fragment>
        );
      })}
    </Slider>
  );
};

const Dim = () => <Overlay />;

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

const StyledBackgroundImage = styled(BackgroundImage)`
  width: 100%;
  background-position: center;
  background-size: cover;
  opacity: 1 !important;
  width: 100%;
  position: static !important;
  display: flex;
  flex-direction: column;
`;
