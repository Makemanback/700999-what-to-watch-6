import MockAdapter from 'axios-mock-adapter';
import {film} from './film';
import {ActionType} from '../action';
import {createAPI} from '../../api/api';

import ApiService from '../api-actions';
import {Path} from '../../const';

describe(`Reducer 'film' work correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(film(undefined, {}))
      .toEqual({
        promoFilm: null,
        currentFilm: null,
        currentFilmId: null,
        currentFilmComments: null});
  });

  it(`Reducer should reset film to initial state`, () => {
    const state = {
      promoFilm: null,
      currentFilm: {
        genre: `Drama`,
        released: 1984,
        description: `lorem impsum`,
        director: `Spielberg Stephen`,
        starring: `Tom Hank, John Travolta`,
        id: 1,
        image: `https://assets.htmlacademy.ru/intensives/javascript-3/film/preview/macbeth.jpg`,
        video: `https://assets.htmlacademy.ru/intensives/javascript-3/film/preview/macbeth.jpg`,
        title: `It`,
        runTime: 200,
        background: `#F1E9CE`,
        backgroundImg: `https://assets.htmlacademy.ru/intensives/javascript-3/film/preview/macbeth.jpg`,
        isFavorite: false,
        poster: `https://assets.htmlacademy.ru/intensives/javascript-3/film/preview/macbeth.jpg`,
        scoresCount: 22299,
        videoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
      },
      currentFilmId: null,
      currentFilmComments: null
    };

    const resetFilmAction = {
      type: ActionType.RESET_FILM,
      payload: null
    };

    expect(film(state, resetFilmAction))
      .toEqual({
        promoFilm: null,
        currentFilm: null,
        currentFilmId: null,
        currentFilmComments: null});
  }
  );
});

const api = createAPI(() => {});
const apiService = new ApiService();

describe(`Async operation work correctly`, () => {
  it(`Should make a correct API call to /film/:id`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();

    const id = 1;
    const filmLoader = apiService.fetchFilm(id);

    apiMock
      .onGet(Path.FILMS + id)
      .reply(200, [{fake: true}]);

    return filmLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
      });
  });

  it(`Should make a correct API call to /film/:id and return film's id`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();

    const id = 1;
    const filmIdLoader = apiService.fetchFilmId(id);

    apiMock
      .onGet(Path.FILMS + id)
      .reply(200, [{fake: true}]);

    return filmIdLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
      });
  });

  it(`Should make a correct API call to /comments/:id and return film's comments`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();

    const id = 1;
    const commentLoader = apiService.fetchFilmComments(id);

    apiMock
      .onGet(Path.COMMENTS + id)
      .reply(200, [{fake: true}]);

    return commentLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
      });
  });

  it(`Should make a correct API call to films/promo`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();

    const filmLoader = apiService.fetchPromoFilm();

    apiMock
      .onGet(Path.FILM_PROMO)
      .reply(200, [{fake: true}]);

    return filmLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
      });
  });

  it(`Should make a correct API call to change favorite film's status`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();

    const id = 1;
    let favoriteStatus = `/0`;
    let isFavorite = true;

    const changeFavoriteLoader = apiService.changeFavorite(isFavorite, id);

    apiMock
      .onPost(Path.FAVORITE + id + favoriteStatus, {isFavorite})
      .reply(200, [{fake: true}]);

    return changeFavoriteLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
      });
  });
});
