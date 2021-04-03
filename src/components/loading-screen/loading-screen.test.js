import React from 'react';
import {render, screen} from '@testing-library/react';
import LoadingScreen from './loading-screen';

test(`Should LoadingScreen render correctly`, () => {
  render(<LoadingScreen />);
  expect(screen.getByText(`Loading ...`)).toBeInTheDocument();
});
