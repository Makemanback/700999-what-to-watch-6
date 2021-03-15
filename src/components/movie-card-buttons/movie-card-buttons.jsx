import React from "react";
import PropTypes from "prop-types";
import {Link} from 'react-router-dom';
import {AuthorizationStatus} from '../../const';

const MovieCardButtons = ({authorizationStatus, id}) => {
  const Authorized = authorizationStatus === AuthorizationStatus.AUTH
    ? <Link
      to={`/films/${id}/review`}
      className="btn movie-card__button">
          Add review
    </Link>
    : null;

  return (
    <div className="movie-card__buttons">
      <button className="btn btn--play movie-card__button" type="button">
        <svg viewBox="0 0 19 19" width="19" height="19">
          <use xlinkHref="#play-s" />
        </svg>
        <span>Play</span>
      </button>
      <button className="btn btn--list movie-card__button" type="button">
        <svg viewBox="0 0 19 20" width="19" height="20">
          <use xlinkHref="#add" />
        </svg>
        <span>My list</span>
      </button>
      {Authorized}
    </div>
  );
};

MovieCardButtons.propTypes = {
  authorizationStatus: PropTypes.string.isRequired
};

export default MovieCardButtons;
