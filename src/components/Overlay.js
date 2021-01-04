/** @jsx jsx */
import styled from '@emotion/styled';
import { jsx } from 'theme-ui';

export const Overlay = () => {
  return <Dim />;
};

const Dim = styled.div`
  background: linear-gradient(
    to top,
    rgba(0, 104, 119, 0.5),
    rgba(80, 138, 135, 0.5),
    rgba(138, 172, 156, 0.5),
    rgba(192, 205, 188, 0.5),
    rgba(241, 241, 230, 0.5)
  );
  width: 100%;
  height: 100%;
  background-size: cover;
  position: absolute;
  top: 0;
  z-index: -2;
`;
