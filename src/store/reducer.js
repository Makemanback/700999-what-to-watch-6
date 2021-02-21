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
  genre: Genre.ALL_GENRES,
  list: films,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE:
      return extend(state, {
        genre: action.payload,
        list: films.filter((film) => film.genre === action.payload),
      });

    case ActionType.GET_LIST:
      return extend(state, {
        list: action.payload,
      });
  }

  return state;
};


export {reducer};
