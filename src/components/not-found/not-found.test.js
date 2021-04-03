import React from 'react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {screen, render} from '@testing-library/react';
import NotFound from './not-found';

test(`Should NotFound render correctly`, () => {
  const history = createMemoryHistory();

  render(
      <Router history={history}>
        <NotFound />
      </Router>
  );

  expect(screen.getByText(/Not found/i)).toBeInTheDocument();
  expect(screen.getByText(/Go to the main page/i)).toBeInTheDocument();
});
