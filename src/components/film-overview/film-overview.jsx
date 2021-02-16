import React from "react";
import PropTypes from "prop-types";
import FilmNav from "../film-nav/film-nav";
import filmProp from "../film/film.prop";

const FilmOverview = ({path, film}) => {
  const {rating, director, starring, description, id} = film;
  const {score, level, count} = rating;

  return (
    <React.Fragment>
      <FilmNav id={id} path={path} />

      <div className="movie-rating">
        <div className="movie-rating__score">{score}</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">{level}</span>
          <span className="movie-rating__count">{count} ratings</span>
        </p>
      </div>

      <div className="movie-card__text">
        {description}

        <p className="movie-card__director"><strong>Director: {director}</strong></p>

        <p className="movie-card__starring">
          <strong>Starring:
            {starring.map((item, index) => (
              <React.Fragment key={index}>
                {item}
              </React.Fragment>
            ))}
            &nbsp;and other
          </strong>
        </p>
      </div>
    </React.Fragment>
  );
};

FilmOverview.propTypes = {
  path: PropTypes.string.isRequired,
  film: PropTypes.shape(filmProp).isRequired,
};

export default FilmOverview;
