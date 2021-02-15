import React from "react";
import PropTypes from "prop-types";
import FilmNav from "../film-nav/film-nav";
import moment from 'moment';
import reviewsProp from "./reviews.prop";

const FilmReviews = ({path, reviews}) => {
  const startReviews = reviews.slice(0, Math.round((reviews.length / 2)));
  const endReviews = reviews.slice(Math.round((reviews.length / 2)));

  return (
    <React.Fragment>
      <FilmNav path={path} />
      <div className="movie-card__reviews movie-card__row">
        {reviews.length === 1 ? <div className="movie-card__reviews-col">
          {reviews.map(({description, author, rating, date, id}) => (
            <div className="review" key={id}>
              <blockquote className="review__quote">
                <p className="review__text">{description}</p>

                <footer className="review__details">
                  <cite className="review__author">{author}</cite>
                  <time className="review__date" dateTime={moment(date).format()}>{moment(date).format(`MMMM Do YYYY`)}</time>
                </footer>
              </blockquote>

              <div className="review__rating">{rating}</div>
            </div>

          ))}
        </div> :
          <React.Fragment>
            <div className="movie-card__reviews-col">
              {startReviews.map(({description, author, rating, date, id}) => (
                <div className="review" key={id}>
                  <blockquote className="review__quote">
                    <p className="review__text">{description}</p>

                    <footer className="review__details">
                      <cite className="review__author">{author}</cite>
                      <time className="review__date" dateTime={moment(date).format()}>{moment(date).format(`MMMM Do YYYY`)}</time>
                    </footer>
                  </blockquote>

                  <div className="review__rating">{rating}</div>
                </div>

              ))}
            </div>
            <div className="movie-card__reviews-col">
              {endReviews.map(({description, author, rating, date, id}) => (
                <div className="review" key={id}>
                  <blockquote className="review__quote">
                    <p className="review__text">{description}</p>

                    <footer className="review__details">
                      <cite className="review__author">{author}</cite>
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
  reviews: PropTypes.arrayOf(reviewsProp).isRequired
};

export default FilmReviews;
