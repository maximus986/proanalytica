/** @jsx jsx */
import styled from '@emotion/styled';
import { useTranslation } from '@3nvi/gatsby-theme-intl';
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';
import { IoLocationOutline } from 'react-icons/io5';
import { jsx, useThemeUI } from 'theme-ui';
import { config } from '../../../config.js';
import { LanguagePicker } from '../../languagePicker';

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
      <TopBarContainer sx={{ px: [null, null, 4, 6], py: 2, bg: 'secondary' }}>
        <InfoContainer>
          <InfoIconContainer sx={{ mr: 24 }}>
            <Icon sx={{ mr: 3 }}>
              <IoLocationOutline sx={{ fontSize: 2 }} />
            </Icon>
            <p sx={{ fontSize: 0 }}>{t('address')}</p>
          </InfoIconContainer>
          <InfoIconContainer sx={{ mr: 24 }}>
            <Icon sx={{ mr: 3 }}>
              <AiOutlinePhone sx={{ fontSize: 2 }} />
            </Icon>
            <Link
              href={`tel: ${config.tel.replace(/\s/g, '')}`}
              sx={{
                pb: 0,
                fontSize: 0,
                transition: 'link',
              }}
              {...{ colors }}
            >
              {config.tel}
            </Link>
          </InfoIconContainer>
          <InfoIconContainer>
            <Icon sx={{ mr: 3 }}>
              <AiOutlineMail sx={{ fontSize: 2 }} />
            </Icon>
            <Link
              href={`mailto:${config.primaryEmail}`}
              sx={{
                pb: 0,
                fontSize: 0,
                transition: 'link',
              }}
              {...{ colors }}
            >
              {config.primaryEmail}
            </Link>
          </InfoIconContainer>
        </InfoContainer>
        <LanguageSwitchContainer>
          <LanguagePicker />
        </LanguageSwitchContainer>
      </TopBarContainer>
    </div>
  );
};

const TopBarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LanguageSwitchContainer = styled.div`
  display: flex;
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

const Link = styled.a`
  &:hover {
    color: ${(props) => props.colors.primary};
  }
`;
