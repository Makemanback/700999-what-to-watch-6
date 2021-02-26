import React from "react";
import ReactDOM from "react-dom";
import {createStore} from "redux";
import {Provider} from "react-redux";
import {reducer} from "./store/reducer";
import App from "./components/app/app";
import films from "./mocks/films";

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
);

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
