import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import * as redux from 'react-redux';
import userEvent from '@testing-library/user-event';

import {AuthorizationStatus} from '../../const';

import SignIn from './sign-in';

const mockStore = configureStore({});

it(`Render 'SignIn' when user navigate to '/login' url`, () => {
  const store = mockStore({
    USER: {authorizationStatus: AuthorizationStatus.NO_AUTH}
  });
  const history = createMemoryHistory();
  history.push(`/login`);

  render(
      <redux.Provider store={store}>
        <Router history={history}>
          <SignIn />
        </Router>
      </redux.Provider>
  );

  expect(screen.getAllByText(`Sign in`).length).toEqual(2);
  expect(screen.getByText(`Email address`)).toBeInTheDocument();
  expect(screen.getByText(`Password`)).toBeInTheDocument();

  userEvent.type(screen.getByTestId(`login`), `keks`);
  userEvent.type(screen.getByTestId(`password`), `123456`);

  expect(screen.getByDisplayValue(`keks`)).toBeInTheDocument();
  expect(screen.getByDisplayValue(`123456`)).toBeInTheDocument();
});
