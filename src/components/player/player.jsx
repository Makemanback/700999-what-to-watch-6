import React, {useEffect, useRef} from "react";
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';

import ApiService from "../../store/api-actions";

const apiService = new ApiService();

const Player = ({filmId}) => {
  const videoRef = useRef();

  const currentFilm = useSelector(({FILM}) => FILM.currentFilm);
  const promoFilm = useSelector(({FILM}) => FILM.promoFilm);

  const dispatch = useDispatch();

  const loadFilmsData = () => dispatch(apiService.fetchFilm(filmId));

  useEffect(() => {
    if (!promoFilm) {
      dispatch(apiService.fetchPromoFilm());
      dispatch(apiService.fetchFilmsList());
    }
  }, [promoFilm]);

  useEffect(() => {
    if (!currentFilm) {
      loadFilmsData(filmId);
      dispatch(apiService.fetchFilmComments(filmId));
      dispatch(apiService.fetchFilmsList());
    }
  }, [currentFilm, filmId]);



  const {image, videoLink} = currentFilm ? currentFilm : promoFilm;

  return (
    <div className="player">
      <video ref={videoRef} src={videoLink} className="player__video" poster={image}></video>

      <button type="button" className="player__exit">Exit</button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value="30" max="100"></progress>
            <div className="player__toggler" style={{left: `30%`}}>Toggler</div>
          </div>
          <div className="player__time-value">1:30:29</div>
        </div>

        <div className="player__controls-row">
          <button
            type="button"
            className="player__play"
            onClick={() => videoRef.current.play()}>
            <svg viewBox="0 0 19 19" width="19" height="19">
              <use xlinkHref="#play-s"/>
            </svg>
            <span>Play</span>
          </button>
          <div className="player__name">Transpotting</div>

          <button type="button" className="player__full-screen">
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"/>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
};

Player.propTypes = {
  filmId: PropTypes.number.isRequired
}

export default Player;
