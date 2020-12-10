import { Link } from 'gatsby';
import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageMenu = (props) => {
  const { t, i18n } = useTranslation();

  return (
    <>
      <button onClick={() => i18n.changeLanguage('sr')}>
        <Link to="/">Srpski</Link>
      </button>
      <button onClick={() => i18n.changeLanguage('en')}>
        <Link to="/en">Engleski</Link>
      </button>
    </>
  );
};

export default LanguageMenu;
