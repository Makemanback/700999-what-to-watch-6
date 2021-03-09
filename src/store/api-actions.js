import {ActionCreator} from "./action";
import {AuthorizationStatus} from "../const";

export default class ApiService {
  fetchFilmsList() {
    return (dispatch, _getState, api) =>
      api
        .get(`/films`)
        .then(({data}) => dispatch(ActionCreator.loadFilms(data)))
        .then(({payload}) => {
          const genres = new Set(
              payload
              .map(({genre}) => genre)
          );
          dispatch(ActionCreator.setGenres(genres));
        });
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
          rating: {
            score: film.rating,
          },
          runTime: film.run_time,
        });

    delete adaptedFilm.preview_image;
    delete adaptedFilm.preview_video_link;
    delete adaptedFilm.name;
    delete adaptedFilm.rating;
    delete adaptedFilm.run_time;

    return adaptedFilm;
  }
}