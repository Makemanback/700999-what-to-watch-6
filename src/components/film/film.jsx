import React, {useState} from "react";
import PropTypes from "prop-types";

import filmProp from "./film.prop";

import Footer from '../footer/footer';
import Logo from '../logo/logo';
import CardsList from '../cards-list/cards-list';
import MovieCardButtons from '../movie-card-buttons/movie-card-buttons';
import UserBlock from '../user-block/user-block';
import FilmNav from "../film-nav/film-nav";

const PageLogo = <Logo />;
const User = <UserBlock />;
const PageFooter = <Footer />;

const Film = ({
  filmId,
  loadFilmsData,
  authorizationStatus,
  filmsToShow,
  exactFilms,
  movieOverview,
  movieDetails,
  movieReviews,
  background,
  backgroundImg,
  title,
  poster,
  filmGenre,
  released,
  id,
}) => {

  const [activeTab, setActiveTab] = useState(movieOverview);

  return (
    <React.Fragment>
      <section
        className="movie-card movie-card--full"
        style={{backgroundColor: background}}
      >
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img src={backgroundImg} alt={title} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header movie-card__head">
            {PageLogo}

            {User}
          </header>

          <div className="movie-card__wrap">
            <div className="movie-card__desc">
              <h2 className="movie-card__title">{title}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{filmGenre}</span>
                <span className="movie-card__year">{released}</span>
              </p>

              <MovieCardButtons authorizationStatus={authorizationStatus} id={filmId} />
            </div>
          </div>
        </div>

        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              <img src={poster} alt={`${title} poster`} width="218" height="327" />
            </div>

            <div className="movie-card__desc">

              <FilmNav
                id={id}
                setActiveTab={setActiveTab}
                movieOverview={movieOverview}
                movieDetails={movieDetails}
                movieReviews={movieReviews}
                activeTab={activeTab} />

              {activeTab}

            </div>
          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <CardsList
            films={exactFilms}
            filmsToShow={filmsToShow}
            loadMovieData={loadFilmsData}
            filmId={filmId} />

        </section>

        {PageFooter}
      </div>
    </React.Fragment>
  );
};

Film.propTypes = {
  currentFilm: filmProp,
  loadFilmsData: PropTypes.func.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  filmsToShow: PropTypes.number.isRequired,
  exactFilms: PropTypes.arrayOf(filmProp).isRequired,
  movieOverview: PropTypes.object,
  movieDetails: PropTypes.object,
  movieReviews: PropTypes.object,
  background: PropTypes.string.isRequired,
  backgroundImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  filmGenre: PropTypes.string.isRequired,
  released: PropTypes.number.isRequired,
  filmId: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired
};

export default Film;
