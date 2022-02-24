/** @jsx jsx */
import React from 'react';
import { jsx } from 'theme-ui';
import { Footer } from './Footer';
import { Header } from './header/Header';

export const Layout = ({ children }) => {
  return (
    <div sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <main
        sx={{
          marginTop: ['62px', null, '-3px', 'auto'],
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
