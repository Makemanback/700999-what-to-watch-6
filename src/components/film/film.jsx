import React, {useEffect} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import {ActionCreator} from "../../store/action";
import {Path} from "../../const";
import filmProp from "./film.prop";
import ApiService from "../../store/api-actions";

import Footer from '../footer/footer';
import Logo from '../logo/logo';
import CardsList from '../cards-list/cards-list';
import MovieCardButtons from '../movie-card-buttons/movie-card-buttons';
import UserBlock from '../user-block/user-block';
import FilmOverview from "../film-overview/film-overview";
import FilmDetails from "../film-details/film-details";
import FilmReviews from "../film-reviews/film-reviews";
import LoadingScreen from '../loading-screen/loading-screen';
import NotFound from "../not-found/not-found";

const apiService = new ApiService();
const PageLogo = <Logo />;
const User = <UserBlock />;
const PageFooter = <Footer />;

const Film = ({
  filmId,
  loadFilmsData,
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
            {PageLogo}

            {User}
          </header>

          <div className="movie-card__wrap">
            <div className="movie-card__desc">
              <h2 className="movie-card__title">{title}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{filmGenre}</span>
                <span className="movie-card__year">{released}</span>
              </p>

              <MovieCardButtons authorizationStatus={authorizationStatus} id={filmId} />
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

          <CardsList
            films={exactFilms}
            isDataLoaded={isDataLoaded}
            filmsToShow={filmsToShow}
            loadMovieData={loadFilmsData}
            filmId={filmId} />

        </section>

        {PageFooter}
      </div>
    </React.Fragment>
  );
};

const FilmContainer = ({
  films,
  currentFilm,
  path,
  loadFilmsData,
  authorizationStatus,
  currentFilmComments,
  filmId,
  resetFilm,
  filmsToShow,
  isDataLoaded,
  isFilmFound
}) => {


  if (!isFilmFound) {
    return <NotFound />;
  }

  useEffect(() => {
    if (!currentFilm) {
      loadFilmsData(filmId);
    }
  }, [currentFilm, filmId]);

  useEffect(() => () => resetFilm(), [filmId]);


  if (!currentFilm) {
    return (
      <LoadingScreen />
    );
  }

  const film = currentFilm;

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
      loadFilmsData={loadFilmsData}
      filmsToShow={filmsToShow}
      isDataLoaded={isDataLoaded}
      movieOverview={movieOverview}
      movieReviews={movieReviews}
      movieDetails={movieDetails}
      filmId={filmId} />
  );
};

Film.propTypes = {
  currentFilm: filmProp,
  loadFilmsData: PropTypes.func.isRequired,
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
  filmId: PropTypes.number.isRequired,
};

FilmContainer.propTypes = {
  films: PropTypes.arrayOf(filmProp).isRequired,
  path: PropTypes.string.isRequired,
  currentFilm: filmProp,
  loadFilmsData: PropTypes.func.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  currentFilmComments: PropTypes.array,
  filmId: PropTypes.number.isRequired,
  resetFilm: PropTypes.func.isRequired,
  filmsToShow: PropTypes.number.isRequired,
  isDataLoaded: PropTypes.bool.isRequired,
  isFilmFound: PropTypes.bool.isRequired
};

const mapStateToProps = ({
  filteredFilms,
  currentFilm,
  authorizationStatus,
  currentFilmComments,
  currentFilmId,
  filmsToShow,
  isDataLoaded,
  isFilmFound}) => {
  return {
    currentFilm,
    films: filteredFilms,
    authorizationStatus,
    currentFilmComments,
    currentFilmId,
    filmsToShow,
    isDataLoaded,
    isFilmFound
  };
};

const mapDispatchToProps = (dispatch) => ({
  loadFilmsData(id) {
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
