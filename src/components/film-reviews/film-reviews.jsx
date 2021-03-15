import React from "react";
import PropTypes from "prop-types";
import moment from 'moment';

import ApiService from "../../store/api-actions";
import reviewsProp from "./reviews.prop";

import FilmNav from "../film-nav/film-nav";

const FilmReviews = ({path, reviews, id}) => {

  if (!reviews) {
    return <FilmNav id={id} path={path} />
  }

  const comments = reviews
    .map(ApiService.adaptReviewToClient);

  const startReviews = comments.slice(0, Math.round((comments.length / 2)));
  const endReviews = comments.slice(Math.round((comments.length / 2)));

  return (
    <React.Fragment>
      <FilmNav id={id} path={path} />
      <div className="movie-card__reviews movie-card__row">
        {comments.length === 1
        ? <div className="movie-card__reviews-col">
          {comments.map(({comment, user, rating, date, reviewId}) => (
            <div className="review" key={reviewId}>
              <blockquote className="review__quote">
                <p className="review__text">{comment}</p>

                <footer className="review__details">
                  <cite className="review__user">{user.name}</cite>
                  <time className="review__date" dateTime={moment(date).format()}>{moment(date).format(`MMMM Do YYYY`)}</time>
                </footer>
              </blockquote>

              <div className="review__rating">{rating}</div>
            </div>

          ))}
        </div>
        : <React.Fragment>
            <div className="movie-card__reviews-col">
              {startReviews.map(({comment, user, rating, date, reviewId}) => (
                <div className="review" key={reviewId}>
                  <blockquote className="review__quote">
                    <p className="review__text">{comment}</p>

                    <footer className="review__details">
                      <cite className="review__user">{user.name}</cite>
                      <time className="review__date" dateTime={moment(date).format()}>{moment(date).format(`MMMM Do YYYY`)}</time>
                    </footer>
                  </blockquote>

                  <div className="review__rating">{rating}</div>
                </div>

              ))}
            </div>
            <div className="movie-card__reviews-col">
              {endReviews.map(({comment, user, rating, date, reviewId}) => (
                <div className="review" key={reviewId}>
                  <blockquote className="review__quote">
                    <p className="review__text">{comment}</p>

                    <footer className="review__details">
                      <cite className="review__user">{user.name}</cite>
                      <time className="review__date" dateTime={moment(date).format()}>{moment(date).format(`MMMM Do YYYY`)}</time>
                    </footer>
                  </blockquote>

                  <div className="review__rating">{rating}</div>
                </div>

              ))}
            </div>
          </React.Fragment>
        }
      </div>
    </React.Fragment>
  );
};

FilmReviews.propTypes = {
  path: PropTypes.string.isRequired,
  reviews: PropTypes.arrayOf(reviewsProp),
  id: PropTypes.number.isRequired
};

export default FilmReviews;
