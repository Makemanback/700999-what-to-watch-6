import React, {useEffect} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import ApiService from "../../store/api-actions";

import filmProp from '../film/film.prop';
import LoadingScreen from '../loading-screen/loading-screen';
import SmallCardContainer from "../small-card/small-card";

const apiSevice = new ApiService();

const CardsList = ({films, isDataLoaded, filmsToShow, onLoadData}) => {


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


  const filmsShow = films
    .map(ApiService.adaptToClient)
    .slice(0, filmsToShow);

  // filmsShow.map(({genre}) => {
  //   switch (genre) {
  //     case genre === 'Comedy':
  //       genre = 'Comedies';
  //     case genre === 'Action':
  //       genre === '';
  //     case genre === 'Drama':
  //       genre === 'Dramas';
  //     case genre === 'Crime':
  //       genre === 'Crime';
  //     case genre === 'Dramas':
  //   }
  // })

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

const mapStateToProps = ({filteredFilms, isDataLoaded, filmsToShow}) => {
  return {
    films: filteredFilms,
    isDataLoaded,
    filmsToShow,
  };
};

const mapDispatchToProps = (dispatch) => ({
  onLoadData() {
    dispatch(apiSevice.fetchFilmsList());
  },
});

CardsList.propTypes = {
  films: PropTypes.arrayOf(filmProp).isRequired,
  isDataLoaded: PropTypes.bool.isRequired,
  filmsToShow: PropTypes.number.isRequired,
  onLoadData: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(CardsList);

