import React, {memo} from 'react';
import PropTypes from "prop-types";

import {RATINGS} from '../../const';

export const RatingStar = ({item, setCommentRating}) => {

  return (
    <>
      <input
        onClick={({target}) => setCommentRating(target.value)}
        className="rating__input"
        id={`star-${item}`}
        type="radio"
        name="rating"
        value={item}
        data-testid="rating"/>
      <label
        className="rating__label"
        htmlFor={`star-${item}`}>
          Rating {item}
      </label>
    </>
  );
};

const Rating = ({setCommentRating}) => {

  return (
    <div className="rating">
      <div className="rating__stars">
        {RATINGS.map((item, index) => {
          return (
            <RatingStar key={index} item={item} setCommentRating={setCommentRating} />
          );
        })}
      </div>
    </div>
  );
};

Rating.propTypes = {
  setCommentRating: PropTypes.func.isRequired
};

RatingStar.propTypes = {
  item: PropTypes.number.isRequired,
  setCommentRating: PropTypes.func.isRequired
};

export default memo(Rating, (prevProps, nextProps) => {
  return prevProps.setCommentRating === nextProps.setCommentRating;
});
