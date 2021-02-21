export const ActionType = {
  CHANGE_GENRE: `CHANGE_GENRE`,
  GET_LIST: `GET_LIST`
};

export const ActionCreator = {
  changeGenre: (genre) => ({
    type: ActionType.CHANGE_GENRE,
    payload: genre,
  }),
  getList: (list) => ({
    type: ActionType.GET_LIST,
    payload: list
  })
};
