import React from "react";
import PropTypes from "prop-types";
import moment from 'moment';
import FilmNav from "../film-nav/film-nav";
import reviewsProp from "./reviews.prop";
import ApiService from "../../store/api-actions";

const FilmReviews = ({path, reviews, id}) => {
  const comments = ApiService.adaptReviewToClient(reviews);

  const startReviews = comments.slice(0, Math.round((reviews.length / 2)));
  const endReviews = comments.slice(Math.round((reviews.length / 2)));


  return (
    <React.Fragment>
      <FilmNav id={id} path={path} />
      <div className="movie-card__reviews movie-card__row">
        {reviews.length === 1 ? <div className="movie-card__reviews-col">
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
        </div> :
          <React.Fragment>
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
  reviews: PropTypes.arrayOf(reviewsProp).isRequired,
  id: PropTypes.number.isRequired
};

export default FilmReviews;
