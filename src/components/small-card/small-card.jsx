import React, {useEffect, useState} from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import Video from "../video/video";

const SmallCard = ({id, image, title}) => {

  const [isVideo, setVideo] = useState(false);
  let timeOutId = null;

  const _handleHoverCard = () => {
    if (timeOutId !== null) {
      clearTimeout(timeOutId);
    }

    timeOutId = setTimeout(
        () => {
          setVideo(true);
        }, 1000
    );
  };

  const _handleHoverOutCard = () => {
    clearTimeout(timeOutId);
    timeOutId = null;
    setVideo(false);
  };

  useEffect(() => {
    return () => clearTimeout(timeOutId);
  });

  // const onClick = () => ;

  return (
    <article
      onMouseOver={_handleHoverCard} onMouseLeave={_handleHoverOutCard}
      className="small-movie-card catalog__movies-card">
      <div className="small-movie-card__image">
        {isVideo ? <Video title={title} /> : <img src={image} alt={title} width="280" height="175" />}
      </div>
      <h3 className="small-movie-card__title">
        <Link onClick={() => {}} className="small-movie-card__link" to={`/films/${id}`}>{title}</Link>
      </h3>
    </article>
  );
};

SmallCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
};

export default SmallCard;

