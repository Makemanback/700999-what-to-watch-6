import React from 'react';
import {Router} from 'react-router-dom';
import {render} from '@testing-library/react';
import {createMemoryHistory} from 'history';

import SmallCardContainer from './small-card-container';

const id = 1;
const image = ``;
const title = ``;
const video = ``;

describe(`Test SmallCardContainer`, () => {
  it(`SmallCardContainer should be render correctly`, () => {
    const history = createMemoryHistory();

    const {container} = render(
        <Router history={history}>
          <SmallCardContainer id={id} image={image} title={title} video={video} />
        </Router>
    );

    expect(container).toMatchSnapshot();
  });

});
