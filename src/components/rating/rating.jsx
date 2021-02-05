import React from 'react';

const Rating = () => {
  return (
    <div className="rating">
      <div className="rating__stars">
        <input className="rating__input" id="star-1" type="radio" name="rating" value="1"/>
        <label className="rating__label" htmlFor="star-1">Rating 1</label>

        <input className="rating__input" id="star-2" type="radio" name="rating" value="2" />
        <label className="rating__label" htmlFor="star-2">Rating 2</label>

        <input className="rating__input" id="star-3" type="radio" name="rating" value="3" defaultChecked />
        <label className="rating__label" htmlFor="star-3">Rating 3</label>

        <input className="rating__input" id="star-4" type="radio" name="rating" value="4" />
        <label className="rating__label" htmlFor="star-4">Rating 4</label>

        <input className="rating__input" id="star-5" type="radio" name="rating" value="5" />
        <label className="rating__label" htmlFor="star-5">Rating 5</label>
      </div>
    </div>
  );
};

export default Rating;
