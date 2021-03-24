import {createSelector} from 'reselect';

import {Genre} from '../../const';

const getAllFilms = (state) => state.allFilms;
const getActiveGenre = (state) => state.activeGenre;

export const getFilteredFilms = createSelector(
    [getAllFilms, getActiveGenre],
    (allFilms, genre) => {
      return genre === Genre.ALL_GENRES ?
        allFilms :
        allFilms.filter((film) => film.genre === genre);
    }
);

