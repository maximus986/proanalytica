import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import LanguageMenu from './languageMenu';
/** @jsx jsx */
import { jsx } from 'theme-ui';

const Header = ({ siteTitle }) => (
  <header
    sx={{
      bg: 'primary',
      marginBottom: `1.45rem`,
      display: `flex`,
      justifyContent: `center`,
      alignItems: `center`,
    }}
  >
    <div
      style={{
        padding: `10px`,
        maxWidth: 960,
        textAlign: `center`,
      }}
    >
      <h1
        style={{
          margin: `20px 100px`,
        }}
      >
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
    <LanguageMenu></LanguageMenu>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
