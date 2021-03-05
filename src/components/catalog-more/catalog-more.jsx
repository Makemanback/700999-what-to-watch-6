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

const mapStateToProps = ({filteredFilms, filmsToShow, onShowMore}) => {
  return {
    films: filteredFilms,
    filmsToShow,
    onShowMore
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onShowMore: () => dispatch(ActionCreator.showMore())
  };
};

CatalogMore.propTypes = {
  films: PropTypes.arrayOf(filmProp).isRequired,
  filmsToShow: PropTypes.number.isRequired,
  onShowMore: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(CatalogMore);
