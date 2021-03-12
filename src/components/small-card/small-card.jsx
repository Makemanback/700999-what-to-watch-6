import React, {useEffect, useState} from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

import Video from "../video/video";
import browserHistory from "../../browser-history";


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
          to={`/films/${id}`}>
          {title}
        </Link>
      </h3>
    </article>
  );
};

const SmallCardContainer = ({id, image, title, video}) => {
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

  const handleClickCard = () => {
    return browserHistory.push(`/films/${id}`);
  };

  useEffect(() => {
    return () => clearTimeout(timeOutId);
  });

  return (
    <SmallCard
      id={id}
      image={image}
      title={title}
      video={video}
      handleHoverCard={handleHoverCard}
      handleHoverOutCard={handleHoverOutCard}
      handleClickCard={handleClickCard}
      isVideo={isVideo} />
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

SmallCardContainer.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  video: PropTypes.string.isRequired,
};

export default SmallCardContainer;

