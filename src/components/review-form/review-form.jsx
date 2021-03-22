import React, {useState} from "react";
import {useDispatch} from "react-redux";

import ApiService from "../../store/api-actions";

import Rating from "../rating/rating";

const apiService = new ApiService();

const ReviewForm = ({filmId}) => {

  const dispatch = useDispatch();

  const [textComment, setTextComment] = useState(null);
  const [commentRating, setCommentRating] = useState(null);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch(apiService.pushComment({
      id: filmId,
      comment: textComment,
      rating: +commentRating
    }));
  };

  return (
    <form
    action=""
    className="add-review__form"
    onSubmit={handleSubmit}>
    <Rating setCommentRating={setCommentRating} />

    <div className="add-review__text">
      <textarea
        onChange={({target}) => setTextComment(target.value)}
        className="add-review__textarea"
        name="review-text"
        id="review-text"
        placeholder="Review text"></textarea>
      <div className="add-review__submit">
        <button
          className="add-review__btn"
          type="submit">
            Post
        </button>
      </div>

    </div>
  </form>
  )
}

export default ReviewForm;
