import React from 'react';
import {Router} from 'react-router-dom';
import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import * as redux from 'react-redux';
import configureStore from 'redux-mock-store';

import {AuthorizationStatus} from '../../const';

import MyList from './my-list';

const mockStore = configureStore({});

const favoriteFilms = [
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
    isFavorite: true,
    poster: `https://assets.htmlacademy.ru/intensives/javascript-3/film/poster/Macbeth.jpg`,
    scoresCount: 48798,
    videoLink: `http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4`
  },
];
describe(`Test 'MyList' component`, () => {
  test(`Should MyList receive favorite films`, () => {
    const store = mockStore({
      USER: {authorizationStatus: AuthorizationStatus.AUTH},
      ALL_FILMS: {favoriteFilms}
    });
    const history = createMemoryHistory();

    render(
        <redux.Provider store={store}>
          <Router history={history}>
            <MyList />
          </Router>
        </redux.Provider>
    );

    expect(screen.getByText(`Catalog`)).toBeInTheDocument();
    expect(screen.getByText(`My list`)).toBeInTheDocument();

    favoriteFilms.forEach(({isFavorite}) => {
      expect(isFavorite).toBe(true);
    });
  });
});
