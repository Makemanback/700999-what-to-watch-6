import {ActionType} from '../action';

const initialState = {
  genres: [],
};

const genres = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_GENRES:
      return extend(state, {
        ...state,
        genres: action.payload
      });
  }

  return state;
};

export {genres};
