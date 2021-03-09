import React from "react";
import ReactDOM from "react-dom";
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import {createAPI} from "./api/api";
import {reducer} from "./store/reducer";
import {ActionCreator} from './store/action';
import ApiService from "./store/api-actions";
import {AuthorizationStatus} from "./const";
import App from "./components/app/app";
import films from "./mocks/films";
import {redirect} from "./store/middlewares/redirect";


const apiService = new ApiService();

const api = createAPI(
    () => store.dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH))
);

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api)),
        applyMiddleware(redirect)
    )
);

store.dispatch(apiService.checkAuth());


const Settings = {
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  year: 2014
};

const {title, genre, year} = Settings;

ReactDOM.render(
    <Provider store={store}>
      <App
        title={title}
        genre={genre}
        year={year}
        films={films}
      />
    </Provider>,
    document.querySelector(`#root`)
);
