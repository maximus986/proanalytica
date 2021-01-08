/** @jsx jsx */
import { graphql } from 'gatsby';
import React from 'react';
import { Grid, jsx, useThemeUI } from 'theme-ui';
import { Container } from '../container';
import { SectionContainer } from '../SectionContainer';
import Img from 'gatsby-image';
import styled from '@emotion/styled';

export const fragment = graphql`
  fragment AnnouncementSection on WpPage_Homepagesections_Content_Announcement {
    description
    fieldGroupName
    introText
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

export const Announcement = ({
  sectionTitle,
  introText,
  subtitle,
  title,
  description,
  image: {
    localFile: {
      childImageSharp: { fluid },
    },
  },
}) => {
  return (
    <SectionContainer sectionTitle={sectionTitle}>
      <InnerContent
        sx={{
          bg: 'tertiary',
          pt: [6, null, 9, null, null, 15],
          pb: [6, null, 9, null, 22],
          px: [4, 0],
          mb: [null, null, 10, null, 13],
        }}
      >
        <Container>
          <Grid
            gap={[5, null, null, 8, 11]}
            columns={[null, null, null, 2, [2, '5fr 4fr']]}
            sx={{ alignItems: 'flex-start' }}
          >
            <article sx={{ position: 'relative' }}>
              <p sx={{ color: 'primaryBackground', mb: 3 }}>{introText}</p>
              <h3 sx={{ color: 'primaryBackground' }}>{title}</h3>
              <p sx={{ color: 'primaryBackground', fontWeight: 'bold', mb: 5 }}>
                {subtitle}
              </p>
              <p sx={{ color: 'primaryBackground' }}>{description}</p>
            </article>
            <div sx={{ position: 'relative' }}>
              <figure
                sx={{
                  position: [null, null, null, 'absolute'],
                  width: ['100%', null, null, null, null, '85%'],
                }}
              >
                <Img fluid={fluid} alt="" />
              </figure>
            </div>
          </Grid>
        </Container>
      </InnerContent>
    </SectionContainer>
  );
};

const InnerContent = styled.div``;
