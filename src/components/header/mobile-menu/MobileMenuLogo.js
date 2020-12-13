/** @jsx jsx */
import { jsx } from 'theme-ui';
import logo from '../../../images/logo.png';
import { Link } from '../../link';

export const MobileMenuLogo = () => {
  return (
    <Link
      to="/"
      sx={{ lineHeight: 'reset', width: ['150px', '200px', '220px'] }}
    >
      <img src={logo} alt="Logo" sx={{ width: '100%' }} />
    </Link>
  );
};
