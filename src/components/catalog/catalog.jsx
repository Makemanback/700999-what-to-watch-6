import React from 'react';
import GenresList from '../genres-list/genres-list';
import CardsList from '../cards-list/cards-list';
import CatalogMore from '../catalog-more/catalog-more';


const Catalog = () => {

  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>

      <GenresList />
      <CardsList />
      <CatalogMore />

    </section>
  );
};

export default Catalog;
