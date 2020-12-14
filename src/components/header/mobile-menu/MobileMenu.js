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
import { useLocation } from '@reach/router';
import { AiOutlinePhone, AiOutlineMail } from 'react-icons/ai';
import { IoLocationOutline } from 'react-icons/io5';

export const MobileMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleNavToggle = () => {
    setIsMenuOpen((isMenuOpen) => !isMenuOpen);
  };
  const {
    theme: { colors },
  } = useThemeUI();
  const { t } = useTranslation();
  const location = useLocation();
  const path = `/${location.pathname.split('/')[2]}`;
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
              const Icon = link.icon;
              const isActive = path === link.path;
              return (
                <NavItem key={index} onClick={handleNavToggle}>
                  <NavLink
                    to={link.path}
                    sx={{
                      fontSize: 4,
                      bg: isActive ? colors.primary : colors.primaryBackground,
                      color: isActive
                        ? colors.primaryBackground
                        : colors.primary,
                    }}
                    {...{ colors }}
                  >
                    <LinkIconContainer
                      sx={{
                        mr: 1,
                      }}
                    >
                      <Icon
                        fill={
                          isActive ? colors.primaryBackground : colors.primary
                        }
                      />
                    </LinkIconContainer>
                    {`${t(`${link.text}`)}`}
                  </NavLink>
                </NavItem>
              );
            })}
          </MainNav>
          {/* Refactor this. Use config file */}
          <div sx={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
            <div
              sx={{
                display: 'flex',
                flexDirection: 'column',
                flex: 1,
                pl: '15px',
                justifyContent: 'space-evenly',
              }}
            >
              <div sx={{ display: 'flex', alignItems: 'center' }}>
                <InfoIconContainer sx={{ mr: 1 }}>
                  <IoLocationOutline sx={{ fontSize: '22px' }} />
                </InfoIconContainer>
                <p>{t('address')}</p>
              </div>
              <div sx={{ display: 'flex', alignItems: 'center' }}>
                <InfoIconContainer sx={{ mr: 1 }}>
                  <AiOutlinePhone sx={{ fontSize: '22px' }} />
                </InfoIconContainer>
                <a
                  href="tel:+381113130542"
                  sx={{ borderBottom: `1px solid ${colors.primary}`, pb: 0 }}
                >
                  +381 11 313 42
                </a>
              </div>
              <div sx={{ display: 'flex', alignItems: 'center' }}>
                <InfoIconContainer sx={{ mr: 1 }}>
                  <AiOutlineMail sx={{ fontSize: '22px' }} />
                </InfoIconContainer>
                <a
                  href="mailto:prodaja&#64;proanalytica.com"
                  sx={{ borderBottom: `1px solid ${colors.primary}`, pb: 0 }}
                >
                  prodaja@proanalytica.com
                </a>
              </div>
            </div>
            <LanguageSwitchContainer>
              <LanguagePicker />
            </LanguageSwitchContainer>
          </div>
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
  flex: 2;
`;

const NavItem = styled.li`
  display: block;
  text-align: center;
  width: 100%;
`;

const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 10px 15px;
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
  justify-content: space-between;
  align-self: flex-end;
  padding: 0 15px;
`;

const LinkIconContainer = styled.div`
  width: 30px;
  height: 25px;
  align-items: center;
  justify-content: center;
`;

const InfoIconContainer = styled.div`
  width: 30px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
