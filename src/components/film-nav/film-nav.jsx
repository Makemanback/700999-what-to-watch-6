import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {Path} from "../app/app";

const FilmNav = ({path}) => {

  const {filmId, filmDetails, filmReviews} = Path;
  const Items = {
    link: `link`,
    item: `item`
  };
  const {link, item} = Items;

  const getClass = (way, name) => path === way ? `movie-nav__${name} movie-nav__item--active` : `movie-nav__${name}`;

  return (
    <nav className="movie-nav movie-card__nav">
      <ul className="movie-nav__list">
        <li className={getClass(filmId, item)}>
          <Link to="/films/22" className={getClass(filmId, link)}>Overview</Link>
        </li>
        <li className={getClass(filmDetails, item)}>
          <Link to="/films/22/details" className={getClass(filmDetails, link)}>Details</Link>
        </li>
        <li className={getClass(filmReviews, item)}>
          <Link to="/films/22/reviews" className={getClass(filmReviews, link)}>Reviews</Link>
        </li>
      </ul>
    </nav>
  );
};

FilmNav.propTypes = {
  path: PropTypes.string.isRequired
};

export default FilmNav;
