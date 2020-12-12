/** @jsx jsx */
import styled from '@emotion/styled';
import { jsx } from 'theme-ui';

export const Field = ({ name, value, onChange, placeholder }) => {
  return (
    <Input
      type="text"
      name={name}
      id={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      sx={{
        color: 'textPrimary',
        fontFamily: 'body',
        borderColor: 'muted',
        fontSize: 2,
        '&:focus': {
          outline: 'none',
          borderColor: 'primary',
        },
      }}
    />
  );
};

const Input = styled.input`
  padding: 0 15px;
  height: 55px;
  border-width: 1px;
  border-style: solid;
  width: 100%;
`;
