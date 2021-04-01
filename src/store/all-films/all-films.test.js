import MockAdapter from 'axios-mock-adapter';
import {allFilms} from './all-films';
import {showMore, ActionType, setGenres} from '../action';
import {createAPI} from '../../api/api';

import ApiService from '../api-actions';
import {Path} from '../../const';
import { film } from '../film/film';

const films = [
  {
    description: 'Macbeth, the Thane of Glamis, receives a prophecy from a trio of witches that one day he will become King of Scotland. Consumed by ambition and spurred to action by his wife, Macbeth murders his king and takes the throne for himself.',
    rating: 3.3,
    director: 'Justin Kurzel',
    starring: [
      'Michael Fassbender',
      'Marion Cotillard',
      'Jack Madigan'
    ],
    genre: 'Drama',
    released: 2015,
    id: 1,
    image: 'https://assets.htmlacademy.ru/intensives/javascript-3/film/preview/macbeth.jpg',
    video: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
    title: 'Macbeth',
    runTime: 113,
    background: '#F1E9CE',
    backgroundImg: 'https://assets.htmlacademy.ru/intensives/javascript-3/film/background/Macbeth.jpg',
    isFavorite: false,
    poster: 'https://assets.htmlacademy.ru/intensives/javascript-3/film/poster/Macbeth.jpg',
    scoresCount: 48798,
    videoLink: 'http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4'
  },
  {
    description: 'Vicenarian Richard travels to Thailand and finds himself in possession of a strange map. Rumours state that it leads to a solitary beach paradise, a tropical bliss. Excited and intrigued, he sets out to find it.',
    rating: 3.3,
    director: 'Danny Boyle',
    starring: [
      'Leonardo DiCaprio',
      'Daniel York',
      'Patcharawan Patarakijjanon'
    ],
    genre: 'Adventure',
    released: 2000,
    id: 2,
    image: 'https://assets.htmlacademy.ru/intensives/javascript-3/film/preview/beach.jpg',
    video: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
    title: 'Beach',
    runTime: 119,
    background: '#EBC996',
    backgroundImg: 'https://assets.htmlacademy.ru/intensives/javascript-3/film/background/beach.jpg',
    isFavorite: false,
    poster: 'https://assets.htmlacademy.ru/intensives/javascript-3/film/poster/beach.jpg',
    scoresCount: 207824,
    videoLink: 'http://media.xiph.org/mango/tears_of_steel_1080p.webm'
  },
];

describe(`Reducer 'all-films' work correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(allFilms(undefined, {}))
      .toEqual({
        activeGenre: `All genres`,
        filmsToShow: 8,
        allFilms: null,
        favoriteFilms: []});
  });

  it(`Reducer should increment films to show to 8 each time`, () => {
    const state = {
      activeGenre: `All genres`,
      filmsToShow: 8,
      allFilms: null,
      favoriteFilms: []
    }

    expect(allFilms(state, showMore()))
      .toEqual({
        activeGenre: `All genres`,
        filmsToShow: 16,
        allFilms: null,
        favoriteFilms: []
      });
  });

  it(`Reducer should change active genre to given value`, () => {
    const state = {
      activeGenre: `All genres`,
      filmsToShow: 8,
      allFilms: null,
      favoriteFilms: []
    }

    const changeGenreAction = {
      type: ActionType.CHANGE_GENRE,
      payload: `Drama`
    };

    expect(allFilms(state, changeGenreAction))
      .toEqual({
        activeGenre: `Drama`,
        filmsToShow: 8,
        allFilms: null,
        favoriteFilms: []
      });
  });

  it(`Reducer should update films by load films`, () => {
    const state = {
      activeGenre: `All genres`,
      filmsToShow: 8,
      allFilms: null,
      favoriteFilms: []
    };

    const loadFilmsAction = {
      type: ActionType.LOAD_FILMS,
      payload: films
    };

    expect(allFilms(state, loadFilmsAction))
      .toEqual({
        activeGenre: `All genres`,
        filmsToShow: 8,
        allFilms: films,
        favoriteFilms: []});
  });
})


const api = createAPI(() => {});
const apiService = new ApiService();

describe(`Async operation work correctly`, () => {
  it(`Should make a correct API call to /films`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const filmLoader = apiService.fetchFilmsList();

    const fakeGenres = [
      `Drama`,
      `Comedy`,
      `Horror`
    ];

    apiMock
      .onGet(Path.FILMS)
      .reply(200, films);

    return filmLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_FILMS,
          payload: films,
        });
      })
      .then((data) =>console.log(data))
      // .then(({genre}) => {
      //   const genres = [...new Set(
      //     genre
      //   .map((genre) => genre)
      //   )];
      //   genres.unshift(Genre.ALL_GENRES);
      //   dispatch(setGenres(genres));
      // });
  });

  it(`Should make a correct API call to /favorite`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const favoriteFilmLoader = apiService.fetchFavoriteFilms();

    apiMock
      .onGet(Path.FAVORITE)
      .reply(200, [{fake: true}]);

    return favoriteFilmLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.GET_FAVORITE,
          payload: [{fake: true}],
        });
      });
  });
});
