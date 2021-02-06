import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '../logo/logo';
import Footer from '../footer/footer';


const NotFound = () => {
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />

        <h1 className="page-title user-page__title">Not found</h1>
      </header>

      <div className="not-found">
        <Link to="/" className="not-found__link">
          Go to the main page
        </Link>
      </div>
      <Footer />
    </div>

  );
};

export default NotFound;
