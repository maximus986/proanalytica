/** @jsx jsx */
import React from 'react';
import { useTranslation } from '@3nvi/gatsby-theme-intl';
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';
import { IoLocationOutline } from 'react-icons/io5';
import { Divider, Flex, Grid, jsx } from 'theme-ui';
import { Container, PageIntro } from 'components';
import SEO from 'components/seo';
import { LocationMap } from 'components';
import { useContactQuery, useLocalizedWpData } from 'hooks';

const Contact = () => {
  const data = useContactQuery();
  const { t } = useTranslation();
  const localizedPageData = useLocalizedWpData(data)[0];
  const {
    contactPage: {
      contactData: {
        contactInfoItem: { locations, emails, phoneNumbers },
      },
      pageIntros: {
        pageIntroItem: { pageTitle, pageSubtitle, pageIntroImage },
      },
    },
  } = localizedPageData;

  return (
    <>
      <SEO title={pageTitle} />
      <PageIntro
        pageTitle={pageTitle}
        pageSubtitle={pageSubtitle}
        pageIntroImage={pageIntroImage}
      />
      <section sx={{ px: [4, 0], py: [8] }}>
        <Container>
          <Grid gap={[6, null, null, 13]} columns={[null, null, 3]}>
            <ContactItem
              IconComponent={IoLocationOutline}
              message={t('contactAddress')}
            >
              {locations.map((location) => {
                return <p key={location.address}>{location.address}</p>;
              })}
            </ContactItem>
            <ContactItem
              IconComponent={AiOutlinePhone}
              message={t('contactPhone')}
            >
              {phoneNumbers.map(({ phoneNumber }, i) => (
                <a
                  href={`tel: ${phoneNumber.replace(/\s/g, '')}`}
                  sx={{
                    display: 'block',
                    transition: 'link',
                    '&:hover': {
                      color: 'primary',
                    },
                  }}
                  key={`${phoneNumber}-${i}`}
                >
                  {phoneNumber}
                </a>
              ))}
            </ContactItem>
            <ContactItem
              IconComponent={AiOutlineMail}
              message={t('contactEmail')}
            >
              {emails.map(({ email }) => (
                <a
                  href={`mailto: ${email}`}
                  sx={{
                    display: 'block',
                    transition: 'link',
                    '&:hover': {
                      color: 'primary',
                    },
                  }}
                  key={email}
                >
                  {email}
                </a>
              ))}
            </ContactItem>
          </Grid>
        </Container>
      </section>
      <section>
        <LocationMap locations={locations} />
      </section>
    </>
  );
};

export default Contact;

const ContactItem = ({ IconComponent, message, children }) => {
  return (
    <Flex
      sx={{
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        bg: 'primaryBackground',
        boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.1)',
        py: 6,
        px: 6,
        textAlign: 'center',
      }}
    >
      <div>{<IconComponent sx={{ fontSize: 12 }} />}</div>
      <p sx={{ mb: 3, fontSize: 5 }}>{message}</p>
      <Divider sx={{ color: 'primary' }} />
      <div sx={{ mt: 3 }}>{children}</div>
    </Flex>
  );
};
