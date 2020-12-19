/** @jsx jsx */
import { jsx } from 'theme-ui';

export const Container = ({ children }) => {
  return (
    <div
      sx={{
        maxWidth: ['100%', '540px', '720px', '960px', '1140px', '1400px'],
        mx: 'auto',
      }}
    >
      {children}
    </div>
  );
};
