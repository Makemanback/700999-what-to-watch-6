import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import * as redux from 'react-redux';
import configureStore from 'redux-mock-store';

import {AuthorizationStatus} from '../../const';

import UserBlock from './user-block';

const mockStore = configureStore({});
test(`Should UserBlock render correctly`, () => {

  const store = mockStore({
    USER: {authorizationStatus: AuthorizationStatus.AUTH}
  })

  const history = createMemoryHistory();
  const {container} = render(
    <redux.Provider store={store}>
      <Router history={history}>
        <UserBlock />
      </Router>
    </redux.Provider>
  );

  expect(container).toMatchSnapshot();
});
