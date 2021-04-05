import React from 'react';
import {Router} from 'react-router-dom';
import {render} from '@testing-library/react';
import {createMemoryHistory} from 'history';

import FilmNav from './film-nav';

const id = 1;
const Tabs = {
  OVERVIEW: `OVERVIEW`,
  DETAILS: `DETAILS`,
  REVIEWS: `REVIEWS`
};
const mockActiveTab = Tabs.OVERVIEW;

test(`Should FilmNav render correctly`, () => {
  const setActiveTab = jest.fn();
  const history = createMemoryHistory();

  const {container} = render(
      <Router history={history}>
        <FilmNav id={id} setActiveTab={setActiveTab} Tabs={Tabs} activeTab={mockActiveTab} />
      </Router>
  );

  expect(container).toMatchSnapshot();
});

