import React from 'react';
import {Router} from 'react-router-dom';
import {render} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import * as redux from 'react-redux';
import configureStore from 'redux-mock-store';

import GenresList from './genres-list';

const mockStore = configureStore({});

const genres = [`Drama`, `Horror`, `Comedy`];

test(`Should GenresList render correctly`, () => {
  const store = mockStore({
    GENRES: {genres},
  });
  const history = createMemoryHistory();

  const {container} = render(
      <redux.Provider store={store}>
        <Router history={history}>
          <GenresList />
        </Router>
      </redux.Provider>
  );

  expect(container).toMatchSnapshot();
});

