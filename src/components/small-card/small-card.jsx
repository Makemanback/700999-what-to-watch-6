import React, {useEffect, useState} from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import Video from "../video/video";

const SmallCard = ({id, image, title, handleHoverCard, handleHoverOutCard, isVideo}) => {

  return (
    <article
      onMouseOver={handleHoverCard}
      onMouseLeave={handleHoverOutCard}
      className="small-movie-card catalog__movies-card">
      <div className="small-movie-card__image">
        {isVideo ?
          <Video title={title} /> :
          <img
            src={image}
            alt={title}
            width="280"
            height="175" />}
      </div>
      <h3 className="small-movie-card__title">
        <Link
          onClick={() => {}}
          className="small-movie-card__link"
          to={`/films/${id}`}>
          {title}
        </Link>
      </h3>
    </article>
  );
};

const SmallCardContainer = ({id, image, title}) => {
  const [isVideo, setVideo] = useState(false);
  let timeOutId = null;

  const handleHoverCard = () => {
    if (timeOutId !== null) {
      clearTimeout(timeOutId);
    }

    timeOutId = setTimeout(
        () => {
          setVideo(true);
        }, 1000
    );
  };

  const handleHoverOutCard = () => {
    clearTimeout(timeOutId);
    timeOutId = null;
    setVideo(false);
  };

  useEffect(() => {
    return () => clearTimeout(timeOutId);
  });

  return (
    <SmallCard
      id={id}
      image={image}
      title={title}
      handleHoverCard={handleHoverCard}
      handleHoverOutCard={handleHoverOutCard}
      isVideo={isVideo} />
  );
};


SmallCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  handleHoverCard: PropTypes.func.isRequired,
  handleHoverOutCard: PropTypes.func.isRequired,
  isVideo: PropTypes.bool.isRequired
};

SmallCardContainer.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

// export default SmallCard;
export default SmallCardContainer;

