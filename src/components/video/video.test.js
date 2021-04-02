import React from 'react';
import {render} from '@testing-library/react';
import Video from './video';

const title = `video-title`;
const video = `http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4`;

test(`Should Video render correctly`, () => {
  const {container} = render(<Video title={title} video={video} />);
  expect(container).toMatchSnapshot();
});
