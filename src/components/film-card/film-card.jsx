import React, {useState} from "react";
import {useSelector} from "react-redux";

import FilmNav from '../film-nav/film-nav';
import FilmOverview from '../film-overview/film-overview';
import FilmDetails from '../film-details/film-details';
import FilmReviews from '../film-reviews/film-reviews';

const FilmCard = () => {

  const currentFilm = useSelector(({FILM}) => FILM.currentFilm);
  const currentFilmComments = useSelector(({FILM}) => FILM.currentFilmComments);

  const {id} = currentFilm;

  const movieOverview = <FilmOverview film={currentFilm}/>;

  const movieDetails = <FilmDetails film={currentFilm} />;

  const movieReviews = <FilmReviews
    reviews={currentFilmComments}
    id={id}
  />;

  const [activeTab, setActiveTab] = useState(movieOverview);

  return (
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
  );
};

export default FilmCard;
