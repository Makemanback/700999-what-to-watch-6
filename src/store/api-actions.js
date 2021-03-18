import {ActionCreator} from "./action";
import {AuthorizationStatus, Genre} from "../const";


export default class ApiService {
  fetchFilmsList() {
    return (dispatch, _getState, api) =>
      api
        .get(`/films`)
        .then(({data}) => data.map(ApiService.adaptToClient))
        .then((films) => dispatch(ActionCreator.loadFilms(films)))
        .then(({payload}) => {
          const genres = [...new Set(
              payload
          .map(({genre}) => genre)
          )];
          genres.unshift(Genre.ALL_GENRES);
          dispatch(ActionCreator.setGenres(genres));
        });
  }

  fetchFilm(id) {
    return (dispatch, _getState, api) =>
      api
        .get(`/films/${id}`)
        .then(({data}) => ApiService.adaptToClient(data))
        .then((film) => dispatch(ActionCreator.getFilm(film)))
        .catch(() => dispatch(ActionCreator.notFound()));
  }

  fetchFilmId(id) {
    return (dispatch, _getState, api) =>
      api
        .get(`/films/${id}`)
        .then(({data}) => dispatch(ActionCreator.getFilmId(data.id)));
  }

  fetchFilmComments(id) {
    return (dispatch, _getState, api) =>
      api
        .get(`/comments/${id}`)
        .then(({data}) => data.map(ApiService.adaptReviewToClient))
        .then((comments) => dispatch(ActionCreator.loadComments(comments)));
  }

  fetchPromoFilm() {
    return (dispatch, _getState, api) =>
      api
      .get(`/films/promo`)
      .then(({data}) => ApiService.adaptToClient(data))
      .then((film) => dispatch(ActionCreator.loadPromoFilm(film)));
  }

  checkAuth() {
    return (dispatch, _getState, api) => (
      api
        .get(`/login`)
        .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
        .catch(() => {})
    );
  }

  login({login: email, password}) {

    return (dispatch, _getState, api) => (
      api.post(`/login`, {email, password})
        .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
        .then(() => dispatch(ActionCreator.redirectToRoute(`/`)))
    );
  }

  pushComment(commentData) {
    const {id, comment, rating} = commentData;
    return (dispatch, _getState, api) => (
      api.post(`/comments/${id}`, {comment, rating})
        .then(({data}) => data.map(ApiService.adaptReviewToClient))
        .then((comments) => dispatch(ActionCreator.loadComments(comments)))
        .then(() => dispatch(ActionCreator.redirectToRoute(`/films/${id}/reviews`)))
    );
  }

  static adaptToClient(film) {

    const adaptedFilm = Object.assign(
        {},
        film,
        {
          image: film.preview_image,
          video: film.preview_video_link,
          title: film.name,
          runTime: film.run_time,
          background: film.background_color,
          backgroundImg: film.background_image,
          isFavorite: film.is_favorite,
          poster: film.poster_image,
          scoresCount: film.scores_count,
          videoLink: film.video_link
        });

    delete adaptedFilm.preview_image;
    delete adaptedFilm.preview_video_link;
    delete adaptedFilm.name;
    delete adaptedFilm.run_time;
    delete adaptedFilm.background_color;
    delete adaptedFilm.background_image;
    delete adaptedFilm.is_favorite;
    delete adaptedFilm.poster_image;
    delete adaptedFilm.scores_count;
    delete adaptedFilm.video_link;

    return adaptedFilm;
  }

  static adaptReviewToClient(review) {

    const adaptedReview = Object.assign(
        {},
        review,
        {
          reviewId: review.id,
        });

    delete adaptedReview.id;

    return adaptedReview;
  }

  // static adaptReviewToServer(review) {
  //   return Object.assign(
  //       {},
  //       review,
  //       {
  //         date: new Date().toISOString(),
  //       });
  // }
}
