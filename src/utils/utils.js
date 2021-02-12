import parse from 'html-react-parser';
import { Link } from 'components';
import React from 'react';

export const hex2rgba = (hex, alpha = 1) => {
  const [r, g, b] = hex.match(/\w\w/g).map((x) => parseInt(x, 16));
  return `rgba(${r},${g},${b},${alpha})`;
};

export const parseContentWithLinks = (content) => {
  if (!content) return;
  return parse(content, {
    replace: (domNode) => {
      if (domNode.attribs && domNode.attribs.href) {
        return (
          <Link to={domNode.attribs.href}>{domNode.children[0].data}</Link>
        );
      }
    },
  });
};
