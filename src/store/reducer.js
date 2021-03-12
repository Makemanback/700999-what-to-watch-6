import {extend} from "../utils";
import {ActionType} from "./action";
import {FILMS_ON_SCREEN, Genre, AuthorizationStatus} from '../const';

const initialState = {
  promoFilm: null,
  activeGenre: Genre.ALL_GENRES,
  allFilms: [],
  filteredFilms: [],
  currentFilm: null,
  currentFilmComments: [],
  currentFilmId: null,
  filmsToShow: FILMS_ON_SCREEN,
  genres: [],
  authorizationStatus: AuthorizationStatus.AUTH,
  isDataLoaded: false,
  isFilmLoaded: false
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

    case ActionType.SET_GENRES:
      return extend(state, {
        ...state,
        genres: action.payload
      });

    case ActionType.GET_FILM:
      return extend(state, {
        ...state,
        currentFilm: action.payload,
        currentFilmId: action.payload.id,
        isFilmLoaded: true
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
        isDataLoaded: true
      });

    case ActionType.LOADING:
      return extend(state, {
        ...state,
        isDataLoaded: false
      });

    case ActionType.RESET_FILM:
      return extend(state, {
        ...state,
        isFilmLoaded: false,
        currentFilm: initialState.currentFilm
      });

    default:
      return state;
  }
};


export {reducer};
