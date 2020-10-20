import React from "react";
import PropTypes from "prop-types";
import moment from "moment";

const ReviewsList = (props) => {
  const {reviews} = props;

  return (
    <React.Fragment>
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {
          reviews.map((review, i) => {
            return (
              <li key={review + i} className="reviews__item">
                <div className="reviews__user user">
                  <div className="reviews__avatar-wrapper user__avatar-wrapper">
                    <img className="reviews__avatar user__avatar" src={review.avatar} width="54" height="54" alt="Reviews avatar" />
                  </div>
                  <span className="reviews__user-name">
                    {review.name}
                  </span>
                </div>
                <div className="reviews__info">
                  <div className="reviews__rating rating">
                    <div className="reviews__stars rating__stars">
                      <span style={{width: review.rating}}></span>
                      <span className="visually-hidden">Rating</span>
                    </div>
                  </div>
                  <p className="reviews__text">
                    {review.text}
                  </p>
                  <time className="reviews__time" dateTime={moment(review.date).format(`YYYY-MM-DD`)}>{moment(review.date).format(`MMMM YYYY`)}</time>
                </div>
              </li>
            );
          })
        }
      </ul>
    </React.Fragment>
  );
};

ReviewsList.propTypes = {
  reviews: PropTypes.array.isRequired,
};

export default ReviewsList;
