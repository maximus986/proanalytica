/** @jsx jsx */
import React from 'react';
import { jsx } from 'theme-ui';
import { Link } from './link';
import Img from 'gatsby-image';
import styled from '@emotion/styled';

export const Post = ({ post }) => {
  const {
    title,
    date,
    excerpt,
    featuredImage: {
      node: {
        localFile: {
          childImageSharp: { fluid },
        },
      },
    },
    news: { newsAuthor, newsSlug },
  } = post;
  return (
    <PostLink to={newsSlug}>
      <Figure
        sx={{
          bg: 'primary',
          maxHeight: ['300px', null, '230px', '311px', '235px', '290px'],
        }}
      >
        <PostImage
          fluid={fluid}
          alt={title}
          sx={{ transition: 'imageLinkLong' }}
        />
      </Figure>
      <div sx={{ mt: 6, px: 4, pb: 5 }}>
        <PostTitle sx={{ fontWeight: 'normal', fontSize: 6 }}>
          {title}
        </PostTitle>
        <p sx={{ fontSize: 1, mb: 4 }}>{`${newsAuthor}, ${date}`}</p>
        <div dangerouslySetInnerHTML={{ __html: excerpt }} />
      </div>
    </PostLink>
  );
};
const PostImage = styled(Img)``;

const PostLink = styled(Link)`
  display: block;
  background: #fff;
  box-shadow: 0px 0px 20px rgb(0 0 0 / 10%);
  &:hover {
    ${PostImage} {
      opacity: 0.2;
      transform: scale(1.1);
    }
  }
`;

const PostTitle = styled.h4`
  word-break: break-all;
`;

const Figure = styled.figure`
  overflow: hidden;
`;
