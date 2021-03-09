export const ActionType = {
  CHANGE_GENRE: `CHANGE_GENRE`,
  GET_LIST: `GET_LIST`,
  SHOW_MORE: `SHOW_MORE`,
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  LOAD_FILMS: `LOAD_FILMS`,
  REDIRECT_TO_ROUTE: `REDIRECT_TO_ROUTE`,
  SET_GENRES: `SET_GENRES`,
};

export const ActionCreator = {
  loadFilms: (films) => ({
    type: ActionType.LOAD_FILMS,
    payload: films
  }),
  changeGenre: (activeGenre) => ({
    type: ActionType.CHANGE_GENRE,
    payload: activeGenre,
  }),
  getList: (allFilms) => ({
    type: ActionType.GET_LIST,
    payload: allFilms,
  }),
  showMore: () => ({
    type: ActionType.SHOW_MORE,
  }),
  requireAuthorization: (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status,
  }),
  redirectToRoute: (url) => ({
    type: ActionType.REDIRECT_TO_ROUTE,
    payload: url,
  }),
  setGenres: (genres) => ({
    type: ActionType.SET_GENRES,
    payload: genres
  })
};
