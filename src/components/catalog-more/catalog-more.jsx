import React from "react";
import PropTypes from "prop-types";
import filmProp from '../film/film.prop';
import {connect} from "react-redux";
import {ActionCreator} from '../../store/action';

const CatalogMore = ({films, filmsToShow, onShowMore}) => {

  if (filmsToShow > films.length) {
    return null;
  }

  return (
    <div className="catalog__more">
      <button
        onClick={() => onShowMore()}
        className="catalog__button" type="button">Show more</button>
    </div>
  );
};

// const mapStateToProps = ({filteredFilms, filmsToShow, onShowMore}) => ({
//   films: filteredFilms,
//   filmsToShow,
//   onShowMore
// });

const mapStateToProps = ({ALL_FILMS}) => ({
  films: ALL_FILMS.filteredFilms,
  filmsToShow: ALL_FILMS.filmsToShow,
  onShowMore: ALL_FILMS.onShowMore
});

// const mapStateToProps = ({REDUCER}) => ({
//   films: REDUCER.filteredFilms,
//   filmsToShow: REDUCER.filmsToShow,
//   onShowMore: REDUCER.onShowMore
// });


const mapDispatchToProps = (dispatch) => ({
  onShowMore() {
    dispatch(ActionCreator.showMore());
  }
});

CatalogMore.propTypes = {
  films: PropTypes.arrayOf(filmProp).isRequired,
  filmsToShow: PropTypes.number.isRequired,
  onShowMore: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(CatalogMore);
