import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {showMore} from '../../store/action';

const CatalogMore = () => {

  const dispatch = useDispatch();

  const filmsToShow = useSelector(({ALL_FILMS}) => ALL_FILMS.filmsToShow);
  const filteredFilms = useSelector(({ALL_FILMS}) => ALL_FILMS.filteredFilms);

  if (filmsToShow > filteredFilms.length) {
    return null;
  }

  return (
    <div className="catalog__more">
      <button
        onClick={() => dispatch(showMore())}
        className="catalog__button" type="button">Show more</button>
    </div>
  );
};

export default CatalogMore;
