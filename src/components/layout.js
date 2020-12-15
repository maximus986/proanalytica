/** @jsx jsx */
import React from 'react';
import { jsx } from 'theme-ui';
import { Header } from './header/Header';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main sx={{ marginTop: ['62px', null, null, 'auto'] }}>{children}</main>
    </>
  );
};

export default Layout;
