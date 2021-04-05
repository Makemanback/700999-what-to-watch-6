import React from 'react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import SmallCard from './small-card';

const title = `Title`;
const id = 1;
const image = `src`;
const video = `src`;
let isVideo = false;

test(`Should SmallCard render correctly`, () => {
  const handleHoverCard = jest.fn();
  const handleHoverOutCard = jest.fn();
  const handleClickCard = jest.fn();

  handleClickCard.mockImplementation(
      () => history.push(`/films/${id}`)
  );

  const history = createMemoryHistory();

  render(
      <Router history={history}>
        <SmallCard
          title={title}
          id={id}
          image={image}
          video={video}
          isVideo={isVideo}
          handleHoverCard={handleHoverCard}
          handleHoverOutCard={handleHoverOutCard}
          handleClickCard={handleClickCard}
        />
      </Router>
  );

  expect(screen.getByText(`${title}`)).toBeInTheDocument();

  userEvent.click(screen.getByText(`${title}`));
  expect(handleClickCard).toBeCalled();

});
