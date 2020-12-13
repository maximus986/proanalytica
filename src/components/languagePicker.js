import { usePageContext } from '@3nvi/gatsby-theme-intl';
import { Link as GatsbyLink } from 'gatsby';
import React from 'react';

const LanguagePicker = () => {
  const { lang, originalPath } = usePageContext();
  const sr = lang === 'sr' ? 'cir' : 'sr';

  return (
    <div>
      <GatsbyLink
        aria-label={`Change language to EN`}
        to={`/en${originalPath}`}
      >
        EN
      </GatsbyLink>
      <GatsbyLink
        aria-label={`Change language to SR`}
        to={`/${sr}${originalPath}`}
      >
        SR
      </GatsbyLink>
    </div>
  );
};

export default LanguagePicker;
