import React from 'react';
import userEvent from '@testing-library/user-event';
import {render, screen} from '@testing-library/react';

import Rating, {RatingStar} from './Rating';

describe(`Test Rating`, () => {
  it(`Should RatingStar render correctly`, () => {
    const item = 1;
    const setCommentRating = jest.fn();
    render(<RatingStar item={item} setCommentRating={setCommentRating} />);

    userEvent.click(screen.getByTestId(`rating`));
    expect(screen.getByTestId(`rating`)).toBeChecked();
    expect(screen.getByText(/Rating/i)).toBeInTheDocument();
  });

  it(`Should Rating render correctly`, () => {
    const setCommentRating = jest.fn();
    render(<Rating setCommentRating={setCommentRating} />);
  });
});
