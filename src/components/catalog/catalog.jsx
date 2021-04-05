import React from 'react';
import {useSelector, useDispatch} from "react-redux";
import {getFilteredFilms} from '../../store/all-films/selectors';

import ApiService from "../../store/api-actions";

import GenresList from '../genres-list/genres-list';
import CardsList from '../cards-list/cards-list';
import CatalogMore from '../catalog-more/catalog-more';
import LoadingScreen from '../loading-screen/loading-screen';

const apiService = new ApiService();

const Catalog = () => {
  const allFilmsStore = useSelector(({ALL_FILMS}) => ALL_FILMS);
  const {filmsToShow} = allFilmsStore;

  const filteredFilms = getFilteredFilms(allFilmsStore);

  const dispatch = useDispatch();
  const loadFilmData = () => dispatch(apiService.fetchFilmsList());

  if (!filteredFilms) {
    return (
      <LoadingScreen />
    );
  }

  const filmsShow = filteredFilms.slice(0, filmsToShow);

  return (
    <section className="catalog" data-testid="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>

      <GenresList />
      <CardsList
        films={filmsShow}
        loadMovieData={loadFilmData} />
      <CatalogMore />

    </section>
  );
};

export default Catalog;
