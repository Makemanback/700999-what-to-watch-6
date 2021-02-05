import React from "react";
import PropTypes from "prop-types";
import Footer from '../footer/footer';
import CardsList from '../cards-list/cards-list';
import Logo from '../logo/logo';

const MyList = ({films}) => {
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />

        <h1 className="page-title user-page__title">My list</h1>

        <div className="user-block">
          <div className="user-block__avatar">
            <img src="/img/avatar.jpg" alt="User avatar" width="63" height="63" />
          </div>
        </div>
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <CardsList films={films} />
      </section>

      <Footer />
    </div>
  );
};


MyList.propTypes = {
  films: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired
};


export default MyList;
