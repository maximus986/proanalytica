import React from 'react';
import { graphql, Link as GatsbyLink, useStaticQuery } from 'gatsby';
import { usePageContext } from '@3nvi/gatsby-theme-intl';

const LanguagePicker = () => {
  const { originalPath } = usePageContext();
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            supportedLanguages
          }
        }
      }
    `,
  );

  return (
    <div>
      {site.siteMetadata.supportedLanguages.map((supportedLang) => (
        <GatsbyLink
          aria-label={`Change language to ${supportedLang}`}
          to={`/${supportedLang}${originalPath}`}
          key={supportedLang}
        >
          {supportedLang.toUpperCase()}
        </GatsbyLink>
      ))}
    </div>
  );
};

export default LanguagePicker;
