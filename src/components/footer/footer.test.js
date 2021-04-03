import React from 'react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {render, screen} from '@testing-library/react';
import Footer from './footer';

test(`Should Footer render correctly`, () => {
  const history = createMemoryHistory();
  render(
      <Router history={history}>
        <Footer />
      </Router>
  );

  expect(screen.getByText(`© 2019 What to watch Ltd.`)).toBeInTheDocument();
});
