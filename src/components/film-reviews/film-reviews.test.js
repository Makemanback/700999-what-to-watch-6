import React from 'react';
import {render, screen} from '@testing-library/react';
import FilmReviews from './film-reviews';

const reviews = [
  {
    user: {
      id: 15,
      name: `Kendall`
    },
    rating: 6,
    comment: `I personally found this movie to be boring. Definitely one of the most boring movies I've ever seen.`,
    date: `2021-02-15T08:04:28.658Z`,
    reviewId: 1
  },
  {
    user: {
      id: 1,
      name: `makeman`
    },
    rating: 4,
    comment: `ewwfd`,
    date: `2021-04-02T07:36:03.591Z`,
    reviewId: 2
  }
];

test(`Should FilmReviews render correctly`, () => {
  render(
      <FilmReviews reviews={reviews} />
  );
  expect(screen);

  reviews.forEach(({comment}) => {
    expect(screen.getByText(`${comment}`)).toBeInTheDocument();
  });

  reviews.forEach(({rating}) => {
    expect(screen.getByText(`${rating}`)).toBeInTheDocument();
  });

  reviews.forEach(({user}) => {
    expect(screen.getByText(`${user.name}`)).toBeInTheDocument();
  });

});
