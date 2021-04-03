import {createAction} from '@reduxjs/toolkit';

export const ActionType = {
  CHANGE_GENRE: `genre/changeGenre`,
  SHOW_MORE: `allFilms/showMore`,
  LOAD_FILMS: `allFilms/loadFilms`,
  REDIRECT_TO_ROUTE: `user/redirectToRoute`,
  SET_GENRES: `allFilms/setGenres`,
  GET_FILM: `film/getFilm`,
  GET_FILM_ID: `film/getFilmId`,
  GET_COMMENTS: `allFilms/getComments`,
  GET_PROMO_FILM: `film/getPromoFilm`,
  RESET_FILM: `film/resetFilm`,
  GET_FAVORITE: `allFilms/getFavorite`,
  ADD_TO_FAVORITE_FILM: `film/addToFavoriteFilm`,
  REQUIRED_AUTHORIZATION: `user/requireAuthorization`,
};

export const loadFilms = createAction(ActionType.LOAD_FILMS, (films) => ({
  payload: films
}));

export const getFilm = createAction(ActionType.GET_FILM, (film) => ({
  payload: film
}));

export const getFilmId = createAction(ActionType.GET_FILM_ID, (id) => ({
  payload: id
}));

export const loadPromoFilm = createAction(ActionType.GET_PROMO_FILM, (film) => ({
  payload: film
}));

export const loadComments = createAction(ActionType.GET_COMMENTS, (comments) => ({
  payload: comments
}));

export const setGenres = createAction(ActionType.SET_GENRES, (genres) => ({
  payload: genres
}));

export const changeGenre = createAction(ActionType.CHANGE_GENRE, (activeGenre) => ({
  payload: activeGenre
}));

export const requireAuthorization = createAction(ActionType.REQUIRED_AUTHORIZATION, (status) => ({
  payload: status
}));

export const redirectToRoute = createAction(ActionType.REDIRECT_TO_ROUTE, (url) => ({
  payload: url
}));

export const loadFavorite = createAction(ActionType.GET_FAVORITE, (films) => ({
  payload: films
}));

export const addToFavoriteFilm = createAction(ActionType.ADD_TO_FAVORITE_FILM, (film) => ({
  payload: film
}));


export const resetFilm = createAction(ActionType.RESET_FILM);
export const showMore = createAction(ActionType.SHOW_MORE);
