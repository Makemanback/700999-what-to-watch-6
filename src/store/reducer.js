import {extend} from "../utils";
import {ActionType} from "./action";
import films from "../mocks/films";

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
  filteredFilms: films
};

const filterFilms = (payload) => {
  let {allFilms, filteredFilms} = initialState;
  if (payload === Genre.ALL_GENRES) {
    return allFilms;
  } else {
    filteredFilms = allFilms.filter((film) => {
      return film.genre === payload;
    });
    return filteredFilms;
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE:
      return extend(state, {
        activeGenre: action.payload,
        filteredFilms: filterFilms(action.payload)
      });

    case ActionType.GET_LIST:
      return extend(state, {
        allFilms: action.payload,
      });
  }

  return state;
};


export {reducer};
