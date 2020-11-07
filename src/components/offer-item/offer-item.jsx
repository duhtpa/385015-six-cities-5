import React from "react";
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from "prop-types";

import {ActionCreator} from '../../store/action';

const OfferItem = (props) => {
  const {onMouseEnterItem, offer} = props;
  const ratingInPercent = offer.rating * 20 + `%`;

  const handleMouseEnterItem = () => {
    onMouseEnterItem(offer.id);
  };

  const handleMouseLeaveItem = () => {
    onMouseEnterItem(-1);
  };

  return (
    <article
      className="cities__place-card place-card"
      onMouseEnter={handleMouseEnterItem}
      onMouseLeave={handleMouseLeaveItem}
    >
      {(offer.premium)
        ? <div className="place-card__mark"><span>Premium</span></div>
        : ``}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link
          to={`/offer/` + offer.id}
        >
          <img className="place-card__image" src={offer.photos[0]} width="260" height="200" alt="Place image" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={
            offer.favorite
              ? `place-card__bookmark-button place-card__bookmark-button--active button`
              : `place-card__bookmark-button button`
          } type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: ratingInPercent}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link
            to={`/offer/` + offer.id}
          >
            {offer.title}
          </Link>
        </h2>
        <p className="place-card__type">{offer.typePlace.name}</p>
      </div>
    </article>
  );
};

OfferItem.propTypes = {
  onMouseEnterItem: PropTypes.func.isRequired,
  offer: PropTypes.shape({
    favorite: PropTypes.number.isRequired,
    id: PropTypes.any.isRequired,
    photos: PropTypes.array,
    premium: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    typePlace: PropTypes.shape({
      name: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

const {setActiveItem} = ActionCreator;

const mapStateToProps = ({}) => ({});

const mapDispatchToProps = (dispatch) => ({
  onMouseEnterItem: (id) => dispatch(setActiveItem(id)),
});

export {OfferItem};
export default connect(mapStateToProps, mapDispatchToProps)(OfferItem);
