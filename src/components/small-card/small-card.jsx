import React, {useEffect, useState} from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import ApiService from "../../store/api-actions";

import Video from "../video/video";
import browserHistory from "../../browser-history";

const apiService = new ApiService();

const SmallCard = ({id, image, title, handleHoverCard, handleHoverOutCard, handleClickCard, isVideo}) => {

  return (
    <article
      onMouseOver={handleHoverCard}
      onMouseLeave={handleHoverOutCard}
      onClick={handleClickCard}
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
          className="small-movie-card__link"
          to={`/films/${id}`}>
          {title}
        </Link>
      </h3>
    </article>
  );
};

const SmallCardContainer = ({id, image, title, onClickFilm}) => {

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

    onClickFilm(id);
    browserHistory.push(`/films/${id}`);
    apiService.fetchFilmId(id);
    apiService.fetchFilm(id);
    apiService.fetchFilmComments(id);

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
      handleClickCard={handleClickCard}
      isVideo={isVideo} />
  );
};


SmallCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
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
  handleClickCard: PropTypes.func.isRequired,
  onClickFilm: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => ({
  onClickFilm(id) {
    dispatch(apiService.fetchFilm(id));
  }
});

export default connect(null, mapDispatchToProps)(SmallCardContainer);

