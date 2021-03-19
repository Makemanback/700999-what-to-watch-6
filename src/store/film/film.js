import {ActionType} from '../action';

const initialState = {
  promoFilm: null,
  currentFilmComments: null,
  currentFilm: null,
  currentFilmId: null,
};

const film = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_FILM:
      return extend(state, {
        ...state,
        currentFilm: action.payload,
        currentFilmId: action.payload.id,
      });

    case ActionType.GET_FILM_ID:
      return extend(state, {
        ...state,
        currentFilmId: action.payload,
      });

    case ActionType.GET_COMMENTS:
      return extend(state, {
        ...state,
        currentFilmComments: action.payload,
      });

    case ActionType.GET_PROMO_FILM:
      return extend(state, {
        ...state,
        promoFilm: action.payload,
      });

    case ActionType.RESET_FILM:
      return extend(state, {
        ...state,
        currentFilm: initialState.currentFilm
      });
    }
}

export {film};
