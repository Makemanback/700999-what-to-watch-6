import React from "react";
import PropTypes from "prop-types";
import moment from 'moment';

import reviewsProp from "./reviews.prop";

const FilmReviews = ({reviews}) => {
  if (!reviews) {
    return null;
  }

  const startReviews = reviews.slice(0, Math.round((reviews.length / 2)));
  const endReviews = reviews.slice(Math.round((reviews.length / 2)));

  return (
    <>
      <div className="movie-card__reviews movie-card__row">
        {reviews.length === 1
          ? <div className="movie-card__reviews-col">
            {reviews.map(({comment, user, rating, date, reviewId}) => (
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
    </>
  );
};

FilmReviews.propTypes = {
  reviews: PropTypes.arrayOf(reviewsProp),
  id: PropTypes.number
};

export default FilmReviews;
