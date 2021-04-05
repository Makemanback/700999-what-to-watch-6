import React from 'react';
import {Router} from 'react-router-dom';
import {render} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import * as redux from 'react-redux';
import configureStore from 'redux-mock-store';

import {AuthorizationStatus} from '../../const';

import FilmContainer from './film-container';

const mockStore = configureStore({});

const currentFilm = {
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
};

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
    id: 2,
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
    id: 3,
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
  }
];

const currentFilmComments = [
  {
    user: {
      id: 19,
      name: `Christina`
    },
    rating: 7.8,
    comment: `This movie really touched my heart, it really is the best movie of the year and everyone should see this masterpiece.`,
    date: `2021-03-04T08:04:28.658Z`,
    reviewId: 3
  },
  {
    user: {
      id: 20,
      name: `Christina`
    },
    rating: 7.8,
    comment: `This movie really touched my heart, it really is the best movie of the year and everyone should see this masterpiece.`,
    date: `2021-03-04T08:04:28.658Z`,
    reviewId: 5
  }
];

test(`Should FilmContainer render correctly`, () => {
  const store = mockStore({
    ALL_FILMS: {allFilms: mockFilms},
    FILM: {currentFilm, currentFilmComments},
    USER: {authorizationStatus: AuthorizationStatus.AUTH}
  });
  const history = createMemoryHistory();

  const {container} = render(
      <redux.Provider store={store}>
        <Router history={history}>
          <FilmContainer />
        </Router>
      </redux.Provider>
  );

  expect(container).toMatchSnapshot();
});

