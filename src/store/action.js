export const ActionType = {
  CHANGE_GENRE: `CHANGE_GENRE`,
  GET_LIST: `GET_LIST`,
  SHOW_MORE: `SHOW_MORE`
};

export const ActionCreator = {
  changeGenre: (activeGenre) => ({
    type: ActionType.CHANGE_GENRE,
    payload: activeGenre,
  }),
  getList: (allFilms) => ({
    type: ActionType.GET_LIST,
    payload: allFilms
  }),
  showMore: () => ({
    type: ActionType.SHOW_MORE
  })
};
