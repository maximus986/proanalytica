import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import { Link as TransLink } from '@3nvi/gatsby-theme-intl';
/** @jsx jsx */
import { jsx } from 'theme-ui';
import LanguagePicker from './languagePicker';

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
      <LanguagePicker />
    </div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
