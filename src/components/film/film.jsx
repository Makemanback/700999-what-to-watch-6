import React, {useEffect} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import Footer from '../footer/footer';
import Logo from '../logo/logo';
import CardsList from '../cards-list/cards-list';
import MovieCardButtons from '../movie-card-buttons/movie-card-buttons';
import UserBlock from '../user-block/user-block';
import filmProp from "./film.prop";
import FilmOverview from "../film-overview/film-overview";
import FilmDetails from "../film-details/film-details";
import {Path} from "../../const";
import FilmReviews from "../film-reviews/film-reviews";
import ApiService from "../../store/api-actions";
import LoadingScreen from '../loading-screen/loading-screen';

const apiService = new ApiService();

const Film = ({
  films,
  currentFilm,
  path,
  onLoadData,
  isDataLoaded,
  authorizationStatus,
  currentFilmComments,
  currentFilmId}) => {

  useEffect(() => {
    if (!isDataLoaded) {
      onLoadData(currentFilmId);
    }
  }, [isDataLoaded]);

  if (!isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }

  const film = ApiService.adaptToClient(currentFilm);

  const {
    title,
    genre: filmGenre,
    released,
    id,
    background,
    poster,
    backgroundImg
  } = film;

  const exactFilms = films
    .map(ApiService.adaptToClient)
    .filter(({genre}) => genre === filmGenre)
    .slice(0, 4);

  const {FILM_ID, MOVIE_DETAILS, MOVIE_REVIEWS} = Path;

  const movieOverview = path === FILM_ID ? <FilmOverview
    film={film}
    path={path}
  /> : null;

  const movieDetails = path === MOVIE_DETAILS ? <FilmDetails
    film={film}
    path={path}
  /> : null;

  const movieReviews = path === MOVIE_REVIEWS ? <FilmReviews
    path={path}
    reviews={currentFilmComments}
    id={id}
  /> : null;

  return (
    <React.Fragment>
      <section
        className="movie-card movie-card--full"
        style={{backgroundColor: background}}
      >
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img src={backgroundImg} alt={title} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header movie-card__head">
            <Logo />

            <UserBlock />
          </header>

          <div className="movie-card__wrap">
            <div className="movie-card__desc">
              <h2 className="movie-card__title">{title}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{filmGenre}</span>
                <span className="movie-card__year">{released}</span>
              </p>

              <MovieCardButtons authorizationStatus={authorizationStatus} />
            </div>
          </div>
        </div>

        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              <img src={poster} alt={`${title} poster`} width="218" height="327" />
            </div>

            <div className="movie-card__desc">

              {movieOverview}
              {movieDetails}
              {movieReviews}

            </div>
          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <CardsList exactFilms={exactFilms} path={path} />

        </section>

        <Footer />
      </div>
    </React.Fragment>
  );
};

Film.propTypes = {
  films: PropTypes.arrayOf(filmProp).isRequired,
  path: PropTypes.string.isRequired,
  currentFilm: PropTypes.object.isRequired,
  onLoadData: PropTypes.func.isRequired,
  isDataLoaded: PropTypes.bool.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  currentFilmComments: PropTypes.array.isRequired,
  currentFilmId: PropTypes.number.isRequired
};

const mapStateToProps = ({
  filteredFilms,
  currentFilm,
  isDataLoaded,
  authorizationStatus,
  currentFilmComments,
  currentFilmId}) => {
  return {
    currentFilm,
    isDataLoaded,
    films: filteredFilms,
    authorizationStatus,
    currentFilmComments,
    currentFilmId
  };
};

const mapDispatchToProps = (dispatch) => ({
  onLoadData(id) {
    dispatch(apiService.fetchFilm(id)),
    dispatch(apiService.fetchFilmComments(id)),
    dispatch(apiService.fetchFilmsList());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Film);
