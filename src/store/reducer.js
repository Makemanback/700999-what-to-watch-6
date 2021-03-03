import {extend} from "../utils";
import {ActionType} from "./action";
import films from "../mocks/films";

const FILMS_ON_SCREEN = 8;

const Genre = {
  ALL_GENRES: `All genres`,
  COMEDIES: `Comedies`,
  CRIME: `Crime`,
  DOCUMENTARY: `Documentary`,
  DRAMAS: `Dramas`,
  HORROR: `Horror`,
  KIDS_FAMILY: `Kids & Family`,
  ROMANCE: `Romance`,
  SCI_FI: `Sci-Fi`,
  THRILLERS: `Thrillers`
};

const initialState = {
  activeGenre: Genre.ALL_GENRES,
  allFilms: films,
  filteredFilms: films,
  showedFilms: FILMS_ON_SCREEN,
  genres: Object.values(Genre)
};

const filterFilms = (genre, allFilms) => {
  return genre === Genre.ALL_GENRES ?
    allFilms :
    allFilms.filter((film) => film.genre === genre);
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE:
      return extend(state, {
        ...state,
        activeGenre: action.payload,
        filteredFilms: filterFilms(action.payload, state.allFilms),
        showedFilms: FILMS_ON_SCREEN
      });

    case ActionType.GET_LIST:
      return extend(state, {
        ...state,
        allFilms: action.payload,
      });

    case ActionType.SHOW_MORE:
      return extend(state, {
        ...state,
        showedFilms: state.showedFilms + FILMS_ON_SCREEN
      });
  }

  return state;
};


export {reducer};
