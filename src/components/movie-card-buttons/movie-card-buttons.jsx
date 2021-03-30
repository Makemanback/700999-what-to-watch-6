import React, {memo, useState} from "react";
import PropTypes from "prop-types";
import {Link} from 'react-router-dom';
import {useSelector, useDispatch} from "react-redux";

import ApiService from '../../store/api-actions';
import {addToFavorite, removeFromFavorite} from '../../store/action';
import {AuthorizationStatus, Path} from '../../const';
import browserHistory from '../../browser-history';

const apiService = new ApiService();

const MovieCardButtons = ({filmId, isFavorite, film}) => {

  const plusButton = <svg viewBox="0 0 19 20" width="19" height="20">
                      <use xlinkHref="#add" />
                    </svg>;
  const checkMarkButton = <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M2.40513 5.35353L6.1818 8.90902L15.5807 0L18 2.80485L6.18935 14L0 8.17346L2.40513 5.35353Z" fill="#EEE5B5"/>
                          </svg>;


  const [inFavoriteList, setFavoriteButton] = useState(plusButton);

  const authorizationStatus = useSelector(({USER}) => USER.authorizationStatus);
  const favoriteFilms = useSelector(({ALL_FILMS}) => ALL_FILMS.favoriteFilms)

  const dispatch = useDispatch();

  const addReview = authorizationStatus === AuthorizationStatus.AUTH
    ? <Link
      to={`/films/${filmId}/review`}
      className="btn movie-card__button">
          Add review
    </Link>
    : null;


const setBtn = () => {
  if (isFavorite) {
    setFavoriteButton(plusButton);
  } else {
    setFavoriteButton(checkMarkButton);
  }
}

  const changeFavoriteStatus = () => {
    if (authorizationStatus === AuthorizationStatus.AUTH) {

      if (isFavorite) {
        dispatch(apiService.removeFromFavoriteList(isFavorite, filmId));
      } else {
        dispatch(apiService.addToFavoriteList(isFavorite, filmId));
      }

    } else {
      browserHistory.push(Path.LOGIN);
    }
  };


  return (
    <div className="movie-card__buttons">
      <Link to={Path.FILM_PLAYER + filmId} className="btn btn--play movie-card__button" type="button">
        <svg viewBox="0 0 19 19" width="19" height="19">
          <use xlinkHref="#play-s" />
        </svg>
        <span>Play</span>
      </Link>
      <button
        onClick={() => changeFavoriteStatus()}
        className="btn btn--list movie-card__button"
        type="button">
        {inFavoriteList}
        <span>My list</span>
      </button>
      {addReview}
    </div>
  );
};

MovieCardButtons.propTypes = {
  filmId: PropTypes.number.isRequired,
  isFavorite: PropTypes.bool.isRequired
};

export default memo(
    MovieCardButtons,
    ({filmId},
        {filmId: nextFilmId}) => {
      return filmId === nextFilmId;
    });
