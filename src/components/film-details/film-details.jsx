import React from "react";
import PropTypes from "prop-types";
import FilmNav from "../film-nav/film-nav";
import filmProp from "../film/film.prop";
import {timeConvert} from '../../utils';

const FilmDetails = ({film, path}) => {

  const {genre, released, director, starring, runTime, id} = film;

  return (
    <React.Fragment>
      <FilmNav id={id} path={path} />

      <div className="movie-card__text movie-card__row">
        <div className="movie-card__text-col">
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Director</strong>
            <span className="movie-card__details-value">{director}</span>
          </p>
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Starring</strong>
            <span className="movie-card__details-value">
              {starring.map((item, index) => (
                <React.Fragment key={index}>
                  {item} <br />
                </React.Fragment>
              ))}
            </span>
          </p>
        </div>

        <div className="movie-card__text-col">
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Run Time</strong>
            <span className="movie-card__details-value">
              {timeConvert(runTime)}
            </span>
          </p>
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Genre</strong>
            <span className="movie-card__details-value">{genre}</span>
          </p>
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Released</strong>
            <span className="movie-card__details-value">{released}</span>
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

FilmDetails.propTypes = {
  path: PropTypes.string.isRequired,
  film: PropTypes.shape(filmProp).isRequired,
};

export default FilmDetails;
