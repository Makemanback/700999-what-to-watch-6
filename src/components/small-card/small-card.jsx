import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

import {Path} from '../../const';

import Video from "../video/video";

const {FILMS} = Path;

const SmallCard = ({
  id,
  image,
  title,
  video,
  handleHoverCard,
  handleHoverOutCard,
  handleClickCard,
  isVideo}) => {

  return (
    <article
      onMouseOver={handleHoverCard}
      onMouseLeave={handleHoverOutCard}
      onClick={handleClickCard}
      className="small-movie-card catalog__movies-card">
      <div className="small-movie-card__image">
        {isVideo
          ? <Video
            title={title}
            video={video} />
          : <img
            src={image}
            alt={title}
            width="280"
            height="175" />}
      </div>
      <h3 className="small-movie-card__title">
        <Link
          className="small-movie-card__link"
          to={FILMS + id}>
          {title}
        </Link>
      </h3>
    </article>
  );
};

SmallCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  video: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  handleHoverCard: PropTypes.func.isRequired,
  handleHoverOutCard: PropTypes.func.isRequired,
  handleClickCard: PropTypes.func.isRequired,
  isVideo: PropTypes.bool.isRequired
};

export default SmallCard;

