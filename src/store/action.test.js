import {
  ActionType,
  loadFilms,
  getFilm,
  getFilmId,
  loadPromoFilm,
  loadComments,
  setGenres,
  changeGenre,
  requireAuthorization,
  redirectToRoute,
  loadFavorite,
  resetFilm,
  showMore
} from './action';

describe(`Action creators work correctly`, () => {

  it(`Action creator for load films returns action with array of the films`, () => {
    const films = [
      {
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
    ]

    const expectedAction = {
      type: ActionType.LOAD_FILMS,
      payload: films
    };

    expect(loadFilms(films)).toEqual(expectedAction)
  });

  it(`Action creator for get film returns action with an object of the film`, () => {
    const film = {
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
      }

    const expectedAction = {
      type: ActionType.GET_FILM,
      payload: film
    };

    expect(getFilm(film)).toEqual(expectedAction)
  });

  it(`Action creator for get film id returns action with an id of the film`, () => {
    const id = 1;

    const expectedAction = {
      type: ActionType.GET_FILM_ID,
      payload: 1
    };

    expect(getFilmId(id)).toEqual(expectedAction)
  });

  it(`Action creator for get film returns action with an object of the promo film`, () => {
    const promoFilm = {
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
      }

    const expectedAction = {
      type: ActionType.GET_PROMO_FILM,
      payload: promoFilm
    };

    expect(loadPromoFilm(promoFilm)).toEqual(expectedAction)
  });

  it(`Action creator for reset film returns action with undefined payload`, () => {
    const expectedAction = {
      type: ActionType.RESET_FILM,
    };

    expect(resetFilm()).toEqual(expectedAction);
  });
});
