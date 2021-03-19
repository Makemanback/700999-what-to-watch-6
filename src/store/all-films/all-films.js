import {createReducer} from '@reduxjs/toolkit';

import {changeGenre, loadFilms, showMore} from '../action';
import {Genre, FILMS_ON_SCREEN} from '../../const';

const initialState = {
  activeGenre: Genre.ALL_GENRES,
  filmsToShow: FILMS_ON_SCREEN,
  allFilms: null,
  filteredFilms: [],
};

const filterFilms = (genre, allFilms) => {
  return genre === Genre.ALL_GENRES ?
    allFilms :
    allFilms.filter((film) => film.genre === genre);
};

const allFilms = createReducer(initialState, (builder) => {
  builder.addCase(loadFilms, (state, action) => {
    return {
      ...state,
      allFilms: action.payload,
      filteredFilms: action.payload,
    };
  });
  builder.addCase(changeGenre, (state, action) => {
    return {
      ...state,
      activeGenre: action.payload,
      filteredFilms: filterFilms(action.payload, state.allFilms),
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
