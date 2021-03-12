import React from "react";
import PropTypes from "prop-types";

const Video = ({title, video}) => {

  return (
    <video muted autoPlay src={video} alt={title} width="280" height="175"></video>
  );
};

Video.propTypes = {
  title: PropTypes.string.isRequired,
  video: PropTypes.string.isRequired,
};

export default Video;
