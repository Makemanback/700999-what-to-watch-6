import React from 'react';
import {Link} from "react-router-dom";
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';

const GENRES_LIST = [
  `All genres`,
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

const GenresList = (props) => {
  const {changeGenre} = props;

  return (
    <ul className="catalog__genres-list">
      {
        GENRES_LIST.map((genre, index) => {
          const changeGenreHandler = (evt) => {
            evt.preventDefault();
            changeGenre(genre);
          };
          return (
            <li className="catalog__genres-item" key={index}>
              <Link onClick={changeGenreHandler} to="#" className="catalog__genres-link">{genre}</Link>
            </li>
          );
        })
      }
    </ul>
  );
};

const mapDispatchToProps = (dispatch) => ({
  changeGenre(genre) {
    dispatch(ActionCreator.changeGenre(genre));
  }
  // getList(list) {
  //   dispatch(ActionCreator.getList(list))
  // }
});

GenresList.propTypes = {
  changeGenre: PropTypes.func.isRequired
};

export default connect(null, mapDispatchToProps)(GenresList);
