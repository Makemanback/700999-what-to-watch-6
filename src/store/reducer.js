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
  filteredFilms: films.slice(0, 8),
  showedFilms: 8,
  genres: Object.values(Genre)
};

const filterFilms = (genre, allFilms) => {
  return genre === Genre.ALL_GENRES ?
    allFilms :
    allFilms.filter((film) => film.genre === genre);
};

const sliceFilms = (allFilms) => {
  return allFilms.length > 8 ? allFilms.slice(0, 8) : allFilms;
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE:
      return extend(state, {
        ...state,
        activeGenre: action.payload,
        filteredFilms: filterFilms(action.payload, state.allFilms)
      });

    case ActionType.GET_LIST:
      return extend(state, {
        ...state,
        allFilms: action.payload,
      });

    case ActionType.SHOW_MORE:
      const extraFilms = filterFilms(state.activeGenre, state.allFilms)
        .slice(state.showedFilms + 8);


      return extend(state, {
        ...state,
        filteredFilms: [...extraFilms],
        showedFilms: state.showedFilms + 8
      });
  }

  return state;
};


export {reducer};
