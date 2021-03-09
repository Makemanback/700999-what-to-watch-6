import React, {useEffect} from "react";
import PropTypes from "prop-types";
import {connect} from 'react-redux';
import ApiService from "../../store/api-actions";

import MovieCardInfo from '../movie-card-info/movie-card-info';
import Logo from '../logo/logo';
import UserBlock from "../user-block/user-block";
import LoadingScreen from '../loading-screen/loading-screen';

const apiService = new ApiService();

const MovieCard = ({promoFilm, isDataLoaded, onLoadData}) => {

  useEffect(() => {
    if (!isDataLoaded) {
      onLoadData();
    }
  }, [isDataLoaded]);

  if (!isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }

  const film = ApiService.adaptToClient(promoFilm);
  const {
    backgroundImg,
    poster,
    released,
    genre,
    title
  } = film;

  return (
    <section className="movie-card">
      <div className="movie-card__bg">
        <img src={backgroundImg} alt={title} />
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <header className="page-header movie-card__head">
        <Logo />

        <UserBlock />
      </header>

      <MovieCardInfo
        title={title}
        genre={genre}
        year={released}
        poster={poster}
      />
    </section>
  );
};

MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  promoFilm: PropTypes.object.isRequired,
  isDataLoaded: PropTypes.bool.isRequired,
  onLoadData: PropTypes.func.isRequired
};

const mapStateToProps = ({promoFilm, isDataLoaded}) => {
  return {
    promoFilm,
    isDataLoaded,
  };
};

const mapDispatchToProps = (dispatch) => ({
  onLoadData() {
    dispatch(apiService.fetchPromoFilm());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieCard);
