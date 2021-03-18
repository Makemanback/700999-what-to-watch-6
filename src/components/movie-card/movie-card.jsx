import React, {useEffect} from "react";
import PropTypes from "prop-types";
import {connect} from 'react-redux';
import ApiService from "../../store/api-actions";

import MovieCardInfo from '../movie-card-info/movie-card-info';
import Logo from '../logo/logo';
import UserBlock from "../user-block/user-block";
import LoadingScreen from '../loading-screen/loading-screen';

const apiService = new ApiService();
const PageLogo = <Logo />
const User = <UserBlock />

const MovieCard = ({promoFilm, loadFilmsData, authorizationStatus}) => {
  useEffect(() => {
    if (!promoFilm) {
      loadFilmsData();
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

MovieCard.propTypes = {
  promoFilm: PropTypes.object,
  loadFilmsData: PropTypes.func.isRequired,
  authorizationStatus: PropTypes.string.isRequired
};

const mapStateToProps = ({promoFilm, currentFilm, authorizationStatus}) => {
  return {
    promoFilm,
    currentFilm,
    authorizationStatus
  };
};

const mapDispatchToProps = (dispatch) => ({
  loadFilmsData() {
    dispatch(apiService.fetchPromoFilm());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieCard);
