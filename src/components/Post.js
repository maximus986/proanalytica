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
      <Figure sx={{ bg: 'primary' }}>
        <PostImage fluid={fluid} alt="" />
      </Figure>
      <div sx={{ padding: '0 16px 24px', mt: '32px' }}>
        <PostTitle>{title}</PostTitle>
        <p sx={{ fontSize: '14px', mb: '16px' }}>{`${newsAuthor}, ${date}`}</p>
        <div dangerouslySetInnerHTML={{ __html: excerpt }} />
      </div>
    </PostLink>
  );
};
const PostImage = styled(Img)`
  transition: all 1000ms ease;
`;

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
