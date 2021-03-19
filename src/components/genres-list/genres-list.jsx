import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import {changeGenre} from '../../store/action';

import GenreItem from '../genre-item/genre-item';

const GenresList = () => {

  const {genres} = useSelector(({GENRES}) => GENRES);

  const dispatch = useDispatch();

  const [activeTab, setActive] = useState(0);

  const changeGenreHandler = (evt) => {
    evt.preventDefault();
    const {target} = evt;
    dispatch(changeGenre(target.innerText));
  };

  return (
    <ul className="catalog__genres-list">
      {genres.map((genre, index) => {
        const itemClass = activeTab === index ? `catalog__genres-item--active` : ``;
        return (
          <GenreItem
            itemClass={itemClass}
            setActive={setActive}
            index={index}
            key={index}
            changeGenreHandler={changeGenreHandler}
            genre={genre} />
        );
      })}
    </ul>
  );
};

export default GenresList;
