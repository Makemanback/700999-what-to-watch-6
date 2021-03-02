import React, {useState} from 'react';
import {Link} from "react-router-dom";
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';

const GenresList = (props) => {
  const {changeGenre, genres} = props;

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
          <li
            className={`catalog__genres-item ${itemClass}`}
            key={index}
            onClick={() => setActive(index)}>
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

const mapStateToProps = ({genres}) => ({
  genres
});


GenresList.propTypes = {
  changeGenre: PropTypes.func.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(GenresList);
