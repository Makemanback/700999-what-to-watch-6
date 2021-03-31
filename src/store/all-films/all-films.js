import {createReducer} from '@reduxjs/toolkit';

import {changeGenre, loadFavorite, loadFilms, showMore, addToFavorite, removeFromFavorite} from '../action';
import {Genre, FILMS_ON_SCREEN} from '../../const';

const initialState = {
  activeGenre: Genre.ALL_GENRES,
  filmsToShow: FILMS_ON_SCREEN,
  allFilms: null,
  favoriteFilms: []
};

const removeFilm = (favoriteFilms, currentFilm) => {

  const currentFilmIndex = favoriteFilms.findIndex((film) => film.id === currentFilm.id);

  return favoriteFilms = [
    ...favoriteFilms.slice(0, currentFilmIndex),
    ...favoriteFilms.slice(currentFilmIndex + 1),
  ]
}
const allFilms = createReducer(initialState, (builder) => {
  builder.addCase(loadFilms, (state, action) => {
    return {
      ...state,
      allFilms: action.payload,
    };
  });
  builder.addCase(loadFavorite, (state, action) => {
    return {
      ...state,
      favoriteFilms: action.payload
    };
  });
  // builder.addCase(addToFavorite, (state, action) => {
  //   return {
  //     ...state,
  //     favoriteFilms: [...state.favoriteFilms, action.payload]
  //   };
  // });
  // builder.addCase(removeFromFavorite, (state, action) => {
  //   return {
  //     ...state,
  //     favoriteFilms: removeFilm(state.favoriteFilms, action.payload)
  //   };
  // });
  builder.addCase(changeGenre, (state, action) => {
    return {
      ...state,
      activeGenre: action.payload,
      filmsToShow: FILMS_ON_SCREEN
    };
  });
  builder.addCase(showMore, (state) => {
    return {
      ...state,
      filmsToShow: state.filmsToShow + FILMS_ON_SCREEN
    };
  });
});

export {allFilms};
