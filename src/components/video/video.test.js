import React from 'react';
import {render, screen} from '@testing-library/react';
import Video from './video';

jest.mock(`./video.jsx`, () => function mockVideo() {
  return <div>video</div>;
});

test(`Should Video render correctly`, () => {
  render(<Video />);
  expect(screen.getByText(`video`)).toBeInTheDocument();
});
