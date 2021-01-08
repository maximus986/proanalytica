/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Navigation } from './Navigation';
import { StickyNavigation } from './StickyNavigation';
import { TopBar } from './TopBar';

export const Menu = () => {
  return (
    <div
      sx={{
        display: ['none', null, 'block'],
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
      }}
    >
      <TopBar />
      <Navigation />
      <StickyNavigation />
    </div>
  );
};
