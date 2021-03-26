import {Level} from './const';

export const extend = (a, b) => Object.assign({}, a, b);

export const filmLevel = (rating) => {
  if (rating === 10) {
    return Level.AWESOME;
  } else if (rating <= 4) {
    return Level.BAD;
  } else if (rating <= 7) {
    return Level.NORMAL;
  } else {
    return Level.VERY_GOOD;
  }
};

export const timeConvert = (time) => {
  const hours = (time / 60);
  const rhours = Math.floor(hours);
  const minutes = (hours - rhours) * 60;
  const rminutes = Math.round(minutes);
  return `${rhours}hours ${rminutes}minutes`;
};

export const formatPlayerTime = (time) => {
  let fulltime;
  let hours = Math.floor(time / (60 * 60));
  let dividedMinutes = time % (60 * 60);
  let minutes = Math.floor(dividedMinutes / 60);
  let dividedSeconds = dividedMinutes % 60;
  let seconds = Math.ceil(dividedSeconds);

  if (seconds === 60) {
    seconds = 0;
    minutes = minutes + 1;
  }
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }
  if (minutes === 60) {
    minutes = 0;
    hours = hours + 1;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (hours === 0) {
    fulltime = `${minutes}:${seconds}`;
  } else {
    fulltime = `${hours}:${minutes}:${seconds}`;
  }
  return fulltime;
};
