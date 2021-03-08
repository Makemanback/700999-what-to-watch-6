import React, {useState} from 'react';
import {Link} from "react-router-dom";
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';
import filmProp from '../film/film.prop';

const GenresList = ({changeGenre, films}) => {

  const [activeTab, setActive] = useState(0);

  const changeGenreHandler = (evt) => {
    evt.preventDefault();
    const {target} = evt;
    changeGenre(target.innerText);
  };

  const genresList = Array.from(
      new Set(
          films
        .map(({genre}) => genre)
      )
  );

  genresList.unshift(`All genres`);

  return (
    <ul className="catalog__genres-list">
      {genresList.map((genre, index) => {
        const itemClass = activeTab === index ? `catalog__genres-item--active` : ``;
        return (
          <li
            className={`catalog__genres-item ${itemClass}`}
            key={index}
            onClick={() => setActive(index)}>
            <Link
              onClick={changeGenreHandler}
              to="#"
              className="catalog__genres-link">
              {genre}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

GenresList.propTypes = {
  changeGenre: PropTypes.func.isRequired,
  films: PropTypes.arrayOf(filmProp).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  changeGenre(genre) {
    dispatch(ActionCreator.changeGenre(genre));
  },
});

const mapStateToProps = ({allFilms}) => ({
  films: allFilms
});

export default connect(mapStateToProps, mapDispatchToProps)(GenresList);
