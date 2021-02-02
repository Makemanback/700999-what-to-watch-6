import React from "react";
import PropTypes from "prop-types";
import MainComponent from "../main/main";

const App = ({title, genre, year, films}) => {

  return (
    <MainComponent
      title={title}
      genre={genre}
      year={year}
      films={films} />
  );
};

App.propTypes = {
  title: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  films: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired
};

export default App;
