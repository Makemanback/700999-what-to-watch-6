export const FILMS_ON_SCREEN = 8;

export const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

export const Genre = {
  ALL_GENRES: `All genres`,
  COMEDIES: `Comedies`,
  CRIME: `Crime`,
  DOCUMENTARY: `Documentary`,
  DRAMAS: `Dramas`,
  HORROR: `Horror`,
  KIDS_FAMILY: `Kids & Family`,
  ROMANCE: `Romance`,
  SCI_FI: `Sci-Fi`,
  THRILLERS: `Thrillers`
};


export const Path = {
  DEFAULT: `/`,
  LOGIN: `/login`,
  MY_LIST: `/mylist`,
  FILM_ID: `/films/:id`,
  FILM_REVIEW: `/films/:id/review`,
  MOVIE_REVIEWS: `/films/:id/reviews`,
  PLAYER: `/player/:id`,
  MOVIE_DETAILS: `/films/:id/details`
};
