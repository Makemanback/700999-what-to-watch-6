import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import * as redux from 'react-redux';

import CardsList from './cards-list';

const mockFilms = [
  {
    description: `Macbeth, the Thane of Glamis, receives a prophecy from a trio of witches that one day he will become King of Scotland. Consumed by ambition and spurred to action by his wife, Macbeth murders his king and takes the throne for himself.`,
    rating: 3.3,
    director: `Justin Kurzel`,
    starring: [
      `Michael Fassbender`,
      `Marion Cotillard`,
      `Jack Madigan`
    ],
    genre: `Drama`,
    released: 2015,
    id: 1,
    image: `https://assets.htmlacademy.ru/intensives/javascript-3/film/preview/macbeth.jpg`,
    video: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    title: `Macbeth`,
    runTime: 113,
    background: `#F1E9CE`,
    backgroundImg: `https://assets.htmlacademy.ru/intensives/javascript-3/film/background/Macbeth.jpg`,
    isFavorite: false,
    poster: `https://assets.htmlacademy.ru/intensives/javascript-3/film/poster/Macbeth.jpg`,
    scoresCount: 48798,
    videoLink: `http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4`
  },
  {
    description: `Vicenarian Richard travels to Thailand and finds himself in possession of a strange map. Rumours state that it leads to a solitary beach paradise, a tropical bliss. Excited and intrigued, he sets out to find it.`,
    rating: 3.3,
    director: `Danny Boyle`,
    starring: [
      `Leonardo DiCaprio`,
      `Daniel York`,
      `Patcharawan Patarakijjanon`
    ],
    genre: `Adventure`,
    released: 2000,
    id: 2,
    image: `https://assets.htmlacademy.ru/intensives/javascript-3/film/preview/beach.jpg`,
    video: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    title: `Beach`,
    runTime: 119,
    background: `#EBC996`,
    backgroundImg: `https://assets.htmlacademy.ru/intensives/javascript-3/film/background/beach.jpg`,
    isFavorite: false,
    poster: `https://assets.htmlacademy.ru/intensives/javascript-3/film/poster/beach.jpg`,
    scoresCount: 207824,
    videoLink: `http://media.xiph.org/mango/tears_of_steel_1080p.webm`
  },
];

const filmId = 1;

describe(`Test 'CardsList' component`, () => {
  jest.spyOn(redux, `useSelector`);
  jest.spyOn(redux, `useDispatch`);
  const loadMovieData = jest.fn();

  it(`Render 'CardsList' correctly`, () => {
    const history = createMemoryHistory();

    render(
          <Router history={history}>
            <CardsList films={mockFilms} loadMovieData={loadMovieData} filmId={filmId} />
          </Router>
    );
  });
})
