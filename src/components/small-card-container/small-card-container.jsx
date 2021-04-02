import React, {useEffect, useState} from "react";
import PropTypes from "prop-types";

import browserHistory from "../../browser-history";
import {Path} from '../../const';

import SmallCard from '../small-card/small-card';

const {FILMS} = Path;

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
    return browserHistory.push(FILMS + id);
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

SmallCardContainer.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  video: PropTypes.string.isRequired,
};

export default SmallCardContainer;
