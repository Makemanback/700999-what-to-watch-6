import {createReducer} from '@reduxjs/toolkit';

import {changeGenre, loadFavorite, loadFilms, showMore} from '../action';
import {Genre, FILMS_ON_SCREEN} from '../../const';

const initialState = {
  activeGenre: Genre.ALL_GENRES,
  filmsToShow: FILMS_ON_SCREEN,
  allFilms: null
};

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
