/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import { MobileMenu } from './mobile-menu/MobileMenu';
import { Menu } from './menu/Menu';

export const Header = () => {
  return (
    <header>
      <MobileMenu />
      <Menu />
    </header>
  );
};
