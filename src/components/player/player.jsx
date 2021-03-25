import React, {useEffect, useRef, useState} from "react";
import {useDispatch, useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';

import ApiService from "../../store/api-actions";
import {formatTime} from '../../utils';
import browserHistory from '../../browser-history';
import {Path} from '../../const';

import LoadingScreen from '../loading-screen/loading-screen';

const apiService = new ApiService();


const Player = () => {
  const videoRef = useRef();

  const currentFilm = useSelector(({FILM}) => FILM.currentFilm);
  const promoFilm = useSelector(({FILM}) => FILM.promoFilm);

  const dispatch = useDispatch();

  const {id} = useParams();
  const filmId = +id;

  const [playButton, setPlaying] = useState(<use xlinkHref="#play-s"/>);
  const [playerTime, setTime] = useState(0);
  const [playerToggler, setToggler] = useState(0);

  useEffect(() => {
    if (!promoFilm) {
      dispatch(apiService.fetchPromoFilm());
    }
  }, [promoFilm]);

  useEffect(() => {
    if (!currentFilm) {
      dispatch(apiService.fetchFilm(filmId));
    }
  }, [currentFilm, filmId]);

  if (!currentFilm || !promoFilm) {
    return (
      <LoadingScreen />
    );
  }

  const {image, videoLink} = currentFilm ? currentFilm : promoFilm;

  const resumeVideo = () => {
    if (videoRef.current.paused) {
      setPlaying(<use xlinkHref="#pause"/>);
      videoRef.current.play();
    } else {
      setPlaying(<use xlinkHref="#play-s"/>);
      videoRef.current.pause();
    }
  };

  const changeVideoProgress = () => {
    setTime(videoRef.current.currentTime);
    setToggler((videoRef.current.currentTime / videoRef.current.duration) * 100);
  };

  return (
    <div className="player">
      <video
        ref={videoRef}
        src={videoLink}
        className="player__video"
        poster={image}
        onTimeUpdate={() => changeVideoProgress()}>
      </video>

      <button
        type="button"
        className="player__exit"
        onClick={() => browserHistory.push(Path.FILMS + filmId)}>
          Exit
      </button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value={playerToggler} max="100"></progress>
            <div className="player__toggler" style={{left: `${playerToggler}%`}}>Toggler</div>
          </div>
          <div className="player__time-value">
            {formatTime(playerTime)}
          </div>
        </div>
        <div className="player__controls-row">
          <button
            type="button"
            className="player__play"
            onClick={() => resumeVideo()}>
              <svg viewBox="0 0 19 19" width="19" height="19">
                {playButton}
              </svg>
            <span>Play</span>
          </button>
          <div className="player__name">Transpotting</div>

          <button
            onClick={() => videoRef.current.requestFullscreen()}
            type="button"
            className="player__full-screen">
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

export default Player;
