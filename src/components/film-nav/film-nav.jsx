import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

import {Path} from '../../const';

const FilmNav = ({
  id,
  Tabs,
  activeTab,
  setActiveTab}) => {

  const link = `link`;
  const item = `item`;

  const getClass = (way, name) => activeTab === way ? `movie-nav__${name} movie-nav__item--active` : `movie-nav__${name}`;

  const tabHandler = (evt, tab) => {
    evt.preventDefault();
    setActiveTab(tab);
  };

  return (
    <nav className="movie-nav movie-card__nav">
      <ul className="movie-nav__list">
        <li className={getClass(Tabs.OVERVIEW, item)}>
          <Link
            to={Path.FILMS + id}
            onClick={(evt) => tabHandler(evt, Tabs.OVERVIEW)}
            className={getClass(Tabs.OVERVIEW, link)}>
              Overview
          </Link>
        </li>
        <li className={getClass(Tabs.DETAILS, item)}>
          <Link
            to={Path.FILMS + id}
            onClick={(evt) => tabHandler(evt, Tabs.DETAILS)}
            className={getClass(Tabs.DETAILS, link)}>
              Details
          </Link>
        </li>
        <li className={getClass(Tabs.REVIEWS, item)}>
          <Link
            to={Path.FILMS + id}
            onClick={(evt) => tabHandler(evt, Tabs.REVIEWS)}
            className={getClass(Tabs.REVIEWS, link)}>
              Reviews
          </Link>
        </li>
      </ul>
    </nav>
  );
};

FilmNav.propTypes = {
  id: PropTypes.number.isRequired,
  Tabs: PropTypes.object.isRequired,
  setActiveTab: PropTypes.func.isRequired,
  activeTab: PropTypes.string.isRequired,
};

export default FilmNav;
