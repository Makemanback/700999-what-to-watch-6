import Rating from "../components/rating/rating";

export const ActionType = {
  CHANGE_GENRE: `CHANGE_GENRE`,
  SHOW_MORE: `SHOW_MORE`,
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  LOAD_FILMS: `LOAD_FILMS`,
  REDIRECT_TO_ROUTE: `REDIRECT_TO_ROUTE`,
  SET_GENRES: `SET_GENRES`,
  GET_FILM: `GET_FILM`,
  GET_FILM_ID: `GET_FILM_ID`,
  GET_COMMENTS: `GET_COMMENTS`,
  GET_PROMO_FILM: `GET_PROMO_FILM`,
  LOADING: `LOADING`,
  RESET_FILM: `RESET_FILM`,
  NOT_FOUND: `NOT_FOUND`,
  POST_COMMENT: `POST_COMMENT`,
  SET_COMMENT_RATING: `SET_COMMENT_RATING`,
  SET_COMMENT_TEXT: `SET_COMMENT_TEXT`
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
  }),
  getFilm: (film) => ({
    type: ActionType.GET_FILM,
    payload: film
  }),
  getFilmId: (id) => ({
    type: ActionType.GET_FILM_ID,
    payload: id
  }),
  loadPromoFilm: (film) => ({
    type: ActionType.GET_PROMO_FILM,
    payload: film
  }),
  loadComments: (comments) => ({
    type: ActionType.GET_COMMENTS,
    payload: comments
  }),
  loading: () => ({
    type: ActionType.LOADING
  }),
  resetFilm: () => ({
    type: ActionType.RESET_FILM
  }),
  notFound: () => ({
    type: ActionType.NOT_FOUND
  }),
  postComment: (comment) => ({
    type: ActionType.POST_COMMENT,
    payload: comment
  }),
  setCommentRating: (rating) => ({
    type: ActionType.SET_COMMENT_RATING,
    payload: rating
  }),
  setCommentText: (text) => ({
    type: ActionType.SET_COMMENT_TEXT,
    payload: text
  })
};
