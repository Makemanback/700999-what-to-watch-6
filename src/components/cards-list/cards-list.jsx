import React, {useEffect} from "react";
import PropTypes from "prop-types";

import filmProp from '../film/film.prop';

import LoadingScreen from '../loading-screen/loading-screen';
import SmallCardContainer from "../small-card-container/small-card-container";

const CardsList = ({films, loadMovieData, filmId}) => {

  useEffect(() => {
    if (!films) {
      loadMovieData(filmId);
    }
  }, [films]);


  if (!films) {
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
  loadMovieData: PropTypes.func.isRequired,
  filmId: PropTypes.number,
};

export default CardsList;
