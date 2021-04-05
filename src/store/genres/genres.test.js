import {genres} from './genres';
import {ActionType} from '../action';

describe(`Reducer 'genres' should work correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(genres(undefined, {}))
      .toEqual({genres: []});
  });

  it(`Reducer should update genres list`, () => {
    const mockGenres = [`Drama`, `Horror`];
    const state = {genres: []};
    const setGenres = {
      type: ActionType.SET_GENRES,
      payload: mockGenres
    };

    expect(genres(state, setGenres))
      .toEqual({genres: mockGenres});
  });
});
