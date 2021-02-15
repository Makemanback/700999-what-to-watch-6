import React from "react";
import PropTypes from "prop-types";
import Footer from '../footer/footer';
import CardsList from '../cards-list/cards-list';
import Logo from '../logo/logo';
import filmProp from "../film/film.prop";
import UserBlock from "../user-block/user-block";

const MyList = ({films}) => {
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />

        <h1 className="page-title user-page__title">My list</h1>

        <UserBlock />
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
  films: PropTypes.arrayOf(filmProp).isRequired
};


export default MyList;
