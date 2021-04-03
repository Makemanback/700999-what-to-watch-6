import React from 'react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {render, screen} from '@testing-library/react';
import Main from './main';


test(`Should Main render correctly`, () => {
  const history = createMemoryHistory();
  const {container} = render(
      <Router history={history}>
        <Main />
      </Router>
  );

  expect(screen.getByTestId(`movie-card`)).toBeInTheDocument()
});
