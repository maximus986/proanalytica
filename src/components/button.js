/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Link } from './link';
import styled from '@emotion/styled';

export const Button = ({ variant = 'primary', to, children }) => {
  return (
    <Btn
      to={to}
      sx={{
        textTransform: 'capitalize',
        textDecoration: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 2,
        color: 'background',
        variant: `buttons.${variant}`,
      }}
    >
      {children}
    </Btn>
  );
};

const Btn = styled(Link)``;
