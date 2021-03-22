import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";

import ApiService from "../../store/api-actions";

import Logo from '../logo/logo';
import UserBlock from "../user-block/user-block";
import LoadingScreen from '../loading-screen/loading-screen';
import ReviewForm from '../review-form/review-form';

const apiService = new ApiService();

const PageLogo = <Logo />;

const AddReview = ({filmId}) => {

  const currentFilm = useSelector(({FILM}) => FILM.currentFilm);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!currentFilm) {
      dispatch(apiService.fetchFilm(filmId));
    }
  }, [currentFilm, filmId]);

  if (!currentFilm) {
    return (
      <LoadingScreen />
    );
  }

  const {title, poster, backgroundImg, background} = currentFilm;

  return (
    <section
      className="movie-card movie-card--full"
      style={{backgroundColor: background}}
    >
      <div className="movie-card__header">
        <div className="movie-card__bg">
          <img src={backgroundImg} alt={title} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          {PageLogo}

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={`/films/${filmId}`} className="breadcrumbs__link">{title}</Link>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>

          <UserBlock />
        </header>

        <div className="movie-card__poster movie-card__poster--small">
          <img src={poster} alt={`${title} poster`} width="218" height="327" />
        </div>
      </div>

      <div className="add-review">
        <ReviewForm filmId={filmId} />
      </div>

    </section>
  );
};

AddReview.propTypes = {
  filmId: PropTypes.number.isRequired
};

export default AddReview;
