import {extend} from "../utils";
import {ActionType} from "./action";
import {FILMS_ON_SCREEN, Genre, AuthorizationStatus} from '../const';

const initialState = {
  promoFilm: {},
  activeGenre: Genre.ALL_GENRES,
  initialGenre: Genre.ALL_GENRES,
  allFilms: [],
  filteredFilms: [],
  currentFilm: {},
  currentFilmComments: [],
  filmsToShow: FILMS_ON_SCREEN,
  genres: [],
  // authorizationStatus: AuthorizationStatus.NO_AUTH,
  authorizationStatus: AuthorizationStatus.AUTH,
  isDataLoaded: false,
  currentFilmId: 1
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
        isDataLoaded: true,
      });

    case ActionType.GET_FILM_ID:
      return extend(state, {
        ...state,
        currentFilmComments: action.payload,
        currentFilmId: action.payload,
        isDataLoaded: true
      });

    case ActionType.GET_COMMENTS:
      return extend(state, {
        ...state,
        currentFilmComments: action.payload,
        currentFilmId: action.payload.id,
        isDataLoaded: true
      });

    case ActionType.GET_PROMO_FILM:
      return extend(state, {
        ...state,
        promoFilm: action.payload,
        isDataLoaded: true
      });
    default:
      return state;
  }
};


export {reducer};
