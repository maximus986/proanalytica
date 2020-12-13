/** @jsx jsx */
import { jsx } from 'theme-ui';
import { usePageContext } from '@3nvi/gatsby-theme-intl';
import { Link as GatsbyLink } from 'gatsby';
import RSFlag from '../images/rs.png';
import ENFlag from '../images/gb.png';
import styled from '@emotion/styled';

export const LanguagePicker = () => {
  const { lang, originalPath } = usePageContext();
  const sr = lang === 'sr' ? 'cir' : 'sr';
  const isSerbian = lang === 'sr' || lang === 'cir';

  return (
    <div>
      <LangLink
        aria-label={`Change language to SR`}
        to={`/${sr}${originalPath}`}
        sx={{ mr: 1, opacity: isSerbian ? 1 : 0.5 }}
      >
        <img src={RSFlag} alt="Serbian flag" />
      </LangLink>
      <LangLink
        aria-label={`Change language to EN`}
        to={`/en${originalPath}`}
        sx={{ opacity: !isSerbian ? 1 : 0.5 }}
      >
        <img src={ENFlag} alt="Serbian flag" />
      </LangLink>
    </div>
  );
};

const LangLink = styled(GatsbyLink)`
  display: inline-block;
  width: 32px;
  height: 21px;
  overflow: hidden;
`;
