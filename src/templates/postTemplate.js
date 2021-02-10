import { graphql } from 'gatsby';
import React from 'react';
import { useLocalizedWpData } from 'hooks';
import { usePageContext } from '@3nvi/gatsby-theme-intl';

const PostTemplate = ({ data }) => {
  const { originalPath } = usePageContext();
  const localizedPageData = useLocalizedWpData(data.allWpPost.nodes).filter(
    (post) => post.news.newsSlug === originalPath,
  )[0];
  return <pre>{JSON.stringify(localizedPageData, null, 2)}</pre>;
};

export default PostTemplate;

export const PAGE_QUERY = graphql`
  query POST_PAGE_QUERY {
    allWpPost {
      nodes {
        id
        title
        language {
          code
        }
        featuredImage {
          node {
            localFile {
              childImageSharp {
                fluid(toFormat: WEBP, quality: 100) {
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
