import {ActionCreator} from "./action";
import {AuthorizationStatus} from "../const";

const _defineProperty2 = (obj, key, value) => {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
};

const _defineProperty = (obj, key, value) => {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

export default class ApiService {
  constructor() {
    _defineProperty2(this, `checkAuth`, () => (dispatch, _getState, api) =>
      api
        .get(`/login`)
        .then(() =>
          dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH))
        )
        .catch(() => {})
    );

    _defineProperty2(
        this,
        `login`,
        ({login: email, password}) => (dispatch, _getState, api) =>
          api
          .post(`/login`, {
            email,
            password
          })
          .then(() =>
            dispatch(
                ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)
            )
          )
    );

    _defineProperty(this, `fetchFilmsList`, () => (dispatch, _getState, api) =>
      api
        .get(`/films`)
        .then(({data}) => dispatch(ActionCreator.loadFilms(data)))
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

// export const fetchFilmsList = () => (dispatch, _getState, api) => (
//   api.get(`/films`)
//     .then(({data}) => dispatch(ActionCreator.loadFilms(data)))
// )

// export const checkAuth = () => (dispatch, _getState, api) => (
//   api.get(`/login`)
//   .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
//   .catch(() => {})
// )

// export const login = ({login: email, password}) => (dispatch, _getState, api) => (
//   api.post(`/login`, {email, password})
//     .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
// );
