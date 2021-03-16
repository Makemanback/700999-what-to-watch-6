import React from 'react';
import PropTypes from "prop-types";
import {connect} from "react-redux";

import {ratings} from '../../const';
import {ActionCreator} from '../../store/action';

const RatingStar = ({item, setCurrentRate}) => {
  return (
    <>
      <input
        onClick={setCurrentRate}
        className="rating__input"
        id={`star-${item}`}
        type="radio"
        name="rating"
        value={item}/>
      <label
        className="rating__label"
        htmlFor={`star-${item}`}>
          Rating {item}
      </label>
    </>
  );
};

const Rating = ({setRating}) => {

  const setCurrentRate = (evt) => setRating(evt.target.value);

  return (
    <div className="rating">
      <div className="rating__stars">
        {ratings.map((item, index) => {
          return (
            <RatingStar key={index} item={item} setCurrentRate={setCurrentRate} />
          );
        })}
      </div>
    </div>
  );
};

Rating.propTypes = {
  setRating: PropTypes.func.isRequired
};

RatingStar.propTypes = {
  item: PropTypes.number.isRequired,
  setCurrentRate: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => ({
  setRating(rating) {
    dispatch(ActionCreator.setCommentRating(rating));
  }
});

export default connect(null, mapDispatchToProps)(Rating);
