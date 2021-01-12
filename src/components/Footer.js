/** @jsx jsx */
import { useTranslation } from '@3nvi/gatsby-theme-intl';
import styled from '@emotion/styled';
import { graphql, useStaticQuery } from 'gatsby';
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';
import { IoLocationOutline } from 'react-icons/io5';
import { Flex, Grid, jsx, useThemeUI } from 'theme-ui';
import { useLocalizedWpData } from '../hooks/useLocalizedWpData';
import certificate from '../images/certificate.png';
import lachner from '../images/lachner.png';
import logo from '../images/logo.png';
import { Container } from './Container';
import { Link } from './link';

export const Footer = () => {
  const data = useStaticQuery(graphql`
    {
      allWpCertificate {
        nodes {
          language {
            code
          }
          certificate {
            certificateName
            certificateDocument {
              localFile {
                url
              }
            }
          }
        }
      }
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

  const localizedData = useLocalizedWpData(data.allWpCertificate.nodes);
  const contactData = useLocalizedWpData(data.allWpPage.nodes)[0];
  const {
    contactPage: { address, emails, telephones },
  } = contactData;
  const { t } = useTranslation();
  const {
    theme: { colors },
  } = useThemeUI();
  const currentYear = new Date().getFullYear();
  return (
    <footer sx={{ bg: 'secondaryBackground' }}>
      <Separator {...{ colors }} />
      <Container>
        <Grid
          gap={[5]}
          columns={[null, null, null, 3]}
          sx={{ px: [4, 0], py: [7] }}
        >
          <Link
            to="/"
            sx={{
              lineHeight: 'reset',
              width: [220, null, null, 240],
            }}
          >
            <img src={logo} alt="Logo" sx={{ width: '100%' }} />
          </Link>
          <div>
            <h3 sx={{ color: 'primary', mb: [5], fontSize: [6] }}>
              {t('contact')}
            </h3>
            <InfoIconContainer sx={{ mb: [4] }}>
              <Icon sx={{ mr: 3 }}>
                <IoLocationOutline sx={{ fontSize: 6 }} />
              </Icon>
              <p sx={{ fontSize: 1 }}>{address}</p>
            </InfoIconContainer>
            <InfoIconContainer sx={{ mb: [4] }}>
              <Icon sx={{ mr: 3 }}>
                <AiOutlinePhone sx={{ fontSize: 6 }} />
              </Icon>
              <InfoLink
                href={`tel: ${telephones[0].phoneNumber.replace(/\s/g, '')}`}
                sx={{
                  pb: 0,
                  transition: 'link',
                  borderBottom: [
                    `1px solid ${colors.primary}`,
                    null,
                    null,
                    'none',
                  ],
                  fontSize: 1,
                }}
                {...{ colors }}
              >
                {telephones[0].phoneNumber}
              </InfoLink>
            </InfoIconContainer>
            <InfoIconContainer sx={{ mb: [4] }}>
              <Icon sx={{ mr: 3 }}>
                <AiOutlineMail sx={{ fontSize: 6 }} />
              </Icon>
              <InfoLink
                href={`mailto:${emails[0].email}`}
                sx={{
                  pb: 0,
                  transition: 'link',
                  borderBottom: [
                    `1px solid ${colors.primary}`,
                    null,
                    null,
                    'none',
                  ],
                  fontSize: 1,
                }}
                {...{ colors }}
              >
                {emails[0].email}
              </InfoLink>
            </InfoIconContainer>
          </div>
          <div>
            <h3 sx={{ color: 'primary', mb: [5], fontSize: [6] }}>
              {t('managementSystems')}
            </h3>
            <Flex sx={{ flexDirection: 'column', alignItems: 'flex-start' }}>
              {localizedData.map(
                (
                  { certificate: { certificateDocument, certificateName } },
                  i,
                ) => {
                  return (
                    <InfoLink
                      key={i}
                      href={certificateDocument.localFile.url}
                      target="_blank"
                      sx={{
                        pb: 0,
                        transition: 'link',
                        display: 'inline-block',
                        mb: [4],
                        fontSize: 1,
                        borderBottom: [
                          `1px solid ${colors.primary}`,
                          null,
                          null,
                          'none',
                        ],
                      }}
                      {...{ colors }}
                    >
                      {certificateName}
                    </InfoLink>
                  );
                },
              )}
            </Flex>
            <Flex>
              <figure sx={{ mr: 4 }}>
                <img src={certificate} alt="" sx={{ width: '100px' }} />
              </figure>
              <figure>
                <img src={lachner} alt="" sx={{ width: '100px' }} />
              </figure>
            </Flex>
          </div>
        </Grid>
      </Container>
      <div
        sx={{ textAlign: 'center', bg: 'secondaryBackgroundActive', px: [4] }}
      >
        <p sx={{ fontSize: 0 }}>
          Copyright &copy; Proanalytica doo {currentYear}
        </p>
        <p sx={{ fontSize: 0 }}>{t('rightsReserved')}</p>
      </div>
    </footer>
  );
};

const Separator = styled.div`
  width: 100%;
  height: 8px;
  background: ${(props) => props.colors.primary};
`;

const InfoIconContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Icon = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const InfoLink = styled.a`
  &:hover {
    color: ${(props) => props.colors.primary};
  }
`;
