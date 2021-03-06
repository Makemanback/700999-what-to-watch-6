import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {useParams} from 'react-router-dom';

import ApiService from "../../store/api-actions";

import Footer from '../footer/footer';
import CardsList from '../cards-list/cards-list';
import Logo from '../logo/logo';
import UserBlock from "../user-block/user-block";
import LoadingScreen from '../loading-screen/loading-screen';

const apiService = new ApiService();

const PageLogo = <Logo />;
const PageUserBlock = <UserBlock />;

const MyList = () => {

  const favoriteFilms = useSelector(({ALL_FILMS}) => ALL_FILMS.favoriteFilms);

  const dispatch = useDispatch();

  const {id} = useParams();
  const filmId = +id;

  const loadFilmsData = () => dispatch(apiService.fetchFavoriteFilms());

  useEffect(() => {
    if (!favoriteFilms) {
      loadFilmsData();
    }
  }, [favoriteFilms, filmId]);

  if (!favoriteFilms) {
    return (
      <LoadingScreen />
    );
  }


  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        {PageLogo}

        <h1 className="page-title user-page__title">My list</h1>

        {PageUserBlock}
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <CardsList
          films={favoriteFilms}
          filmId={filmId}
          loadMovieData={loadFilmsData} />
      </section>

      <Footer />
    </div>
  );
};

export default MyList;
