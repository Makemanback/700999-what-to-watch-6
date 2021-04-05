import React from 'react';
import {Router} from 'react-router-dom';
import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import userEvent from '@testing-library/user-event';
import * as redux from 'react-redux';
import configureStore from 'redux-mock-store';

import {AuthorizationStatus} from '../../const';

import MovieCardButtons from './movie-card-buttons';

const mockStore = configureStore({});

const filmId = 1;
const isFavorite = false;

describe(`Test 'MovieCardButtons' component`, () => {
  test(`Should MovieCardButtons render correctly when authorized`, () => {
    const store = mockStore({
      USER: {authorizationStatus: AuthorizationStatus.AUTH}
    });
    const history = createMemoryHistory();

    render(
        <redux.Provider store={store}>
          <Router history={history}>
            <MovieCardButtons filmId={filmId} isFavorite={isFavorite} />
          </Router>
        </redux.Provider>
    );

    userEvent.click(screen.getByTestId(`add-review`));
    expect(screen.getByText(`Play`)).toBeInTheDocument();
    expect(screen.getByText(`My list`)).toBeInTheDocument();

    expect(screen.getByText(`Add review`)).toBeInTheDocument();
    expect(screen.getAllByRole(`link`).length).toEqual(2);
  });

  test(`Should MovieCardButtons render correctly when not authorized`, () => {
    const store = mockStore({
      USER: {authorizationStatus: AuthorizationStatus.NO_AUTH}
    });
    const history = createMemoryHistory();

    render(
        <redux.Provider store={store}>
          <Router history={history}>
            <MovieCardButtons filmId={filmId} isFavorite={isFavorite} />
          </Router>
        </redux.Provider>
    );

    expect(screen.getByRole(`link`)).toBeInTheDocument();
  });
});
