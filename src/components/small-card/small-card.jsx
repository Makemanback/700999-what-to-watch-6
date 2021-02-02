import React from "react";
import PropTypes from "prop-types";

const SmallCard = ({image, title}) => {
  return (
    <article className="small-movie-card catalog__movies-card">
      <div className="small-movie-card__image">
        <img src={image} alt={title} width="280" height="175" />
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href="movie-page.html">{title}</a>
      </h3>
    </article>
  );
};

SmallCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};

export default SmallCard;

