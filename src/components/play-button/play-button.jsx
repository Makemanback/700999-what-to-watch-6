import React from "react";
import PropTypes from "prop-types";

const PlayButton = ({isPlaying}) => {

  if (isPlaying) {
    return (
      <svg viewBox="0 0 19 19" width="19" height="19">
        <use xlinkHref="#play-s"/>
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 19 19" width="19" height="19">
      <use xlinkHref="#pause"/>
    </svg>
  );
};

PlayButton.propTypes = {
  isPlaying: PropTypes.bool.isRequired
};

export default PlayButton;
