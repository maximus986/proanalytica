import React from 'react';
import PropTypes from 'prop-types';

const Layout = ({ children }) => {
  return (
    <>
      <main>{children}</main>
    </>
  );
};

export default Layout;
