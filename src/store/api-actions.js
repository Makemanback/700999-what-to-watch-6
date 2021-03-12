import {ActionCreator} from "./action";
import {AuthorizationStatus, Genre} from "../const";

export default class ApiService {
  fetchFilmsList() {
    return (dispatch, _getState, api) =>
      api
        .get(`/films`)
        .then(({data}) => dispatch(ActionCreator.loadFilms(data)))
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
        .then(({data}) => dispatch(ActionCreator.getFilm(data)));
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
        .then(({data}) => dispatch(ActionCreator.loadComments(data)));
  }

  fetchPromoFilm() {
    return (dispatch, _getState, api) =>
      api
      .get(`/films/promo`)
      .then(({data}) => dispatch(ActionCreator.loadPromoFilm(data)));
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
          reviewId: review.id
        });

    delete adaptedReview.id;

    return adaptedReview;
  }
}
