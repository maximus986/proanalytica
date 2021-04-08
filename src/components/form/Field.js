/** @jsx jsx */
import styled from '@emotion/styled';
import { jsx } from 'theme-ui';

export const Field = ({ name, placeholder, value, onChange }) => {
  return (
    <Input
      type="text"
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      sx={{
        color: 'textPrimary',
        fontFamily: 'body',
        borderColor: 'muted',
        fontSize: 2,
        px: 4,
        '&:focus': {
          outline: 'none',
          borderColor: 'primary',
        },
      }}
    />
  );
};

const Input = styled.input`
  height: 55px;
  border-width: 1px;
  border-style: solid;
  width: 100%;
`;
