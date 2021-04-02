import {combineReducers} from '@reduxjs/toolkit';

import {user} from './user/user';
import {allFilms} from './all-films/all-films';
import {film} from './film/film';
import {genres} from './genres/genres';

export const NameSpace = {
  USER: `USER`,
  ALL_FILMS: `ALL_FILMS`,
  FILM: `FILM`,
  GENRES: `GENRES`,
};

export default combineReducers({
  [NameSpace.USER]: user,
  [NameSpace.ALL_FILMS]: allFilms,
  [NameSpace.FILM]: film,
  [NameSpace.GENRES]: genres,
});
