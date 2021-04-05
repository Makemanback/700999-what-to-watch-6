import React from 'react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {render, screen} from '@testing-library/react';
import Main from './main';

jest.mock(`../movie-card/movie-card.jsx`, () => function mockMovieCard() {
  return <div>moviecard</div>;
});
jest.mock(`../catalog/catalog.jsx`, () => function mockCatalog() {
  return <div>catalog</div>;
});
jest.mock(`../footer/footer.jsx`, () => function mockFooter() {
  return <div>footer</div>;
});

test(`Should Main render correctly`, () => {

  const history = createMemoryHistory();
  render(
      <Router history={history}>
        <Main />
      </Router>
  );

  expect(screen.getByText(`moviecard`)).toBeInTheDocument();
  expect(screen.getByText(`catalog`)).toBeInTheDocument();
  expect(screen.getByText(`footer`)).toBeInTheDocument();
});
