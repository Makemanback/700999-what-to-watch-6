import React from 'react';
import {Link} from "react-router-dom";
import PropTypes from 'prop-types';

const GenreItem = ({itemClass, index, changeGenreHandler, genre, setActive}) => {

  return (
    <li
      className={`catalog__genres-item ${itemClass}`}
      onClick={() => setActive(index)}>
      <Link
        onClick={changeGenreHandler}
        to="#"
        className="catalog__genres-link">
        {genre}
      </Link>
    </li>
  );
};

GenreItem.propTypes = {
  itemClass: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  changeGenreHandler: PropTypes.func.isRequired,
  genre: PropTypes.string.isRequired,
  setActive: PropTypes.func.isRequired
};

export default GenreItem;
