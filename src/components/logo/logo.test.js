import React from 'react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {render} from '@testing-library/react';
import Logo from './logo';

test(`Should Logo render correctly`, () => {
  const history = createMemoryHistory();
  const {container} = render(
      <Router history={history}>
        <Logo />
      </Router>
  );

  expect(container).toMatchSnapshot();
});
