import React, {useEffect} from "react";
import {useSelector, useDispatch} from 'react-redux';
import ApiService from "../../store/api-actions";

import MovieCardInfo from '../movie-card-info/movie-card-info';
import Logo from '../logo/logo';
import UserBlock from "../user-block/user-block";
import LoadingScreen from '../loading-screen/loading-screen';

const apiService = new ApiService();
const PageLogo = <Logo />;
const User = <UserBlock />;

const MovieCard = () => {

  const promoFilm = useSelector(({FILM}) => FILM.promoFilm);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!promoFilm) {
      dispatch(apiService.fetchPromoFilm());
      dispatch(apiService.fetchFilmsList());
    }
  }, [promoFilm]);

  if (!promoFilm) {
    return (
      <LoadingScreen />
    );
  }

  const {
    backgroundImg,
    poster,
    released,
    genre,
    title,
    id: filmId,
    isFavorite
  } = promoFilm;

  return (
    <section className="movie-card" data-testid="moviecard">
      <div className="movie-card__bg">
        <img src={backgroundImg} alt={title} data-testid="background" />
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <header className="page-header movie-card__head">
        {PageLogo}

        {User}
      </header>

      <MovieCardInfo
        title={title}
        genre={genre}
        year={released}
        poster={poster}
        isFavorite={isFavorite}
        filmId={filmId}
      />
    </section>
  );
};

export default MovieCard;
