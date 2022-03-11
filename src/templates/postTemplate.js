import { graphql } from 'gatsby';
/** @jsx jsx */
import React from 'react';
import { useLocalizedWpData } from 'hooks';
import { usePageContext } from '@3nvi/gatsby-theme-intl';
import SEO from 'components/seo';
import { Container, WpContent } from 'components';
import { parseContentWithLinks } from '../utils/utils';
import Img from 'gatsby-image';
import { jsx, useThemeUI } from 'theme-ui';
import styled from '@emotion/styled';

const PostTemplate = ({ data }) => {
  const { originalPath } = usePageContext();
  const localizedPageData = useLocalizedWpData(data.allWpPost.nodes).filter(
    (post) => post.news.newsSlug === originalPath,
  )[0];
  const { theme } = useThemeUI();
  const {
    title,
    content,
    date,
    news: { newsAuthor },
    featuredImage: {
      node: {
        localFile: {
          childImageSharp: { fluid },
        },
      },
    },
  } = localizedPageData;
  return (
    <>
      <SEO title={title} />
      <Container>
        <div
          sx={{
            mt: [null, null, '124px', '135px'],
            py: [7, 9, null, 10, 12, 13],
          }}
          {...{ theme }}
        >
          <div sx={{ textAlign: 'center', mb: [5, null, 7, 8, 10] }}>
            <h1
              sx={{
                color: 'textPrimary',
                fontSize: [10, null, 11],
                fontWeight: 'normal',
                lineHeight: 'heading',
                mx: 'auto',
                width: '80%',
                wordBreak: 'break-word',
              }}
            >
              {title}
            </h1>
            <p>{`${newsAuthor}, ${date}`}</p>
          </div>
          <figure sx={{ mb: [6, null, 8, 9, 11] }}>
            <Img fluid={fluid} alt={title} />
          </figure>
          <div sx={{ px: [4, 0] }}>
            <WpContent>{parseContentWithLinks(content)}</WpContent>
          </div>
        </div>
      </Container>
    </>
  );
};

export default PostTemplate;

export const PAGE_QUERY = graphql`
  query POST_PAGE_QUERY {
    allWpPost {
      nodes {
        id
        title
        content
        language {
          code
        }
        featuredImage {
          node {
            localFile {
              childImageSharp {
                fluid(
                  toFormat: WEBP
                  quality: 100
                  maxHeight: 600
                  maxWidth: 1000
                  cropFocus: CENTER
                ) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
        excerpt
        date(formatString: "DD.MM.YYYY.")
        news {
          newsAuthor
          newsSlug
        }
      }
    }
  }
`;
