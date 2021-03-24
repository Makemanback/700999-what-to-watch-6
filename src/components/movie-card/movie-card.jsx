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

  const authorizationStatus = useSelector(({USER}) => USER.authorizationStatus);
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

  const film = promoFilm;

  const {
    backgroundImg,
    poster,
    released,
    genre,
    title,
    id
  } = film;

  return (
    <section className="movie-card">
      <div className="movie-card__bg">
        <img src={backgroundImg} alt={title} />
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
        authorizationStatus={authorizationStatus}
        id={id}
      />
    </section>
  );
};

export default MovieCard;
