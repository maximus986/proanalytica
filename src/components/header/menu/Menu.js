/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Navigation } from './Navigation';
import { StickyNavigation } from './StickyNavigation';
import { TopBar } from './TopBar';

export const Menu = () => {
  return (
    <div
      sx={{
        display: ['none', 'none', 'none', 'block'],
      }}
    >
      <TopBar />
      <Navigation />
      <StickyNavigation />
    </div>
  );
};
