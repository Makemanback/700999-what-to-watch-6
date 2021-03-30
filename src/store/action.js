import {createAction} from '@reduxjs/toolkit';

export const ActionType = {
  CHANGE_GENRE: `CHANGE_GENRE`,
  SHOW_MORE: `SHOW_MORE`,
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  LOAD_FILMS: `LOAD_FILMS`,
  REDIRECT_TO_ROUTE: `REDIRECT_TO_ROUTE`,
  SET_GENRES: `SET_GENRES`,
  GET_FILM: `GET_FILM`,
  GET_FILM_ID: `GET_FILM_ID`,
  GET_COMMENTS: `GET_COMMENTS`,
  GET_PROMO_FILM: `GET_PROMO_FILM`,
  RESET_FILM: `RESET_FILM`,
  GET_FAVORITE: `GET_FAVORITE`,
  ADD_TO_FAVORITE: `ADD_TO_FAVORITE`,
  REMOVE_FROM_FAVORITE: `REMOVE_FROM_FAVORITE`
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

export const removeFromFavorite = createAction(ActionType.REMOVE_FROM_FAVORITE, (film) => ({
  payload: film
}));

export const addToFavorite = createAction(ActionType.ADD_TO_FAVORITE, (film) => ({
  payload: film
}));



export const resetFilm = createAction(ActionType.RESET_FILM);
export const showMore = createAction(ActionType.SHOW_MORE);
