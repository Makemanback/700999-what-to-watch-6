import {extend} from "../utils";
import {ActionType} from "./action";
import {FILMS_ON_SCREEN, Genre, AuthorizationStatus} from '../const';

const initialState = {
  activeGenre: Genre.ALL_GENRES,
  allFilms: [],
  filteredFilms: [],
  filmsToShow: FILMS_ON_SCREEN,
  genres: Object.values(Genre),
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  // authorizationStatus: AuthorizationStatus.AUTH,
  isDataLoaded: false
};


const filterFilms = (genre, allFilms) => {
  return genre === Genre.ALL_GENRES ?
    allFilms :
    allFilms.filter((film) => film.genre === genre);
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_FILMS:
      return extend(state, {
        ...state,
        allFilms: action.payload,
        filteredFilms: action.payload,
        isDataLoaded: true
      });

    case ActionType.CHANGE_GENRE:
      return extend(state, {
        ...state,
        activeGenre: action.payload,
        filteredFilms: filterFilms(action.payload, state.allFilms),
        filmsToShow: FILMS_ON_SCREEN
      });

    case ActionType.GET_LIST:
      return extend(state, {
        ...state,
        allFilms: action.payload,
      });

    case ActionType.SHOW_MORE:
      return extend(state, {
        ...state,
        filmsToShow: state.filmsToShow + FILMS_ON_SCREEN
      });

    case ActionType.REQUIRED_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.payload,
      };

    default:
      return state;
  }
};


export {reducer};
