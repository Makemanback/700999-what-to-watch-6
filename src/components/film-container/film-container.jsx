import React, {useEffect} from "react";
import PropTypes from "prop-types";
import {useSelector, useDispatch} from "react-redux";

import ApiService from "../../store/api-actions";
import {resetFilm} from "../../store/action";
import {Path} from "../../const";

import Film from '../film/film';
import FilmOverview from "../film-overview/film-overview";
import FilmDetails from "../film-details/film-details";
import FilmReviews from "../film-reviews/film-reviews";
import LoadingScreen from '../loading-screen/loading-screen';

const apiService = new ApiService();

const FilmContainer = ({path, filmId}) => {

  const {currentFilm, currentFilmComments} = useSelector(({FILM}) => FILM);
  const {filteredFilms: films, filmsToShow} = useSelector(({ALL_FILMS}) => ALL_FILMS);
  const {authorizationStatus} = useSelector(({USER}) => USER);

  const loadFilmsData = () => dispatch(apiService.fetchFilm(filmId));

  const dispatch = useDispatch();
  useEffect(() => {
    if (!currentFilm) {
      loadFilmsData(filmId);
      dispatch(apiService.fetchFilmComments(filmId));
      dispatch(apiService.fetchFilmsList());
    }
  }, [currentFilm, filmId]);

  useEffect(() => () => dispatch(resetFilm()), [filmId]);


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
  path: PropTypes.string.isRequired,
  filmId: PropTypes.number.isRequired,
};

export default FilmContainer;
