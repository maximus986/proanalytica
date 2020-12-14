/** @jsx jsx */
import { jsx } from 'theme-ui';
import { TopBar } from './TopBar';

export const Menu = () => {
  return (
    <div
      sx={{
        display: ['none', 'none', 'block'],
      }}
    >
      <TopBar />
    </div>
  );
};
