import React from "react";
import PropTypes from "prop-types";
import Footer from '../footer/footer';
import MovieCard from "../movie-card/movie-card";

import Catalog from "../catalog/catalog";

const MainComponent = ({title, genre, year, films}) => {

  return (
    <React.Fragment>

      <MovieCard title={title} genre={genre} year={year} />

      <div className="page-content">
        <Catalog films={films} />

        <Footer />
      </div>
    </React.Fragment>
  );
};

MainComponent.propTypes = {
  title: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  films: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired
};

export default MainComponent;
