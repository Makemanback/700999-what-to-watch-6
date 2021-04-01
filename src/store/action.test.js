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
    ];

    const expectedAction = {
      type: ActionType.LOAD_FILMS,
      payload: films
    };

    expect(loadFilms(films)).toEqual(expectedAction);
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
    };

    const expectedAction = {
      type: ActionType.GET_FILM,
      payload: film
    };

    expect(getFilm(film)).toEqual(expectedAction);
  });

  it(`Action creator for get film id returns action with an id of the film`, () => {
    const id = 1;

    const expectedAction = {
      type: ActionType.GET_FILM_ID,
      payload: 1
    };

    expect(getFilmId(id)).toEqual(expectedAction);
  });

  it(`Action creator for load promo film returns action with an object of the promo film`, () => {
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
    };

    const expectedAction = {
      type: ActionType.GET_PROMO_FILM,
      payload: promoFilm
    };

    expect(loadPromoFilm(promoFilm)).toEqual(expectedAction);
  });

  it(`Action creator for load comments returns action with an array of the film's comments`, () => {
    const comments = [
      {
        user: `user`,
        id:	13,
        name:	`Zak`,
        rating:	1.4,
        comment:	`This movie is just plain bad. There must be some big payola going round this awards season. Badly written, average acting at best, all the characters are unrelatable and inlikeable. 2 hours of my life wasted.`,
        date:	`2021-03-07T08:04:28.658Z`
      }
    ];

    const expectedAction = {
      type: ActionType.GET_COMMENTS,
      payload: comments
    };

    expect(loadComments(comments)).toEqual(expectedAction);
  });

  it(`Action creator for set genres returns action with an array of the films genres`, () => {
    const genres = [
      `Drama`,
      `Comedy`,
      `Thriller`
    ];

    const expectedAction = {
      type: ActionType.SET_GENRES,
      payload: genres
    };

    expect(setGenres(genres)).toEqual(expectedAction);
  });

  it(`Action creator for change genre returns action with new active genre`, () => {
    const genre = `Drama`;

    const expectedAction = {
      type: ActionType.CHANGE_GENRE,
      payload: genre
    };

    expect(changeGenre(genre)).toEqual(expectedAction);
  });

  it(`Action creator for required authorization returns action with the authorization status`, () => {
    const authorizationStatus = `AUTH`;

    const expectedAction = {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: authorizationStatus
    };

    expect(requireAuthorization(authorizationStatus)).toEqual(expectedAction);
  });

  it(`Action creator for redirect to route returns action with url of the route`, () => {
    const url = `/`;

    const expectedAction = {
      type: ActionType.REDIRECT_TO_ROUTE,
      payload: url
    };

    expect(redirectToRoute(url)).toEqual(expectedAction);
  });

  it(`Action creator for load favorite returns action with array of the favorite films`, () => {
    const favoriteFilms = [
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
        isFavorite: true,
        poster: `https://assets.htmlacademy.ru/intensives/javascript-3/film/preview/macbeth.jpg`,
        scoresCount: 22299,
        videoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
      }
    ]

    const expectedAction = {
      type: ActionType.GET_FAVORITE,
      payload: favoriteFilms
    };

    expect(loadFavorite(favoriteFilms)).toEqual(expectedAction);
  });

  it(`Action creator for show more returns action with null payload`, () => {

    const expectedAction = {
      type: ActionType.SHOW_MORE,
    };

    expect(showMore()).toEqual(expectedAction);
  });

  it(`Action creator for reset film returns action with null payload`, () => {
    const expectedAction = {
      type: ActionType.RESET_FILM,
    };

    expect(resetFilm()).toEqual(expectedAction);
  });
});
