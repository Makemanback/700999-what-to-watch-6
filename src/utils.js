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
  return `${rhours}h ${rminutes}m`;
};

export const formatTime = (time) => {
  let fulltime;
  let h = Math.floor(time / (60 * 60));
  let dm = time % (60 * 60);
  let m = Math.floor(dm / 60);
  let ds = dm % 60;
  let s = Math.ceil(ds);
  if (s === 60) {
    s = 0;
    m = m + 1;
  }
  if (s < 10) {
    s = `0${s}`;
  }
  if (m === 60) {
    m = 0;
    h = h + 1;
  }
  if (m < 10) {
    m = `0${m}`;
  }
  if (h === 0) {
    fulltime = `${m}:${s}`;
  } else {
    fulltime = `${h}:${m}:${s}`;
  }
  return fulltime;
};
