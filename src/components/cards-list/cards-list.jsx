import React, {useEffect} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import ApiService from "../../store/api-actions";

import filmProp from '../film/film.prop';
import LoadingScreen from '../loading-screen/loading-screen';
import SmallCardContainer from "../small-card/small-card";

const apiService = new ApiService();

const CardsList = ({films, isDataLoaded, filmsToShow, onLoadData, exactFilms, path}) => {

  useEffect(() => {
    if (!isDataLoaded) {
      onLoadData();
    }
  }, [isDataLoaded]);

  if (!isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }


  const filmsShow = path === undefined ?
    films
    .map(ApiService.adaptToClient)
    .slice(0, filmsToShow) :
    exactFilms;

  return (
    <div className="catalog__movies-list">

      {
        filmsShow.map(({id, image, title}) => {
          return (
            <SmallCardContainer key={id} id={id} image={image} title={title} />
          );
        })
      }

    </div>
  );
};

CardsList.propTypes = {
  films: PropTypes.arrayOf(filmProp).isRequired,
  exactFilms: PropTypes.arrayOf(filmProp).isRequired,
  isDataLoaded: PropTypes.bool.isRequired,
  filmsToShow: PropTypes.number.isRequired,
  onLoadData: PropTypes.func.isRequired,
  path: PropTypes.string.isRequired
};

const mapStateToProps = ({filteredFilms, isDataLoaded, filmsToShow}) => {
  return {
    films: filteredFilms,
    isDataLoaded,
    filmsToShow,
  };
};

const mapDispatchToProps = (dispatch) => ({
  onLoadData() {
    dispatch(apiService.fetchFilmsList());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CardsList);

