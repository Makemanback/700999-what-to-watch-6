import {
  loadFilms,
  setGenres,
  getFilm,
  getFilmId,
  loadComments,
  loadPromoFilm,
  requireAuthorization,
  redirectToRoute,
  loadFavorite,
  addToFavoriteFilm
} from "./action";

import {AuthorizationStatus, Genre, Path} from "../const";
import browserHistory from '../browser-history';

export default class ApiService {
  fetchFilmsList() {
    return (dispatch, _getState, api) =>
      api
        .get(Path.FILMS)
        .then(({data}) => data.map(ApiService.adaptToClient))
        .then((films) => dispatch(loadFilms(films)))
        .then(({payload}) => {
          const genres = [...new Set(
              payload
          .map(({genre}) => genre)
          )];
          genres.unshift(Genre.ALL_GENRES);
          dispatch(setGenres(genres));
        });
  }


  fetchFavoriteFilms() {
    return (dispatch, _getState, api) =>
      api
      .get(Path.FAVORITE)
      .then(({data}) => data.map(ApiService.adaptToClient))
      .then((films) => dispatch(loadFavorite(films)));
  }

  fetchFilm(id) {
    return (dispatch, _getState, api) =>
      api
        .get(Path.FILMS + id)
        .then(({data}) => ApiService.adaptToClient(data))
        .then((film) => dispatch(getFilm(film)))
        .catch(() => browserHistory.push(Path.NOT_FOUND));
  }

  fetchFilmId(id) {
    return (dispatch, _getState, api) =>
      api
        .get(Path.FILMS + id)
        .then(({data}) => dispatch(getFilmId(data.id)));
  }

  fetchFilmComments(id) {
    return (dispatch, _getState, api) =>
      api
        .get(Path.COMMENTS + id)
        .then(({data}) => data.map(ApiService.adaptReviewToClient))
        .then((comments) => dispatch(loadComments(comments)));
  }

  fetchPromoFilm() {
    return (dispatch, _getState, api) =>
      api
      .get(Path.FILM_PROMO)
      .then(({data}) => ApiService.adaptToClient(data))
      .then((film) => dispatch(loadPromoFilm(film)));
  }

  checkAuth() {
    return (dispatch, _getState, api) => (
      api
        .get(Path.LOGIN)
        .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
        .catch(() => {})
    );
  }

  login({login: email, password}) {

    return (dispatch, _getState, api) => (
      api.post(Path.LOGIN, {email, password})
        .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
        .then(() => dispatch(redirectToRoute(Path.DEFAULT)))
    );
  }

  pushComment(commentData) {
    const {id, comment, rating} = commentData;
    return (dispatch, _getState, api) => (
      api.post(Path.COMMENTS + id, {comment, rating})
        .then(({data}) => data.map(ApiService.adaptReviewToClient))
        .then((comments) => dispatch(loadComments(comments)))
        .then(() => dispatch(redirectToRoute(Path.FILMS + id)))
    );
  }

  changeFavorite(isFavorite, id) {
    const route = Path.FAVORITE + id + `/${Number(!isFavorite)}`;

    return (dispatch, _getState, api) => (
      api.post(route, {isFavorite})
        .then(({data}) => ApiService.adaptToClient(data))
        .then((film) => dispatch(addToFavoriteFilm(film)))
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
}
