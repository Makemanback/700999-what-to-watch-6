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
import {ActionCreator} from "../../store/action";

const apiService = new ApiService();

const Film = ({
  onLoadData,
  authorizationStatus,
  filmsToShow,
  exactFilms,
  isDataLoaded,
  movieOverview,
  movieDetails,
  movieReviews,
  background,
  backgroundImg,
  title,
  poster,
  filmGenre,
  released,
}) => {

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

          <CardsList films={exactFilms} isDataLoaded={isDataLoaded} filmsToShow={filmsToShow} onLoadData={onLoadData} />

        </section>

        <Footer />
      </div>
    </React.Fragment>
  );
};

const FilmContainer = ({
  films,
  currentFilm,
  path,
  onLoadData,
  isFilmLoaded,
  authorizationStatus,
  currentFilmComments,
  filmId,
  resetFilm,
  filmsToShow,
  isDataLoaded
}) => {

  useEffect(() => {
    if (!currentFilm) {
      onLoadData(filmId);
    }
  }, [currentFilm, filmId]);

  useEffect(() => () => resetFilm(), [filmId]);

  if (!isFilmLoaded) {
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

  const movieOverview = path === FILM_ID
    ? <FilmOverview
      film={film}
      path={path}
    />
    : null;

  const movieDetails = path === MOVIE_DETAILS
    ? <FilmDetails
      film={film}
      path={path}
    />
    : null;

  const movieReviews = path === MOVIE_REVIEWS
    ? <FilmReviews
      path={path}
      reviews={currentFilmComments}
      id={id}
    />
    : null;

  return (
    <Film
      title={title}
      released={released}
      background={background}
      backgroundImg={backgroundImg}
      filmGenre={filmGenre}
      poster={poster}
      exactFilms={exactFilms}
      authorizationStatus={authorizationStatus}
      onLoadData={onLoadData}
      filmsToShow={filmsToShow}
      isDataLoaded={isDataLoaded}
      movieOverview={movieOverview}
      movieReviews={movieReviews}
      movieDetails={movieDetails} />
  );
};

Film.propTypes = {
  currentFilm: filmProp,
  onLoadData: PropTypes.func.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  filmsToShow: PropTypes.number.isRequired,
  isDataLoaded: PropTypes.bool.isRequired,
  exactFilms: PropTypes.arrayOf(filmProp).isRequired,
  movieOverview: PropTypes.object,
  movieDetails: PropTypes.object,
  movieReviews: PropTypes.object,
  background: PropTypes.string.isRequired,
  backgroundImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  filmGenre: PropTypes.string.isRequired,
  released: PropTypes.number.isRequired,
};

FilmContainer.propTypes = {
  films: PropTypes.arrayOf(filmProp).isRequired,
  path: PropTypes.string.isRequired,
  currentFilm: filmProp,
  onLoadData: PropTypes.func.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  currentFilmComments: PropTypes.array.isRequired,
  isFilmLoaded: PropTypes.bool.isRequired,
  filmId: PropTypes.number.isRequired,
  resetFilm: PropTypes.func.isRequired,
  filmsToShow: PropTypes.number.isRequired,
  isDataLoaded: PropTypes.bool.isRequired
};

const mapStateToProps = ({
  filteredFilms,
  currentFilm,
  isFilmLoaded,
  authorizationStatus,
  currentFilmComments,
  currentFilmId,
  filmsToShow,
  isDataLoaded}) => {
  return {
    currentFilm,
    isFilmLoaded,
    films: filteredFilms,
    authorizationStatus,
    currentFilmComments,
    currentFilmId,
    filmsToShow,
    isDataLoaded
  };
};

const mapDispatchToProps = (dispatch) => ({
  onLoadData(id) {
    dispatch(apiService.fetchFilm(id));
    dispatch(apiService.fetchFilmComments(id));
    dispatch(apiService.fetchFilmId(id));
    dispatch(apiService.fetchFilmsList());
  },
  resetFilm() {
    dispatch(ActionCreator.resetFilm());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(FilmContainer);
