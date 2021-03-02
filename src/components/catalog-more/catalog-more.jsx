import React from "react";
import PropTypes from "prop-types";
import filmProp from '../film/film.prop';

const CatalogMore = ({films, showedFilms, onShowMore}) => {

  if (showedFilms > films.length) {
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

CatalogMore.propTypes = {
  films: PropTypes.arrayOf(filmProp).isRequired,
  showedFilms: PropTypes.number.isRequired,
  onShowMore: PropTypes.func.isRequired
};

export default CatalogMore;
