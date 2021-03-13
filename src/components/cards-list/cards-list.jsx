import React, {useEffect} from "react";
import PropTypes from "prop-types";

import filmProp from '../film/film.prop';
import LoadingScreen from '../loading-screen/loading-screen';
import SmallCardContainer from "../small-card/small-card";

const CardsList = ({films, isDataLoaded, loadFilmsData, loadFilmData, filmId}) => {

  useEffect(() => {
    if (!isDataLoaded) {
      loadFilmData();
      loadFilmsData(filmId);
    }
  }, [isDataLoaded]);


  if (!isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <div className="catalog__movies-list">

      {
        films.map(({id, image, title, video}) => {
          return (
            <SmallCardContainer key={id} id={id} image={image} title={title} video={video} />
          );
        })
      }

    </div>
  );
};

CardsList.propTypes = {
  films: PropTypes.arrayOf(filmProp).isRequired,
  isDataLoaded: PropTypes.bool.isRequired,
  // loadData: PropTypes.func.isRequired,
  filmId: PropTypes.number,
};

export default CardsList;

