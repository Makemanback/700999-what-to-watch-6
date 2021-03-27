import {
  ActionType,
  loadFilms,
  getFilm,
  getFilmId,
  loadPromoFilm,
  loadComments,
  setGenres,
  changeGenre,
  requireAuthorization,
  redirectToRoute,
  loadFavorite,
  resetFilm,
  showMore
} from './action';

describe(`Action creators work correctly`, () => {

  // it(`Action creator for load films returns action with array of the films`, () => {
  //   const expectedAction = {
  //     type: ActionType.LOAD_FILMS,
  //     payload: 0
  //   };

  //   const films = [
  //     {
  //       id: ``,
  //       genre: ``
  //       ...
  //     }
  //   ]
  //   expect(loadFilms(films)).toEqual(expectedAction)
  // });

  it(`Action creator for get film id returns action with id of the film`, () => {
    const expectedAction = {
      type: ActionType.GET_FILM_ID,
      payload: Number
    };

    const id = Number;

    expect(getFilmId(id)).toEqual(expectedAction)
  });

  it(`Action creator for reset film returns action with undefined payload`, () => {
    const expectedAction = {
      type: ActionType.RESET_FILM,
    };

    expect(resetFilm()).toEqual(expectedAction);
  });
});
