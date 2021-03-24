import React, {useState} from "react";
import {useSelector} from "react-redux";

import FilmNav from '../film-nav/film-nav';
import FilmOverview from '../film-overview/film-overview';
import FilmDetails from '../film-details/film-details';
import FilmReviews from '../film-reviews/film-reviews';

const FilmCard = () => {

  const Tabs = {
    OVERVIEW: `OVERVIEW`,
    DETAILS: `DETAILS`,
    REVIEWS: `REVIEWS`
  };

  const currentFilm = useSelector(({FILM}) => FILM.currentFilm);
  const currentFilmComments = useSelector(({FILM}) => FILM.currentFilmComments);

  const {id} = currentFilm;

  const [activeTab, setActiveTab] = useState(Tabs.OVERVIEW);

  let tab;

  switch (activeTab) {
    case Tabs.OVERVIEW:
      tab = <FilmOverview film={currentFilm}/>;
      break;
    case Tabs.DETAILS:
      tab = <FilmDetails film={currentFilm} />;
      break;
    case Tabs.REVIEWS:
      tab = <FilmReviews
        reviews={currentFilmComments}
        id={id}
      />;
      break;
    default:
      tab = <FilmOverview film={currentFilm}/>;
  }


  return (
    <div className="movie-card__desc">
      <FilmNav
        id={id}
        setActiveTab={setActiveTab}
        Tabs={Tabs}
        activeTab={activeTab} />
      {tab}

    </div>
  );
};

export default FilmCard;
