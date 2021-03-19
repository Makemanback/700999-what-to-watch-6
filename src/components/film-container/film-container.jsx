import React, {useEffect} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import ApiService from "../../store/api-actions";
import filmProp from "../film/film.prop";
import {ActionCreator} from "../../store/action";
import {Path} from "../../const";

import Film from '../film/film';
import FilmOverview from "../film-overview/film-overview";
import FilmDetails from "../film-details/film-details";
import FilmReviews from "../film-reviews/film-reviews";
import LoadingScreen from '../loading-screen/loading-screen';
import NotFound from "../not-found/not-found";

const apiService = new ApiService();

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
  isFilmFound
}) => {

  console.log(films)
  // if (!isFilmFound) {
  //   return <NotFound />;
  // }

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
      movieOverview={movieOverview}
      movieReviews={movieReviews}
      movieDetails={movieDetails}
      filmId={filmId} />
  );
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
  isFilmFound: PropTypes.bool.isRequired
};

const mapStateToProps = ({
  filteredFilms,
  currentFilm,
  authorizationStatus,
  currentFilmComments,
  currentFilmId,
  filmsToShow,
  isFilmFound}) => {
  return {
    currentFilm,
    films: filteredFilms,
    authorizationStatus,
    currentFilmComments,
    currentFilmId,
    filmsToShow,
    isFilmFound
  };
};

const mapDispatchToProps = (dispatch) => ({
  loadFilmsData(id) {
    dispatch(apiService.fetchFilm(id));
    dispatch(apiService.fetchFilmComments(id));
    // dispatch(apiService.fetchFilmId(id));
    dispatch(apiService.fetchFilmsList());
  },
  resetFilm() {
    dispatch(ActionCreator.resetFilm());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(FilmContainer);
