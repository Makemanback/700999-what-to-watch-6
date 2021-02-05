import React from "react";
import PropTypes from "prop-types";
import MovieCardButtons from "../movie-card-buttons/movie-card-buttons";

const MovieCardInfo = ({title, genre, year}) => {
  return (
    <div className="movie-card__wrap">
      <div className="movie-card__info">
        <div className="movie-card__poster">
          <img src="img/the-grand-budapest-hotel-poster.jpg" alt={title} width="218" height="327" />
        </div>

        <div className="movie-card__desc">
          <h2 className="movie-card__title">{title}</h2>
          <p className="movie-card__meta">
            <span className="movie-card__genre">{genre}</span>
            <span className="movie-card__year">{year}</span>
          </p>

          <MovieCardButtons />
        </div>
      </div>
    </div>
  );
};

MovieCardInfo.propTypes = {
  title: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
};

export default MovieCardInfo;
