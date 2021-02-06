import React from "react";
import PropTypes from "prop-types";
import MovieCardInfo from '../movie-card-info/movie-card-info';
import Logo from '../logo/logo';
import UserBlock from "../user-block/user-block";

const MovieCard = ({title, genre, year}) => {
  return (
    <section className="movie-card">
      <div className="movie-card__bg">
        <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <header className="page-header movie-card__head">
        <Logo />

        <UserBlock />
      </header>

      <MovieCardInfo title={title} genre={genre} year={year} />
    </section>
  );
};

MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
};

export default MovieCard;
