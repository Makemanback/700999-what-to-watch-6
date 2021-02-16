import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {Path} from "../app/app";

const FilmNav = ({path, id}) => {

  const {FILM_ID, MOVIE_DETAILS, MOVIE_REVIEWS} = Path;
  const link = `link`;
  const item = `item`;

  const getClass = (way, name) => path === way ? `movie-nav__${name} movie-nav__item--active` : `movie-nav__${name}`;

  return (
    <nav className="movie-nav movie-card__nav">
      <ul className="movie-nav__list">
        <li className={getClass(FILM_ID, item)}>
          <Link to={`/films/${id}`} className={getClass(FILM_ID, link)}>Overview</Link>
        </li>
        <li className={getClass(MOVIE_DETAILS, item)}>
          <Link to={`/films/${id}/details`} className={getClass(MOVIE_DETAILS, link)}>Details</Link>
        </li>
        <li className={getClass(MOVIE_REVIEWS, item)}>
          <Link to={`/films/${id}/reviews`} className={getClass(MOVIE_REVIEWS, link)}>Reviews</Link>
        </li>
      </ul>
    </nav>
  );
};

FilmNav.propTypes = {
  path: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
};

export default FilmNav;
