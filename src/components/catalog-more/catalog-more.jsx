import React from "react";

const CatalogMore = ({onShowMore}) => {

  return (
    <div className="catalog__more">
      <button
        onClick={() => onShowMore()}
        className="catalog__button" type="button">Show more</button>
    </div>
  );
};

export default CatalogMore;
