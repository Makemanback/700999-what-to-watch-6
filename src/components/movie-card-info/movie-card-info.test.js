import React from 'react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {render, screen} from '@testing-library/react';
import * as redux from 'react-redux';
import configureStore from 'redux-mock-store';

import {AuthorizationStatus} from '../../const';

import MovieCardInfo from './movie-card-info';

const mockStore = configureStore({});

const title = `Title`;
const genre = `Drama`;
const year = 1999;
const poster = `src`;
const filmId = 1;
const isFavorite = false;
test(`Should MovieCardInfo render correctly`, () => {
  const store = mockStore({
    USER: {authorizationStatus: AuthorizationStatus.AUTH}
  });

  const history = createMemoryHistory();
  render(
      <redux.Provider store={store}>
        <Router history={history}>
          <MovieCardInfo title={title} genre={genre} year={year} poster={poster} filmId={filmId} isFavorite={isFavorite} />
        </Router>
      </redux.Provider>
  );

  expect(screen.getByText(`${title}`)).toBeInTheDocument();
  expect(screen.getByText(`${genre}`)).toBeInTheDocument();
  expect(screen.getByText(`${year}`)).toBeInTheDocument();
});
