import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import ApiService from "../../store/api-actions";
import {ActionCreator} from '../../store/action';
import LoadingScreen from '../loading-screen/loading-screen';
import filmProp from '../film/film.prop';

const apiService = new ApiService();

const GenresList = ({changeGenre, isDataLoaded, onLoadData, films}) => {

  const [activeTab, setActive] = useState(0);

  useEffect(() => {
    if (!isDataLoaded) {
      onLoadData();
    }
  }, [isDataLoaded]);

  if (!isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }

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
  isDataLoaded: PropTypes.bool.isRequired,
  onLoadData: PropTypes.func.isRequired,
  films: PropTypes.arrayOf(filmProp).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  changeGenre(genre) {
    dispatch(ActionCreator.changeGenre(genre));
  },
  onLoadData() {
    dispatch(apiService.fetchFilmsList());
  },
});

const mapStateToProps = ({isDataLoaded, allFilms}) => ({
  isDataLoaded,
  films: allFilms
});

export default connect(mapStateToProps, mapDispatchToProps)(GenresList);
