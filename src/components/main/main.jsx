import React from "react";
import PropTypes from "prop-types";
import Footer from '../footer/footer';
import MovieCard from "../movie-card/movie-card";

import Catalog from "../catalog/catalog";
import filmProp from "../film/film.prop";

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
  films: PropTypes.arrayOf(filmProp).isRequired
};

export default MainComponent;
