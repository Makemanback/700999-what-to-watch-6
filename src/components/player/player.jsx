import React, {useEffect, useRef, useState} from "react";
import PropTypes from 'prop-types';
import {useDispatch, useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';

import ApiService from "../../store/api-actions";
import {formatTime} from '../../utils';
import LoadingScreen from '../loading-screen/loading-screen';

const apiService = new ApiService();

const PlayButton = ({isPlaying}) => {

  if (isPlaying) {
    return (
      <svg viewBox="0 0 19 19" width="19" height="19">
        <use xlinkHref="#play-s"/>
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 19 19" width="19" height="19">
      <use xlinkHref="#pause"/>
    </svg>
  );
};

const Player = () => {
  const videoRef = useRef();

  const currentFilm = useSelector(({FILM}) => FILM.currentFilm);
  const promoFilm = useSelector(({FILM}) => FILM.promoFilm);

  const dispatch = useDispatch();

  const {id} = useParams();
  const filmId = +id;

  const [isPlaying, setPlaying] = useState(true);
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

  let playButton = <PlayButton isPlaying={isPlaying} />;

  const resumeVideo = () => {
    if (videoRef.current.paused) {
      setPlaying(false);
      videoRef.current.play();
      playButton = <PlayButton isPlaying={isPlaying} />;
    } else {
      setPlaying(true);
      videoRef.current.pause();
      playButton = <PlayButton isPlaying={isPlaying} />;
    }
  };

  const changeVideoProgress = () => {
    setTime(videoRef.current.currentTime);
    setToggler((videoRef.current.currentTime / videoRef.current.duration) * 100 )
  }

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
        onClick={() => {}}>Exit</button>

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
            {playButton}
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

Player.propTypes = {
  filmId: PropTypes.number.isRequired
};

export default Player;
