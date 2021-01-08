/** @jsx jsx */
import React from 'react';
import styled from '@emotion/styled';
import { useTranslation } from '@3nvi/gatsby-theme-intl';
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';
import { IoLocationOutline } from 'react-icons/io5';
import { jsx, useThemeUI } from 'theme-ui';
import { config } from '../../../config.js';
import logo from '../../../images/logo.png';
import { Link } from '../../link';
import { Container } from '../../container.js';

export const TopBar = () => {
  const {
    theme: { colors },
  } = useThemeUI();
  const { t } = useTranslation();
  return (
    <div
      sx={{
        display: ['none', 'none', 'block'],
      }}
    >
      <Container>
        <TopBarContainer sx={{ py: 4 }}>
          <Link
            to="/"
            sx={{
              lineHeight: 'reset',
              width: [null, null, '160px', '220px'],
            }}
          >
            <img src={logo} alt="Logo" sx={{ width: '100%' }} />
          </Link>
          <InfoContainer>
            <InfoIconContainer sx={{ mr: [null, null, 4, 5] }}>
              <Icon sx={{ mr: [null, null, 2, 3] }}>
                <IoLocationOutline sx={{ fontSize: [null, null, 0, 2] }} />
              </Icon>
              <p sx={{ fontSize: [null, null, 0, 1] }}>{t('address')}</p>
            </InfoIconContainer>
            <InfoIconContainer sx={{ mr: [null, null, 4, 5] }}>
              <Icon sx={{ mr: [null, null, 2, 3] }}>
                <AiOutlinePhone sx={{ fontSize: [null, null, 0, 2] }} />
              </Icon>
              <InfoLink
                href={`tel: ${config.tel.replace(/\s/g, '')}`}
                sx={{
                  pb: 0,
                  fontSize: [null, null, 0, 1],
                  transition: 'link',
                }}
                {...{ colors }}
              >
                {config.tel}
              </InfoLink>
            </InfoIconContainer>
            <InfoIconContainer>
              <Icon sx={{ mr: [null, null, 2, 3] }}>
                <AiOutlineMail sx={{ fontSize: [null, null, 0, 2] }} />
              </Icon>
              <InfoLink
                href={`mailto:${config.primaryEmail}`}
                sx={{
                  pb: 0,
                  fontSize: [null, null, 0, 1],
                  transition: 'link',
                }}
                {...{ colors }}
              >
                {config.primaryEmail}
              </InfoLink>
            </InfoIconContainer>
          </InfoContainer>
        </TopBarContainer>
      </Container>
    </div>
  );
};

const TopBarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const InfoIconContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Icon = styled.div`
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const InfoContainer = styled.div`
  display: flex;
`;

const InfoLink = styled.a`
  &:hover {
    color: ${(props) => props.colors.primary};
  }
`;
