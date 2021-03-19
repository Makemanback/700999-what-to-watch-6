import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";

import ApiService from "../../store/api-actions";

import Logo from '../logo/logo';
import Rating from "../rating/rating";
import UserBlock from "../user-block/user-block";
import LoadingScreen from '../loading-screen/loading-screen';

const apiService = new ApiService();

const PageLogo = <Logo />;

const AddReview = ({filmId}) => {

  const currentFilm = useSelector(({FILM}) => FILM.currentFilm);

  const dispatch = useDispatch();

  const [textComment, setTextComment] = useState(null);
  const [commentRating, setCommentRating] = useState(null);

  useEffect(() => {
    if (!currentFilm) {
      dispatch(apiService.fetchFilm(filmId));
    }
  }, [currentFilm, filmId]);

  if (!currentFilm) {
    return (
      <LoadingScreen />
    );
  }

  const {title, poster, backgroundImg, background} = currentFilm;

  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch(apiService.pushComment({
      id: filmId,
      comment: textComment,
      rating: +commentRating
    }));
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
          {PageLogo}

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
          <Rating setCommentRating={setCommentRating} />

          <div className="add-review__text">
            <textarea
              onChange={({target}) => setTextComment(target.value)}
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
  filmId: PropTypes.number.isRequired
};

export default AddReview;
