import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";
import films from "./mocks/films";

const Settings = {
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  year: 2014
};

const {title, genre, year} = Settings;

ReactDOM.render(
    <App
      title={title}
      genre={genre}
      year={year}
      films={films}
    />,
    document.querySelector(`#root`)
);

