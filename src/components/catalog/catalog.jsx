import React from 'react';
import PropTypes from "prop-types";
import GenresList from '../genres-list/genres-list';
import CardsList from '../cards-list/cards-list';
import CatalogMore from '../catalog-more/catalog-more';

const Catalog = ({films}) => {
  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>

      <GenresList />

      <CardsList films={films} />

      <CatalogMore />
    </section>
  );
};

Catalog.propTypes = {
  films: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired
};

export default Catalog;
