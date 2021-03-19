import React from "react";
import filmProp from "../film/film.prop";
import {filmLevel} from '../../utils';

const FilmOverview = ({film}) => {
  const {rating, director, starring, description, scoresCount} = film;

  return (
    <>
      <div className="movie-rating">
        <div className="movie-rating__score">{rating}</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">{filmLevel(rating)}</span>
          <span className="movie-rating__count">{scoresCount} ratings</span>
        </p>
      </div>

      <div className="movie-card__text">
        {description}

        <p className="movie-card__director"><strong>Director: {director}</strong></p>

        <p className="movie-card__starring">
          <strong>Starring:&nbsp;
            {starring.map((item, index) => (
              <React.Fragment key={index}>
                {item},&nbsp;
              </React.Fragment>
            ))}
            and other
          </strong>
        </p>
      </div>
    </>
  );
};

FilmOverview.propTypes = {
  film: filmProp.isRequired,
};

export default FilmOverview;
