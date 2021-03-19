import React, {useState, useEffect, memo, useCallback} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {ActionCreator} from '../../store/action';

import GenreItem from '../genre-item/genre-item';

const GenresList = ({changeGenre, genres}) => {

  const [activeTab, setActive] = useState(0);

  const changeGenreHandler = (evt) => {
    evt.preventDefault();
    const {target} = evt;
    changeGenre(target.innerText);
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

GenresList.propTypes = {
  changeGenre: PropTypes.func.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

// const mapStateToProps = ({genres}) => ({
//   genres
// });
const mapStateToProps = ({GENRES}) => ({
  genres: GENRES.genres,
});
// const mapStateToProps = ({REDUCER}) => ({
//   genres: REDUCER.genres,
// });

const mapDispatchToProps = (dispatch) => ({
  changeGenre(genre) {
    dispatch(ActionCreator.changeGenre(genre));
  },
});


export default connect(mapStateToProps, mapDispatchToProps)(GenresList);
