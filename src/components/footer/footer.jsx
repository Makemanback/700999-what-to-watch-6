import React from 'react';
import Logo from '../logo/logo';

const PageLogo = <Logo />;

const Footer = () => {
  return (
    <footer className="page-footer">
      {PageLogo}

      <div className="copyright">
        <p>© 2019 What to watch Ltd.</p>
      </div>
    </footer>
  );
};

export default Footer;
