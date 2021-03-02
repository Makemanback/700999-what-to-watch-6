import React from 'react';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import GenresList from '../genres-list/genres-list';
import CardsList from '../cards-list/cards-list';
import CatalogMore from '../catalog-more/catalog-more';
import filmProp from '../film/film.prop';
import {ActionCreator} from '../../store/action';

const Catalog = ({films, onShowMore}) => {

  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>

      <GenresList />

      <CardsList films={films} />

      <CatalogMore onShowMore={() => onShowMore()}/>
    </section>
  );
};

const mapStateToProps = ({filteredFilms}) => {
  return {
    films: filteredFilms
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onShowMore: () => dispatch(ActionCreator.showMore())
  };
};


Catalog.propTypes = {
  films: PropTypes.arrayOf(filmProp).isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Catalog);
