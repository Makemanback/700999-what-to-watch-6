import React from "react";
import {useSelector} from "react-redux";

import Footer from '../footer/footer';
import CardsList from '../cards-list/cards-list';
import Logo from '../logo/logo';
import UserBlock from "../user-block/user-block";

const MyList = () => {

  const allFilms = useSelector(({ALL_FILMS}) => ALL_FILMS.allFilms);

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />

        <h1 className="page-title user-page__title">My list</h1>

        <UserBlock />
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <CardsList films={allFilms} />
      </section>

      <Footer />
    </div>
  );
};


export default MyList;
