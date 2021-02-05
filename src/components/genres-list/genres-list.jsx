import React from 'react';

const GENRES_LIST = [
  `Comedies`,
  `Crime`,
  `Documentary`,
  `Dramas`,
  `Horror`,
  `Kids & Family`,
  `Romance`,
  `Sci-Fi`,
  `Thrillers`
];

const GenresList = () => {
  return (
    <ul className="catalog__genres-list">
      <li className="catalog__genres-item catalog__genres-item--active">
        <a href="#" className="catalog__genres-link">All genres</a>
      </li>

      {
        GENRES_LIST.map((genre, index) => {
          return (
            <li className="catalog__genres-item" key={index}>
              <a href="#" className="catalog__genres-link">{genre}</a>
            </li>
          );
        })
      }
    </ul>
  );
};

export default GenresList;
