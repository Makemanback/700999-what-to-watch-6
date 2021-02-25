import React, {useState} from 'react';
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
  const passiveItemClass = `catalog__genres-item`;
  const activeItemClass = `catalog__genres-item catalog__genres-item--active`;
  const [activeTab, setActive] = useState(0);
  const changeGenreHandler = (evt) => {
    evt.preventDefault();
    const {target} = evt;
    changeGenre(target.innerText);
  };

  return (
    <ul className="catalog__genres-list">
      {GENRES_LIST.map((genre, index) => {
        const itemClass = activeTab === index ? activeItemClass : passiveItemClass;
        const actived = () => setActive(index);
        return (
          <li
            className={itemClass}
            key={index}
            onClick={actived}>
            <Link onClick={changeGenreHandler} to="#" className="catalog__genres-link">{genre}</Link>
          </li>
        );
      })}
    </ul>
  );
};

const mapDispatchToProps = (dispatch) => ({
  changeGenre(genre) {
    dispatch(ActionCreator.changeGenre(genre));
  }
});

GenresList.propTypes = {
  changeGenre: PropTypes.func.isRequired
};

export default connect(null, mapDispatchToProps)(GenresList);
