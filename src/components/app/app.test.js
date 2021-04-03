import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import * as redux from 'react-redux';
import configureStore from 'redux-mock-store';

import {AuthorizationStatus} from '../../const';

import App from './app';

const mockStore = configureStore({});

const mockFilms = [
  {
    description: `Macbeth, the Thane of Glamis, receives a prophecy from a trio of witches that one day he will become King of Scotland. Consumed by ambition and spurred to action by his wife, Macbeth murders his king and takes the throne for himself.`,
    rating: 3.3,
    director: `Justin Kurzel`,
    starring: [
      `Michael Fassbender`,
      `Marion Cotillard`,
      `Jack Madigan`
    ],
    genre: `Drama`,
    released: 2015,
    id: 1,
    image: `https://assets.htmlacademy.ru/intensives/javascript-3/film/preview/macbeth.jpg`,
    video: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    title: `Macbeth`,
    runTime: 113,
    background: `#F1E9CE`,
    backgroundImg: `https://assets.htmlacademy.ru/intensives/javascript-3/film/background/Macbeth.jpg`,
    isFavorite: false,
    poster: `https://assets.htmlacademy.ru/intensives/javascript-3/film/poster/Macbeth.jpg`,
    scoresCount: 48798,
    videoLink: `http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4`
  },
  {
    description: `Vicenarian Richard travels to Thailand and finds himself in possession of a strange map. Rumours state that it leads to a solitary beach paradise, a tropical bliss. Excited and intrigued, he sets out to find it.`,
    rating: 3.3,
    director: `Danny Boyle`,
    starring: [
      `Leonardo DiCaprio`,
      `Daniel York`,
      `Patcharawan Patarakijjanon`
    ],
    genre: `Adventure`,
    released: 2000,
    id: 2,
    image: `https://assets.htmlacademy.ru/intensives/javascript-3/film/preview/beach.jpg`,
    video: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    title: `Beach`,
    runTime: 119,
    background: `#EBC996`,
    backgroundImg: `https://assets.htmlacademy.ru/intensives/javascript-3/film/background/beach.jpg`,
    isFavorite: false,
    poster: `https://assets.htmlacademy.ru/intensives/javascript-3/film/poster/beach.jpg`,
    scoresCount: 207824,
    videoLink: `http://media.xiph.org/mango/tears_of_steel_1080p.webm`
  },
];

const mockFavoriteFilms = [
  {
    description: `Macbeth, the Thane of Glamis, receives a prophecy from a trio of witches that one day he will become King of Scotland. Consumed by ambition and spurred to action by his wife, Macbeth murders his king and takes the throne for himself.`,
    rating: 3.3,
    director: `Justin Kurzel`,
    starring: [
      `Michael Fassbender`,
      `Marion Cotillard`,
      `Jack Madigan`
    ],
    genre: `Drama`,
    released: 2015,
    id: 1,
    image: `https://assets.htmlacademy.ru/intensives/javascript-3/film/preview/macbeth.jpg`,
    video: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    title: `Macbeth`,
    runTime: 113,
    background: `#F1E9CE`,
    backgroundImg: `https://assets.htmlacademy.ru/intensives/javascript-3/film/background/Macbeth.jpg`,
    isFavorite: true,
    poster: `https://assets.htmlacademy.ru/intensives/javascript-3/film/poster/Macbeth.jpg`,
    scoresCount: 48798,
    videoLink: `http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4`
  },
  {
    description: `Vicenarian Richard travels to Thailand and finds himself in possession of a strange map. Rumours state that it leads to a solitary beach paradise, a tropical bliss. Excited and intrigued, he sets out to find it.`,
    rating: 3.3,
    director: `Danny Boyle`,
    starring: [
      `Leonardo DiCaprio`,
      `Daniel York`,
      `Patcharawan Patarakijjanon`
    ],
    genre: `Adventure`,
    released: 2000,
    id: 2,
    image: `https://assets.htmlacademy.ru/intensives/javascript-3/film/preview/beach.jpg`,
    video: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    title: `Beach`,
    runTime: 119,
    background: `#EBC996`,
    backgroundImg: `https://assets.htmlacademy.ru/intensives/javascript-3/film/background/beach.jpg`,
    isFavorite: true,
    poster: `https://assets.htmlacademy.ru/intensives/javascript-3/film/poster/beach.jpg`,
    scoresCount: 207824,
    videoLink: `http://media.xiph.org/mango/tears_of_steel_1080p.webm`
  },
];

const mockGenres = [
  `Drama`,
  `Comedy`,
  `Thriller`
];

describe(`Test routing`, () => {
  jest.spyOn(redux, `useSelector`);
  jest.spyOn(redux, `useDispatch`);

  it(`Render 'Main' when user navigate to '/' url`, () => {
    const history = createMemoryHistory();
    const store = mockStore({
      ALL_FILMS: {filmsToShow: 8, allFilms: mockFilms},
      FILM: {promoFilm: mockFilms[0]},
      GENRES: {genres: mockGenres},
      USER: {authorizationStatus: AuthorizationStatus.AUTH}
    });

    render(
        <redux.Provider store={store}>
          <Router history={history}>
            <App />
          </Router>
        </redux.Provider>
    );
  });

  it(`Render 'SignIn' when user navigate to '/login' url`, () => {
    const store = mockStore({
      ALL_FILMS: {allFilms: mockFilms},
      FILM: {promoFilm: mockFilms[0]},
      GENRES: {genres: mockGenres},
      USER: {authorizationStatus: AuthorizationStatus.AUTH}
    });

    const history = createMemoryHistory();
    history.push(`/login`);

    render(
        <redux.Provider store={store}>
          <Router history={history}>
            <App />
          </Router>
        </redux.Provider>
    );
  });

  it(`Render 'MyList' when user navigate to '/mylist' url`, () => {
    const store = mockStore({
      ALL_FILMS: {favoriteFilms: mockFavoriteFilms},
      USER: {authorizationStatus: AuthorizationStatus.AUTH}
    });

    const history = createMemoryHistory();
    history.push(`/mylist`);

    render(
        <redux.Provider store={store}>
          <Router history={history}>
            <App />
          </Router>
        </redux.Provider>
    );

    expect(screen.getByText(/My list/i)).toBeInTheDocument();
    expect(screen.getByText(/Catalog/i)).toBeInTheDocument();
  });

  it(`Render 'FilmContainer' when user navigate to '/films/:id' url`, () => {
    const store = mockStore({
      ALL_FILMS: {allFilms: mockFilms},
      FILM: {currentFilm: mockFilms[0]},
      USER: {authorizationStatus: AuthorizationStatus.AUTH}
    });

    const history = createMemoryHistory();
    history.push(`/films/1`);

    render(
        <redux.Provider store={store}>
          <Router history={history}>
            <App />
          </Router>
        </redux.Provider>
    );

    expect(screen.getByText(`${mockFilms[0].title}`)).toBeInTheDocument();
    expect(screen.getByText(`${mockFilms[0].genre}`)).toBeInTheDocument();
    expect(screen.getByText(`${mockFilms[0].released}`)).toBeInTheDocument();
  });

  it(`Render 'AddReview' when user navigate to '/films/:id/review' url`, () => {
    const store = mockStore({
      FILM: {currentFilm: mockFilms[0]},
      USER: {authorizationStatus: AuthorizationStatus.AUTH}
    });

    const history = createMemoryHistory();
    history.push(`/films/1/review`);

    render(
        <redux.Provider store={store}>
          <Router history={history}>
            <App />
          </Router>
        </redux.Provider>
    );

    expect(screen.getByText(/Add review/i)).toBeInTheDocument();
  });

  it(`Render 'Player' when user navigate to '/player' url`, () => {
    const store = mockStore({
      FILM: {promoFilm: mockFilms[0], currentFilm: mockFilms[1]},
      USER: {authorizationStatus: AuthorizationStatus.AUTH}
    });
    const history = createMemoryHistory();
    history.push(`/player/1`);

    render(
        <redux.Provider store={store}>
          <Router history={history}>
            <App />
          </Router>
        </redux.Provider>
    );

    expect(screen.getByText(/Toggler/i)).toBeInTheDocument();
    expect(screen.getByText(/Play/i)).toBeInTheDocument();
    expect(screen.getByText(/Transpotting/i)).toBeInTheDocument();
    expect(screen.getByText(/Full screen/i)).toBeInTheDocument();
  });

  it(`Render 'NotFound' when user navigate to /not-found route`, () => {
    const history = createMemoryHistory();
    history.push(`/not-found`);

    render(
        <redux.Provider store={mockStore({})}>
          <Router history={history}>
            <App />
          </Router>
        </redux.Provider>
    );

    expect(screen.getByText(`Not found`)).toBeInTheDocument();
    expect(screen.getByText(`Go to the main page`)).toBeInTheDocument();
  });
});
