/** @jsx jsx */
import { jsx } from 'theme-ui';
import { useEffect, useState } from 'react';
import { useTranslation } from '@3nvi/gatsby-theme-intl';
import styled from '@emotion/styled';
import { FiAlignJustify, FiX } from 'react-icons/fi';
import { useThemeUI } from 'theme-ui';
import { navLinks } from '../../../static-data/nav-links';
import { LanguagePicker } from '../../languagePicker';
import { Link } from '../../link';
import { MobileMenuLogo } from './MobileMenuLogo';
import { useLocation } from '@reach/router';
import { AiOutlinePhone, AiOutlineMail } from 'react-icons/ai';
import { IoLocationOutline } from 'react-icons/io5';
import { useStaticQuery, graphql } from 'gatsby';
import { useLocalizedWpData } from '../../../hooks/useLocalizedWpData';

export const MobileMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const data = useStaticQuery(graphql`
    {
      allWpPage(
        filter: { contactPage: { fieldGroupName: { eq: "contactPage" } } }
      ) {
        nodes {
          language {
            code
          }
          contactPage {
            address
            emails {
              email
            }
            telephones {
              phoneNumber
            }
          }
        }
      }
    }
  `);
  const localizedPageData = useLocalizedWpData(data.allWpPage.nodes)[0];
  const {
    contactPage: { address, emails, telephones },
  } = localizedPageData;
  const handleNavToggle = () => {
    setIsMenuOpen((isMenuOpen) => !isMenuOpen);
  };
  const {
    theme: { colors },
  } = useThemeUI();
  const { t } = useTranslation();
  const location = useLocation();
  const path = `/${location.pathname.split('/')[2]}`;

  useEffect(() => {
    const html = document.querySelector('html');
    isMenuOpen
      ? (html.style.overflow = 'hidden')
      : (html.style.overflow = 'visible');
  }, [isMenuOpen]);
  return (
    <NavContainer
      sx={{
        bg: 'primaryBackground',
        display: ['flex', null, 'none'],
        p: 4,
      }}
    >
      <MobileMenuLogo />
      <Nav isMenuOpen={isMenuOpen} sx={{ bg: 'primaryBackground', pb: 6 }}>
        <MainNavBarHeader sx={{ p: 4 }} {...{ colors }}>
          <MobileMenuLogo />
          <CloseNav
            onClick={handleNavToggle}
            sx={{ fontSize: 6, color: 'primary' }}
          />
        </MainNavBarHeader>
        <MainNav sx={{ m: 0, mb: 4 }}>
          {navLinks.map((link, index) => {
            const Icon = link.icon;
            const isActive = path === link.path;
            return (
              <NavItem key={index} onClick={handleNavToggle}>
                <NavLink
                  to={link.path}
                  sx={{
                    fontSize: 4,
                    px: 4,
                    py: 3,
                    bg: isActive ? colors.primary : colors.primaryBackground,
                    color: isActive ? colors.primaryBackground : colors.primary,
                  }}
                  {...{ colors }}
                >
                  <LinkIconContainer
                    sx={{
                      mr: 3,
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
        <SecondaryContentContainer>
          <InfoContainer sx={{ pl: 4, mb: 1 }}>
            <InfoIconContainer sx={{ mb: 4 }}>
              <Icon sx={{ mr: 3 }}>
                <IoLocationOutline sx={{ fontSize: 5 }} />
              </Icon>
              <p sx={{ fontSize: 1 }}>{address}</p>
            </InfoIconContainer>
            <InfoIconContainer sx={{ mb: 4 }}>
              <Icon sx={{ mr: 3 }}>
                <AiOutlinePhone sx={{ fontSize: 5 }} />
              </Icon>
              <a
                href={`tel: ${telephones[0].phoneNumber.replace(/\s/g, '')}`}
                sx={{
                  borderBottom: `1px solid ${colors.primary}`,
                  pb: 0,
                  fontSize: 1,
                }}
              >
                {telephones[0].phoneNumber}
              </a>
            </InfoIconContainer>
            <InfoIconContainer sx={{ mb: 3 }}>
              <Icon sx={{ mr: 3 }}>
                <AiOutlineMail sx={{ fontSize: 5 }} />
              </Icon>
              <a
                href={`mailto:${emails[0].email}`}
                sx={{
                  borderBottom: `1px solid ${colors.primary}`,
                  pb: 0,
                  fontSize: 1,
                }}
              >
                {emails[0].email}
              </a>
            </InfoIconContainer>
          </InfoContainer>
          <LanguageSwitchContainer sx={{ px: 4 }}>
            <LanguagePicker />
          </LanguageSwitchContainer>
        </SecondaryContentContainer>
      </Nav>
      <NavToggler
        onClick={handleNavToggle}
        sx={{ fontSize: 6, color: 'primary' }}
      >
        <FiAlignJustify />
      </NavToggler>
    </NavContainer>
  );
};

const NavContainer = styled.div`
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1040;
  box-shadow: 0px 2px 8px 0px rgba(51, 51, 51, 0.38);
`;

const Nav = styled.nav`
  position: absolute;
  top: 0;
  left: calc(-100% - 4px);
  width: 100vw;
  height: 100vh;
  transition: ${(props) =>
    props.isMenuOpen ? '0.5s ease-out' : '0.2s linear'};
  transform: ${(props) =>
    props.isMenuOpen ? 'translateX(calc(100% + 4px))' : null};
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;

const MainNavBarHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${(props) => props.colors.primary};
`;

const CloseNav = styled(FiX)`
  border: none;
  background: transparent;
`;

const MainNav = styled.ul`
  display: flex;
  flex-direction: column;
  justify-items: flex-start;
  align-items: center;
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
`;

const NavToggler = styled.button`
  border: none;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LanguageSwitchContainer = styled.div`
  align-self: flex-end;
`;

const LinkIconContainer = styled.div`
  width: 30px;
  height: 25px;
  align-items: center;
  justify-content: center;
`;

const InfoIconContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Icon = styled.div`
  width: 30px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SecondaryContentContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;
