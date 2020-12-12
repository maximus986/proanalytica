/** @jsx jsx */
import { jsx } from 'theme-ui';

export const Container = ({ children }) => {
  return (
    <div
      sx={{
        // !Use bootstrap values for width, maxWidth and padding
        width: ['90%', null, null, '90%', 'null', '100%'],
        maxWidth: [null, null, null, '1120px', 'null', '1280px'],
        mx: 'auto',
      }}
    >
      {children}
    </div>
  );
};
