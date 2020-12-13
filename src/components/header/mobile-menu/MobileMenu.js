/** @jsx jsx */
import { jsx } from 'theme-ui';
import { useState } from 'react';
import { useTranslation } from '@3nvi/gatsby-theme-intl';
import styled from '@emotion/styled';
import { FiAlignJustify, FiX } from 'react-icons/fi';
import { useThemeUI } from 'theme-ui';
import navLinks from '../../../static-data/nav-links';
import { LanguagePicker } from '../../languagePicker';
import { Link } from '../../link';
import { MobileMenuLogo } from './MobileMenuLogo';

export const MobileMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleNavToggle = () => {
    setIsMenuOpen((isMenuOpen) => !isMenuOpen);
  };
  const {
    theme: { colors },
  } = useThemeUI();
  const { t } = useTranslation();
  return (
    <header>
      <NavContainer sx={{ bg: 'white', display: ['flex', 'flex', 'none'] }}>
        <MobileMenuLogo />
        <Nav isMenuOpen={isMenuOpen} sx={{ bg: 'white' }}>
          <MainNavBarHeader>
            <MobileMenuLogo />
            <CloseNav
              onClick={handleNavToggle}
              sx={{ fontSize: 6, color: 'primary' }}
            />
          </MainNavBarHeader>
          <MainNav>
            {navLinks.map((link, index) => {
              return (
                <NavItem key={index} onClick={handleNavToggle}>
                  <NavLink
                    to={link.path}
                    activeClassName="active"
                    sx={{ fontSize: 5 }}
                    {...{ colors }}
                  >
                    {`${t(`${link.text}`)}`}
                  </NavLink>
                </NavItem>
              );
            })}
          </MainNav>
          <LanguageSwitchContainer>
            <LanguagePicker />
          </LanguageSwitchContainer>
        </Nav>
        <NavToggler
          onClick={handleNavToggle}
          sx={{ fontSize: 6, color: 'primary' }}
        >
          <FiAlignJustify />
        </NavToggler>
      </NavContainer>
    </header>
  );
};

const NavContainer = styled.div`
  padding: 16px 15px;
  align-items: center;
  justify-content: space-between;
  position: relative;
  z-index: 1040;
  box-shadow: 0px 2px 8px 0px rgba(51, 51, 51, 0.38);
`;

const Nav = styled.nav`
  position: absolute;
  top: 0;
  left: -100%;
  width: 100vw;
  height: 100vh;
  padding: 2px 0;
  transition: 0.3s linear;
  transform: ${(props) => (props.isMenuOpen ? 'translateX(100%)' : null)};
  display: flex;
  flex-direction: column;
  padding-bottom: 10px;
`;

const MainNavBarHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 15px;
`;

const CloseNav = styled(FiX)`
  border: none;
  background: transparent;
`;

const MainNav = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-items: center;
  align-items: center;
  justify-content: center;
  flex: 1;
  margin: 0;
`;

const NavItem = styled.li`
  display: block;
  text-align: center;
  width: 100%;
`;

const NavLink = styled(Link)`
  color: ${(props) => props.colors.primary};
  display: block;
  transition: 0.3s linear;
  padding: 10px 9px;
  &:hover,
  &.active {
    background-color: ${(props) => props.colors.primary};
    color: ${(props) => props.colors.primaryBackground};
  }
`;

const NavToggler = styled.button`
  border: none;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LanguageSwitchContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 0 15px;
`;
