import React from 'react';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import GenresList from '../genres-list/genres-list';
import CardsList from '../cards-list/cards-list';
import CatalogMore from '../catalog-more/catalog-more';
import filmProp from '../film/film.prop';
import {ActionCreator} from '../../store/action';

const Catalog = ({films, onShowMore, showedFilms}) => {
  const filmsToSHow = films.slice(0, showedFilms);

  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>

      <GenresList />

      <CardsList films={filmsToSHow} />

      <CatalogMore
        films={films}
        showedFilms={showedFilms}
        onShowMore={() => onShowMore()}
      />
    </section>
  );
};

const mapStateToProps = ({filteredFilms, showedFilms}) => {
  return {
    films: filteredFilms,
    showedFilms
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onShowMore: () => dispatch(ActionCreator.showMore())
  };
};


Catalog.propTypes = {
  films: PropTypes.arrayOf(filmProp).isRequired,
  showedFilms: PropTypes.number.isRequired,
  onShowMore: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Catalog);
