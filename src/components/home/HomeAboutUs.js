/** @jsx jsx */
import { graphql } from 'gatsby';
import React from 'react';
import { Grid, jsx } from 'theme-ui';
import { Container } from '../Container';
import { SectionContainer } from '../SectionContainer';
import Img from 'gatsby-image';
import { Button } from '../button';

export const fragment = graphql`
  fragment AboutUsSection on WpPage_Homepagesections_Content_AboutUs {
    description
    fieldGroupName
    introText
    link
    linkText
    sectionTitle
    subtitle
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

export const HomeAboutUs = ({
  description,
  introText,
  link,
  linkText,
  sectionTitle,
  subtitle,
  title,
  image: {
    localFile: {
      childImageSharp: { fluid },
    },
  },
}) => {
  return (
    <SectionContainer sectionTitle={sectionTitle}>
      <Container>
        <Grid
          gap={[6, null, null, 8, 11]}
          columns={[null, null, null, 2]}
          sx={{ alignItems: 'center' }}
        >
          <figure>
            <Img fluid={fluid} alt="" />
          </figure>
          <article sx={{ px: [4, 0] }}>
            <p sx={{ color: 'primary', mb: 3, fontWeight: 'bold' }}>
              {introText}
            </p>
            <h3>{title}</h3>
            <p sx={{ color: 'textPrimary', fontWeight: 'bold', mb: 5 }}>
              {subtitle}
            </p>
            <p sx={{ mb: 4 }}>{description}</p>
            <Button variant="primary" to={link}>
              {linkText}
            </Button>
          </article>
        </Grid>
      </Container>
    </SectionContainer>
  );
};
