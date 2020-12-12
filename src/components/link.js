import React from 'react';
import { Link as GatsbyLink } from 'gatsby';

export const Link = ({
  children,
  to,
  activeClassName,
  partiallyActive,
  ...other
}) => {
  const internal = /^\/(?!\/)/.test(to);
  if (internal) {
    return (
      <GatsbyLink
        to={to}
        activeClassName={activeClassName}
        partiallyActive={partiallyActive}
        {...other}
      >
        {children}
      </GatsbyLink>
    );
  }
  return (
    <a href={to} target="_blank" rel="noopener noreferrer" {...other}>
      {children}
    </a>
  );
};
