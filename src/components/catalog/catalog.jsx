import React from 'react';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import GenresList from '../genres-list/genres-list';
import CardsList from '../cards-list/cards-list';
import CatalogMore from '../catalog-more/catalog-more';
import ApiService from "../../store/api-actions";
import filmProp from '../film/film.prop';
import { ActionType } from '../../store/action';

const apiService = new ApiService();

const Catalog = ({films, isDataLoaded, filmsToShow, loadFilmData}) => {

  const filmsShow = films
        .map(ApiService.adaptToClient)
        .slice(0, filmsToShow);

  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>

      <GenresList />
      <CardsList films={filmsShow} isDataLoaded={isDataLoaded} filmsToShow={filmsToShow} loadFilmData={loadFilmData} />
      <CatalogMore />

    </section>
  );
};

Catalog.propTypes = {
  films: PropTypes.arrayOf(filmProp).isRequired,
  isDataLoaded: PropTypes.bool.isRequired,
  loadFilmData: PropTypes.func.isRequired,
  filmsToShow: PropTypes.number.isRequired,
};

const mapStateToProps = ({filteredFilms, isDataLoaded, filmsToShow}) => {
  return {
    films: filteredFilms,
    isDataLoaded,
    filmsToShow,
  };
};

const mapDispatchToProps = (dispatch) => ({
  // проблема
  loadFilmData() {
    dispatch(apiService.fetchFilmsList());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Catalog);
