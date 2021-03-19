import {createReducer} from '@reduxjs/toolkit';

import {setGenres} from '../action';

const initialState = {
  genres: [],
};

const genres = createReducer(initialState, (builder) => {
  builder.addCase(setGenres, (state, action) => {
    return {
      ...state,
      genres: action.payload,
    };
  });
});

export {genres};
