import React from 'react';
import {useSelector, useDispatch} from "react-redux";

import ApiService from "../../store/api-actions";

import GenresList from '../genres-list/genres-list';
import CardsList from '../cards-list/cards-list';
import CatalogMore from '../catalog-more/catalog-more';

const apiService = new ApiService();

const Catalog = () => {

  const {filteredFilms: films, filmsToShow} = useSelector(({ALL_FILMS}) => ALL_FILMS);

  const dispatch = useDispatch();
  const loadFilmData = () => dispatch(apiService.fetchFilmsList());

  const filmsShow = films.slice(0, filmsToShow);

  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>

      <GenresList />
      <CardsList
        films={filmsShow}
        filmsToShow={filmsToShow}
        loadMovieData={loadFilmData} />
      <CatalogMore />

    </section>
  );
};

export default Catalog;
