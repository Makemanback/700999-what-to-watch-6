import {createReducer} from '@reduxjs/toolkit';

import {addToFavoriteFilm, removeFromFavoriteFilm, getFilm, getFilmId, loadComments, loadPromoFilm, resetFilm} from '../action';

const initialState = {
  promoFilm: null,
  currentFilm: null,
  currentFilmId: null,
  currentFilmComments: null,
};

const chose = (currentFilm, promoFilm) => {
  if (!currentFilm) {
    return promoFilm
  } else {
    return currentFilm
  }
}

const film = createReducer(initialState, (builder) => {
  builder.addCase(getFilm, (state, action) => {
    return {
      ...state,
      currentFilm: action.payload,
      currentFilmId: action.payload.id,
    };
  });
  builder.addCase(getFilmId, (state, action) => {
    return {
      ...state,
      currentFilmId: action.payload,
    };
  });
  builder.addCase(loadComments, (state, action) => {
    return {
      ...state,
      currentFilmComments: action.payload,
    };
  });
  builder.addCase(loadPromoFilm, (state, action) => {
    return {
      ...state,
      promoFilm: action.payload,
    };
  });
  builder.addCase(resetFilm, (state) => {
    return {
      ...state,
      currentFilm: initialState.currentFilm
    };
  });
  builder.addCase(addToFavoriteFilm, (state, action) => {
    console.log(action.payload)
    return {
      ...state,
      promoFilm: action.payload,
      currentFilm: action.payload
    };
  });
  // builder.addCase(addToFavoriteCurrentFilm, (state, action) => {
  //   return {
  //     ...state,
  //     currentFilm: action.payload,
  //   };
  // });
});


export {film};
