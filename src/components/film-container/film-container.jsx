import React, {useEffect} from "react";
import PropTypes from "prop-types";
import {useSelector, useDispatch} from "react-redux";

import ApiService from "../../store/api-actions";
import {resetFilm} from "../../store/action";

import Film from '../film/film';
import LoadingScreen from '../loading-screen/loading-screen';

const apiService = new ApiService();

const FilmContainer = ({filmId}) => {

  const currentFilm = useSelector(({FILM}) => FILM.currentFilm);

  const filteredFilms = useSelector(({ALL_FILMS}) => ALL_FILMS.filteredFilms);
  const filmsToShow = useSelector(({ALL_FILMS}) => ALL_FILMS.filmsToShow);

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
    background,
    poster,
    backgroundImg
  } = film;

  const exactFilms = filteredFilms
    .filter(({genre}) => genre === filmGenre)
    .slice(0, 4);


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
      filmId={filmId}
    />
  );
};

FilmContainer.propTypes = {
  filmId: PropTypes.number.isRequired,
};

export default FilmContainer;
