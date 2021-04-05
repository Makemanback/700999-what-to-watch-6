import React from 'react';
import {Router} from 'react-router-dom';
import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import * as redux from 'react-redux';
import configureStore from 'redux-mock-store';

import {AuthorizationStatus} from '../../const';

import AddReview from './add-review';

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

test(`Should AddReview render correctly`, () => {
  const store = mockStore({
    FILM: {currentFilm},
    USER: {authorizationStatus: AuthorizationStatus.AUTH}
  });
  const history = createMemoryHistory();

  render(
      <redux.Provider store={store}>
        <Router history={history}>
          <AddReview />
        </Router>
      </redux.Provider>
  );

  expect(screen.getByText(`WTW`)).toBeInTheDocument();
  expect(screen.getByText(`Add review`)).toBeInTheDocument();
});

