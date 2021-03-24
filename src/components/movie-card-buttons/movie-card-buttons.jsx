import React, {memo} from "react";
import PropTypes from "prop-types";
import {Link} from 'react-router-dom';
import {useSelector, useDispatch} from "react-redux";

import ApiService from '../../store/api-actions';
import {AuthorizationStatus, Path} from '../../const';

const apiService = new ApiService();

const MovieCardButtons = ({id}) => {

  const authorizationStatus = useSelector(({USER}) => USER.authorizationStatus);

  const dispatch = useDispatch();
  const currentFilm = useSelector(({FILM}) => FILM.currentFilm);
  const promoFilm = useSelector(({FILM}) => FILM.promoFilm);


  const addReview = authorizationStatus === AuthorizationStatus.AUTH
    ? <Link
      to={`/films/${id}/review`}
      className="btn movie-card__button">
          Add review
    </Link>
    : null;

  const film = currentFilm ? currentFilm : promoFilm;

  return (
    <div className="movie-card__buttons">
      <Link to={Path.FILM_PLAYER + id} className="btn btn--play movie-card__button" type="button">
        <svg viewBox="0 0 19 19" width="19" height="19">
          <use xlinkHref="#play-s" />
        </svg>
        <span>Play</span>
      </Link>
      <button
        onClick={() => dispatch(apiService.addToFavorite(film))}
        className="btn btn--list movie-card__button"
        type="button">
        <svg viewBox="0 0 19 20" width="19" height="20">
          <use xlinkHref="#add" />
        </svg>
        <span>My list</span>
      </button>
      {addReview}
    </div>
  );
};

MovieCardButtons.propTypes = {
  id: PropTypes.number.isRequired
};

export default memo(
    MovieCardButtons,
    ({id},
        {id: nextId}) => {
      return id === nextId;
    });
