import React from "react";
import PropTypes from "prop-types";

const Video = (props) => {
  return (
    <video muted controls autoPlay src='https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4' alt={props.title} width="280" height="175"></video>
  );
};

Video.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Video;
