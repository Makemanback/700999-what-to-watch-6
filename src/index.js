import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {configureStore} from '@reduxjs/toolkit';

import {createAPI} from "./api/api";
import rootReducer from './store/root-reducer';

import {requireAuthorization} from './store/action';
import ApiService from "./store/api-actions";
import {AuthorizationStatus} from "./const";
import {redirect} from "./store/middlewares/redirect";

import App from "./components/app/app";


const apiService = new ApiService();

const api = createAPI(
    () => store.dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH))
);

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api
      },
    }).concat(redirect)
});

store.dispatch(apiService.checkAuth());

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.querySelector(`#root`)
);
