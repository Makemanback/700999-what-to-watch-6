import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

import {Path} from '../../const';

const FilmNav = ({
  id,
  movieOverview,
  movieDetails,
  movieReviews,
  activeTab,
  setActiveTab}) => {

  const link = `link`;
  const item = `item`;
  const FilmTab = {
    OVERVIEW: `FilmOverview`,
    DETAILS: `FilmDetails`,
    REVIEWS: `FilmReviews`
  };
  const {FILMS} = Path;

  const getClass = (way, name) => activeTab.type.name === way ? `movie-nav__${name} movie-nav__item--active` : `movie-nav__${name}`;

  const tabHandler = (evt, tab) => {
    evt.preventDefault();
    setActiveTab(tab);
  };
  return (
    <nav className="movie-nav movie-card__nav">
      <ul className="movie-nav__list">
        <li className={getClass(FilmTab.OVERVIEW, item)}>
          <Link
            to={FILMS + id}
            onClick={(evt) => tabHandler(evt, movieOverview)}
            className={getClass(FilmTab.OVERVIEW, link)}>
              Overview
          </Link>
        </li>
        <li className={getClass(FilmTab.DETAILS, item)}>
          <Link
            to={FILMS + id}
            onClick={(evt) => tabHandler(evt, movieDetails)}
            className={getClass(FilmTab.DETAILS, link)}>
              Details
          </Link>
        </li>
        <li className={getClass(FilmTab.REVIEWS, item)}>
          <Link
            to={FILMS + id}
            onClick={(evt) => tabHandler(evt, movieReviews)}
            className={getClass(FilmTab.REVIEWS, link)}>
              Reviews
          </Link>
        </li>
      </ul>
    </nav>
  );
};

FilmNav.propTypes = {
  id: PropTypes.number.isRequired,
  movieDetails: PropTypes.object.isRequired,
  movieOverview: PropTypes.object.isRequired,
  movieReviews: PropTypes.object.isRequired,
  activeTab: PropTypes.object.isRequired,
  setActiveTab: PropTypes.func.isRequired,
};

export default FilmNav;
