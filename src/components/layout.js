/** @jsx jsx */
import React from 'react';
import { jsx } from 'theme-ui';
import { Footer } from './Footer';
import { Header } from './header/Header';

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main sx={{ marginTop: ['62px', null, 'auto'] }}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
