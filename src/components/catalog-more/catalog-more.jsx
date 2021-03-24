import React from "react";
import {useDispatch, useSelector} from "react-redux";

import {getFilteredFilms} from '../../store/all-films/selectors';
import {showMore} from '../../store/action';

const CatalogMore = () => {

  const dispatch = useDispatch();

  const allFilmsStore = useSelector(({ALL_FILMS}) => ALL_FILMS);
  const {filmsToShow} = allFilmsStore;

  const filteredFilms = getFilteredFilms(allFilmsStore);

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
