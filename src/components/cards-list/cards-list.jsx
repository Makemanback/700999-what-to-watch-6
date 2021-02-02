import React from "react";
import PropTypes from "prop-types";
import SmallCard from "../small-card/small-card";

const CardsList = ({films}) => {

  return (
    <div className="catalog__movies-list">

      {
        films.map(({id, image, title}) => {
          return (
            <SmallCard key={id} image={image} title={title} />
          );
        })
      }

    </div>
  );
};

CardsList.propTypes = {
  films: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired
};

export default CardsList;

