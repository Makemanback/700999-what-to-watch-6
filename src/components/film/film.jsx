import React from "react";
import PropTypes from "prop-types";
import Footer from '../footer/footer';
import Logo from '../logo/logo';
import CardsList from '../cards-list/cards-list';
import MovieCardButtons from '../movie-card-buttons/movie-card-buttons';
import UserBlock from '../user-block/user-block';
import filmProp from "./film.prop";
import FilmOverview from "../film-overview/film-overview";
import FilmDetails from "../film-details/film-details";
import {Path} from "../app/app";
import FilmReviews from "../film-reviews/film-reviews";

const Film = ({films, path}) => {
  const exactFilms = films.slice(0, 4);
  const {image, title, genre, released, reviews} = films[0];


  const {FilmId, MovieDetails, MovieReviews} = Path;

  const movieOverview = path === FilmId ? <FilmOverview
    film={films[0]}
    path={path}
  /> : null;

  const movieDetails = path === MovieDetails ? <FilmDetails
    film={films[0]}
    path={path}
  /> : null;

  const movieReviews = path === MovieReviews ? <FilmReviews
    path={path}
    reviews={reviews}
  /> : null;

  return (
    <React.Fragment>
      <section className="movie-card movie-card--full">
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img src={image} alt={title} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header movie-card__head">
            <Logo />

            <UserBlock />
          </header>

          <div className="movie-card__wrap">
            <div className="movie-card__desc">
              <h2 className="movie-card__title">{title}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{genre}</span>
                <span className="movie-card__year">{released}</span>
              </p>

              <MovieCardButtons />
            </div>
          </div>
        </div>

        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              <img src={image} alt={`${title} poster`} width="218" height="327" />
            </div>

            <div className="movie-card__desc">

              {movieOverview}
              {movieDetails}
              {movieReviews}

            </div>
          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <CardsList films={exactFilms}/>

        </section>

        <Footer />
      </div>
    </React.Fragment>
  );
};

Film.propTypes = {
  films: PropTypes.arrayOf(filmProp).isRequired,
  path: PropTypes.string.isRequired
};


export default Film;
