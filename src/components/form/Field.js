/** @jsx jsx */
import React from 'react';
import styled from '@emotion/styled';
import { jsx } from 'theme-ui';
import { ErrorMessage } from './ErrorMessage';

export const Field = ({ register, name, placeholder, validation, errors }) => {
  return (
    <>
      <Input
        type="text"
        name={name}
        placeholder={placeholder}
        {...register(name, validation)}
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
      <ErrorMessage>{errors && errors.message}</ErrorMessage>
    </>
  );
};

const Input = styled.input`
  height: 55px;
  border-width: 1px;
  border-style: solid;
  width: 100%;
`;
