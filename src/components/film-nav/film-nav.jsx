import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {Path} from "../app/app";

const FilmNav = ({path}) => {

  const {FilmId, MovieDetails, MovieReviews} = Path;
  const link = `link`;
  const item = `item`;

  const getClass = (way, name) => path === way ? `movie-nav__${name} movie-nav__item--active` : `movie-nav__${name}`;

  return (
    <nav className="movie-nav movie-card__nav">
      <ul className="movie-nav__list">
        <li className={getClass(FilmId, item)}>
          <Link to="/films/:id" className={getClass(FilmId, link)}>Overview</Link>
        </li>
        <li className={getClass(MovieDetails, item)}>
          <Link to="/films/:id/details" className={getClass(MovieDetails, link)}>Details</Link>
        </li>
        <li className={getClass(MovieReviews, item)}>
          <Link to="/films/:id/reviews" className={getClass(MovieReviews, link)}>Reviews</Link>
        </li>
      </ul>
    </nav>
  );
};

FilmNav.propTypes = {
  path: PropTypes.string.isRequired
};

export default FilmNav;
