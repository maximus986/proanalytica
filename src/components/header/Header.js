/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import { MobileMenu } from './mobile-menu/MobileMenu';

export const Header = () => {
  return (
    <>
      <MobileMenu />
      <div sx={{ display: ['none', 'none', 'block'] }}>Desktop Menu</div>
    </>
  );
};
