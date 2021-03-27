import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {useParams} from 'react-router-dom';

import ApiService from "../../store/api-actions";
import {resetFilm} from "../../store/action";
import {getFilteredFilms} from '../../store/all-films/selectors';

import Film from '../film/film';
import LoadingScreen from '../loading-screen/loading-screen';

const apiService = new ApiService();

const FilmContainer = () => {

  const {id} = useParams();
  const filmId = +id;

  const allFilmsStore = useSelector(({ALL_FILMS}) => ALL_FILMS);

  const currentFilm = useSelector(({FILM}) => FILM.currentFilm);

  const loadFilmsData = () => dispatch(apiService.fetchFilm(filmId));

  const dispatch = useDispatch();

  useEffect(() => {
    if (!currentFilm) {
      loadFilmsData();
      dispatch(apiService.fetchFilmComments(filmId));
      dispatch(apiService.fetchFilmsList());
    }
  }, [currentFilm, filmId]);

  useEffect(() => () => dispatch(resetFilm()), [filmId]);

  const filteredFilms = getFilteredFilms(allFilmsStore);

  if (!currentFilm || !filteredFilms) {
    return (
      <LoadingScreen />
    );
  }

  const {genre: filmGenre} = currentFilm;

  const exactFilms = filteredFilms
    .filter(({genre}) => genre === filmGenre)
    .slice(0, 4);

  return (
    <Film
      currentFilm={currentFilm}
      exactFilms={exactFilms}
      loadFilmsData={loadFilmsData}
      filmId={filmId}
    />
  );
};

export default FilmContainer;
