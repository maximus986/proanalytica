/** @jsx jsx */
import { jsx } from 'theme-ui';
import { usePageContext } from '@3nvi/gatsby-theme-intl';
import { Link as GatsbyLink } from 'gatsby';
import RSFlag from 'images/rs.png';
import ENFlag from 'images/gb.png';
import styled from '@emotion/styled';
import { useTranslation } from '@3nvi/gatsby-theme-intl';

export const LanguagePicker = ({ isNavbarSticky }) => {
  const { lang, originalPath } = usePageContext();
  const { t } = useTranslation();
  const sr = lang === 'sr' ? 'cir' : 'sr';
  const isSerbian = lang === 'sr' || lang === 'cir';

  return (
    <Container>
      <LangContainer
        sx={{
          mr: 3,
          opacity: isSerbian ? 1 : 0.5,
        }}
      >
        <LangLink
          aria-label={`Change language to SR`}
          to={`/${sr}${originalPath}`}
        >
          <img src={RSFlag} alt="Serbian flag" />
        </LangLink>
        <LangName isNavbarSticky={isNavbarSticky}>{`${t(sr)}`}</LangName>
      </LangContainer>
      <LangContainer
        sx={{
          opacity: !isSerbian ? 1 : 0.5,
        }}
      >
        <LangLink
          aria-label={`Change language to EN`}
          to={`/en${originalPath}`}
        >
          <img src={ENFlag} alt="Serbian flag" />
        </LangLink>
        <LangName isNavbarSticky={isNavbarSticky}>{t('en')}</LangName>
      </LangContainer>
    </Container>
  );
};

const LangName = ({ children, isNavbarSticky }) => {
  return (
    <span
      sx={{
        color: isNavbarSticky ? 'primaryBackground' : 'primary',
        m: 0,
        lineHeight: 1,
        mt: '3px',
        fontSize: 0,
      }}
    >
      {children}
    </span>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const LangContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const LangLink = styled(GatsbyLink)`
  display: inline-block;
  width: 32px;
  height: 20px;
  overflow: hidden;
  cursor: pointer;
`;
