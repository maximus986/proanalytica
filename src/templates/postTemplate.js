import { graphql } from 'gatsby';
import React from 'react';
import { useLocalizedWpData } from 'hooks';
/** @jsx jsx */
import { usePageContext } from '@3nvi/gatsby-theme-intl';
import SEO from 'components/seo';
import { Container } from 'components';
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
  console.log(theme);
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
        <PostContent
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
            <Img fluid={fluid} alt="" />
          </figure>
          <div sx={{ px: [4, 0] }}>{parseContentWithLinks(content)}</div>
        </PostContent>
      </Container>
    </>
  );
};

export default PostTemplate;

const PostContent = styled.section`
  h2 {
    font-size: ${(props) => `${props.theme.fontSizes[9]}px`};
    font-weight: ${(props) => props.theme.fontWeights.normal};
    margin-bottom: ${(props) => `${props.theme.space[5]}px`};
  }
  h3 {
    font-size: ${(props) => `${props.theme.fontSizes[8]}px`};
    font-weight: ${(props) => props.theme.fontWeights.normal};
    margin-bottom: ${(props) => `${props.theme.space[5]}px`};
  }
  h4 {
    font-size: ${(props) => `${props.theme.fontSizes[5]}px`};
    font-weight: ${(props) => props.theme.fontWeights.normal};
    margin-bottom: ${(props) => `${props.theme.space[5]}px`};
  }
  h5 {
    font-size: ${(props) => `${props.theme.fontSizes[3]}px`};
    font-weight: ${(props) => props.theme.fontWeights.normal};
    margin-bottom: ${(props) => `${props.theme.space[5]}px`};
  }
  h6 {
    font-size: ${(props) => `${props.theme.fontSizes[2]}px`};
    font-weight: ${(props) => props.theme.fontWeights.normal};
    margin-bottom: ${(props) => `${props.theme.space[5]}px`};
  }
  ul {
    list-style: disc;
    padding: revert;
  }
  a {
    text-decoration: underline;
    font-weight: ${(props) => props.theme.fontWeights.bold};
    transition: ${(props) => props.theme.transition.link};
    &:hover {
      color: ${(props) => props.theme.colors.primary};
    }
  }
  p {
    margin-bottom: ${(props) => `${props.theme.space[4]}px`};
  }
  blockquote {
    border-left: 6px solid ${(props) => props.theme.colors.primary};
    padding-top: ${(props) => `${props.theme.space[3]}px`};
    padding-bottom: ${(props) => `${props.theme.space[3]}px`};
    padding-left: ${(props) => `${props.theme.space[5]}px`};
    padding-right: ${(props) => `${props.theme.space[5]}px`};
    background: ${(props) => props.theme.colors.primaryPassive};
    margin: 0;
    p {
      margin: 0;
    }
  }
`;

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
