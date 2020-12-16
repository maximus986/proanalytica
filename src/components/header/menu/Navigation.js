import React from 'react';
/** @jsx jsx */
import { Flex, jsx, useThemeUI } from 'theme-ui';
import { Link } from '../../link';
import { Container } from '../../container';
import styled from '@emotion/styled';
import { useLocation } from '@reach/router';
import { useTranslation } from '@3nvi/gatsby-theme-intl';
import { navLinks } from '../../../static-data/nav-links';
import { LanguagePicker } from '../../languagePicker';

export const Navigation = ({ animateNavbar }) => {
  const {
    theme: { colors },
  } = useThemeUI();
  const { t } = useTranslation();
  const location = useLocation();
  const path = `/${location.pathname.split('/')[2]}`;
  return (
    <Container>
      <Flex
        as="nav"
        sx={{
          justifyContent: 'space-between',
          alignItems: 'center',
          borderTopWidth: animateNavbar ? 0 : 1,
          borderBottomWidth: animateNavbar ? 0 : 1,
          borderBottomStyle: 'solid',
          borderTopStyle: 'solid',
          borderBottomColor: 'primaryPassive',
          borderTopColor: 'primaryPassive',
        }}
      >
        <Flex
          as="ul"
          sx={{
            alignItems: 'center',
            height: '57px',
          }}
        >
          {navLinks.map((link) => {
            const isActive = path === link.path;
            return (
              <NavItem key={link.path} sx={{}}>
                <NavLink
                  to={link.path}
                  sx={{
                    fontSize: 2,
                    px: 5,
                    bg: isActive
                      ? animateNavbar
                        ? colors.tertiary
                        : colors.primary
                      : 'transparent',
                    color: isActive
                      ? colors.primaryBackground
                      : animateNavbar
                      ? colors.primaryBackground
                      : colors.primary,
                    transition: 'link',
                    '&:hover': {
                      bg: animateNavbar ? colors.tertiary : colors.primary,
                      color: colors.primaryBackground,
                    },
                  }}
                  {...{ colors }}
                >
                  {`${t(`${link.text}`)}`}
                </NavLink>
              </NavItem>
            );
          })}
        </Flex>
        <LanguagePicker />
      </Flex>
    </Container>
  );
};

const NavItem = styled.li`
  text-align: center;
  height: 100%;
`;

const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  height: 100%;
`;
