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
