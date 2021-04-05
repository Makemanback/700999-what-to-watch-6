import React from 'react';
import {Router} from 'react-router-dom';
import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import * as redux from 'react-redux';
import configureStore from 'redux-mock-store';

import ReviewForm from './review-form';

const mockStore = configureStore({});

const filmId = 1;

test(`Should ReviewForm render correctly`, () => {
  const history = createMemoryHistory();

  render(
      <redux.Provider store={mockStore({})}>
        <Router history={history}>
          <ReviewForm filmId={filmId} />
        </Router>
      </redux.Provider>
  );

  expect(screen.getByText(`Post`)).toBeInTheDocument();
  expect(screen.getByRole(`textbox`)).toBeInTheDocument();
});

