import React from "react";
import PropTypes from "prop-types";
import SmallCard from "../small-card/small-card";
import filmProp from '../film/film.prop';

const CardsList = ({films}) => {

  return (
    <div className="catalog__movies-list">

      {
        films.map(({id, image, title}) => {
          return (
            <SmallCard key={id} id={id} image={image} title={title} />
          );
        })
      }

    </div>
  );
};

CardsList.propTypes = {
  films: PropTypes.arrayOf(filmProp).isRequired
};

export default CardsList;

