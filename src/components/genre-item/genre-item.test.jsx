import React from 'react';
import {Router} from 'react-router-dom';
import {render} from '@testing-library/react';
import {createMemoryHistory} from 'history';

import GenreItem from './genre-item';

const itemClass = `mock class`;
const index = 1;
const changeGenreHandler = jest.fn();
const genre = `drama`;
const setActive = jest.fn();
test(`Should GenreItem render correctly`, () => {

  const history = createMemoryHistory();

  const {container} = render(
      <Router history={history}>
        <GenreItem itemClass={itemClass} index={index} genre={genre} changeGenreHandler={changeGenreHandler} setActive={setActive} />
      </Router>
  );

  expect(container).toMatchSnapshot();
});

