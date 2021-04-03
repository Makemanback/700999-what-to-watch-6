import React from 'react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {render, screen} from '@testing-library/react';
import Logo from './logo';

test(`Should Logo render correctly`, () => {
  const history = createMemoryHistory();
  render(
      <Router history={history}>
        <Logo />
      </Router>
  );

  expect(screen.getByText(`T`)).toBeInTheDocument();

// эта строчка должна находить все текстовые узлы W
  expect(screen.getByText(`W`)).toBeInTheDocument();

  expect(screen.getByTestId(`logo-link`)).toBeInTheDocument();
});
