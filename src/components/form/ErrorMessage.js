/** @jsx jsx */
import { jsx } from 'theme-ui';

export const ErrorMessage = ({ children }) => {
  return <p sx={{ fontSize: 1, color: 'alert', mt: 1 }}>{children}</p>;
};
