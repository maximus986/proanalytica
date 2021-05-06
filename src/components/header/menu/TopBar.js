/** @jsx jsx */
import styled from '@emotion/styled';
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';
import { IoLocationOutline } from 'react-icons/io5';
import { jsx, useThemeUI } from 'theme-ui';
import { useContactQuery, useLocalizedWpData } from 'hooks';
import logo from 'images/logo.png';
import { Container } from '../../Container';
import { Link } from '../../link';

export const TopBar = () => {
  const data = useContactQuery();
  const {
    theme: { colors },
  } = useThemeUI();
  const localizedData = useLocalizedWpData(data)[0];
  const {
    contactPage: {
      contactData: {
        contactInfoItem: { locations, emails, phoneNumbers },
      },
    },
  } = localizedData;
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
              <p sx={{ fontSize: [null, null, 0, 1] }}>
                {locations[0].address}
              </p>
            </InfoIconContainer>
            <InfoIconContainer sx={{ mr: [null, null, 4, 5] }}>
              <Icon sx={{ mr: [null, null, 2, 3] }}>
                <AiOutlinePhone sx={{ fontSize: [null, null, 0, 2] }} />
              </Icon>
              <InfoLink
                href={`tel: ${phoneNumbers[0].phoneNumber.replace(/\s/g, '')}`}
                sx={{
                  pb: 0,
                  fontSize: [null, null, 0, 1],
                  transition: 'link',
                }}
                {...{ colors }}
              >
                {phoneNumbers[0].phoneNumber}
              </InfoLink>
            </InfoIconContainer>
            <InfoIconContainer>
              <Icon sx={{ mr: [null, null, 2, 3] }}>
                <AiOutlineMail sx={{ fontSize: [null, null, 0, 2] }} />
              </Icon>
              <InfoLink
                href={`mailto:${emails[0].email}`}
                sx={{
                  pb: 0,
                  fontSize: [null, null, 0, 1],
                  transition: 'link',
                }}
                {...{ colors }}
              >
                {emails[0].email}
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
