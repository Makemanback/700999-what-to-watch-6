import React, {useEffect, useRef} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";

import ApiService from "../../store/api-actions";
import filmProp from "../film/film.prop";
import {ActionCreator} from "../../store/action";

import Logo from '../logo/logo';
import Rating from "../rating/rating";
import UserBlock from "../user-block/user-block";
import LoadingScreen from '../loading-screen/loading-screen';

const apiService = new ApiService();

const AddReview = ({
  currentFilm,
  filmId,
  loadFilmsData,
  isFilmLoaded,
  postComment,
  setCommentText,
  pushingCommentRating,
  pushingCommentText}) => {
  const commentTextRef = useRef();

  useEffect(() => {
    if (!currentFilm) {
      loadFilmsData(filmId);
    }
  }, [currentFilm, filmId]);

  if (!isFilmLoaded) {
    return (
      <LoadingScreen />
    );
  }

  const film = ApiService.adaptToClient(currentFilm);
  const {title, poster, backgroundImg, background} = film;

  const changeCommentText = (evt) => setCommentText(evt.target.value);

  const handleSubmit = (evt) => {
    evt.preventDefault();

    postComment({
      id: filmId,
      comment: pushingCommentText,
      rating: +pushingCommentRating,
    });
  };

  return (
    <section
      className="movie-card movie-card--full"
      style={{backgroundColor: background}}
    >
      <div className="movie-card__header">
        <div className="movie-card__bg">
          <img src={backgroundImg} alt={title} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <Logo />

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={`/films/${filmId}`} className="breadcrumbs__link">{title}</Link>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>

          <UserBlock />
        </header>

        <div className="movie-card__poster movie-card__poster--small">
          <img src={poster} alt={`${title} poster`} width="218" height="327" />
        </div>
      </div>

      <div className="add-review">
        <form
          action=""
          className="add-review__form"
          onSubmit={handleSubmit}>
          <Rating />

          <div className="add-review__text">
            <textarea
              ref={commentTextRef}
              onChange={changeCommentText}
              className="add-review__textarea"
              name="review-text"
              id="review-text"
              placeholder="Review text"></textarea>
            <div className="add-review__submit">
              <button
                className="add-review__btn"
                type="submit">
                  Post
              </button>
            </div>

          </div>
        </form>
      </div>

    </section>
  );
};

AddReview.propTypes = {
  title: PropTypes.string,
  currentFilm: filmProp,
  loadFilmsData: PropTypes.func.isRequired,
  isFilmLoaded: PropTypes.bool.isRequired,
  postComment: PropTypes.func.isRequired,
  setCommentText: PropTypes.func.isRequired,
  pushingCommentRating: PropTypes.number,
  pushingCommentText: PropTypes.string,
  filmId: PropTypes.number.isRequired
};

const mapStateToProps = ({
  currentFilm,
  isFilmLoaded,
  pushingCommentRating,
  pushingCommentText}) => ({
  currentFilm,
  isFilmLoaded,
  pushingCommentRating,
  pushingCommentText,
});

const mapDispatchToProps = (dispatch) => ({
  loadFilmsData(id) {
    dispatch(apiService.fetchFilm(id));
    dispatch(apiService.fetchFilmId(id));
    dispatch(apiService.fetchFilmsList());
  },
  postComment(commentData) {
    dispatch(apiService.pushComment(commentData));
  },
  setCommentText(text) {
    dispatch(ActionCreator.setCommentText(text));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(AddReview);
