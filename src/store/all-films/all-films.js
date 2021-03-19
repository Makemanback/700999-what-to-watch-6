import {ActionType} from '../action';
import {Genre, FILMS_ON_SCREEN} from '../../const';

const initialState = {
  activeGenre: Genre.ALL_GENRES,
  filmsToShow: FILMS_ON_SCREEN,
  allFilms: null,
  filteredFilms: [],
};

const allFilms = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_FILMS:
      return extend(state, {
        ...state,
        allFilms: action.payload,
        filteredFilms: action.payload,
      });

      case ActionType.CHANGE_GENRE:
        return extend(state, {
          ...state,
          activeGenre: action.payload,
          filteredFilms: filterFilms(action.payload, state.allFilms),
          filmsToShow: FILMS_ON_SCREEN
        });

      case ActionType.SHOW_MORE:
        return extend(state, {
          ...state,
          filmsToShow: state.filmsToShow + FILMS_ON_SCREEN
        });
    }
}

export {allFilms};
