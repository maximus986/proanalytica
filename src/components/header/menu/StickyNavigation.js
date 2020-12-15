import styled from '@emotion/styled';
import React, { useEffect, useState } from 'react';
/** @jsx jsx */
import { Flex, jsx, useThemeUI } from 'theme-ui';
import { Navigation } from './Navigation';
import { keyframes } from '@emotion/react';

export const StickyNavigation = () => {
  const [animateNavbar, setAnimateNavbar] = useState(false);

  const handleScroll = () => {
    const offset = window.pageYOffset;
    if (offset >= 135) {
      setAnimateNavbar(true);
    } else {
      setAnimateNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });
  return (
    <Container sx={{ bg: 'primary' }} animateNavbar={animateNavbar}>
      <Navigation animateNavbar={animateNavbar} />
    </Container>
  );
};

const navbarAnimation = keyframes`
  0% { opacity: 0; transform: translateY(-20px);  }
  100% { opacity: 1; transform: translateY(0); }
`;

const Container = styled.div`
  position: fixed;
  opacity: ${(props) => (props.animateNavbar ? 1 : 0)};
  visibility: ${(props) => (props.animateNavbar ? 'visible' : 'hidden')};
  left: 0px;
  top: 0px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  width: 100%;
  z-index: ${(props) => (props.animateNavbar ? 999 : 0)};
  transition: 0.5s ease;
  animation-name: ${navbarAnimation};
  animation-duration: 0.5s;
  animation-timing-function: linear;
  animation-iteration-count: 1;
`;
