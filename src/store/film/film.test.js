import {film} from './film';
import {resetFilm, ActionType} from '../action';

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
    }

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


})
