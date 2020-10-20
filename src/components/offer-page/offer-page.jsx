import React from "react";
import PropTypes from "prop-types";
import {Link} from 'react-router-dom';

import OfferList from "../offer-list/offer-list";
import OffersMap from "../offers-map/offers-map";
// import moment from "moment";

import FormFeedback from "../form-feedback/form-feedback";
import ReviewsList from "../reviews-list/reviews-list";

const OfferPage = (props) => {
  const {offer, offersClosely} = props;
  const ratingInPercent = offer.rating * 20 + `%`;

  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link
                className="header__logo-link"
                to="/"
              >
                <img className="header__logo" src="/img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </Link>
              {/* <a className="header__logo-link" href="main.html">
                <img className="header__logo" src="/img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </a> */}
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {
                offer.photos.map((photo, i) => {
                  return (
                    <div key={photo + i} className="property__image-wrapper">
                      <img className="property__image" src={photo} alt="Photo studio" />
                    </div>
                  );
                })
              }
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {(offer.premium)
                ? <div className="property__mark"><span>Premium</span></div>
                : ``}
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {offer.title}
                </h1>
                <button className={
                  offer.favorite
                    ? `property__bookmark-button property__bookmark-button--active button`
                    : `property__bookmark-button button`
                } type="button">
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: ratingInPercent}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{offer.rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {offer.typePlace.name}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {offer.bedroomsCount} Bedroom{offer.bedroomsCount > 1 ? `s` : ``}
                </li>
                <li className="property__feature property__feature--adults">
                  Max {offer.guestsCount} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{offer.price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {
                    offer.items.map((item, i) => {
                      return (
                        <li key={item + i} className="property__inside-item">
                          {item}
                        </li>
                      );
                    })
                  }
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="property__avatar user__avatar" src={offer.owner.avatar} width="74" height="74" alt="Host avatar" />
                  </div>
                  <span className="property__user-name">
                    {offer.owner.name}
                  </span>
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {offer.description}
                  </p>
                  <p className="property__text">
                    An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.
                  </p>
                </div>
              </div>
              <section className="property__reviews reviews">
                <ReviewsList
                  reviews={offer.reviews}
                />;
                <FormFeedback />;
              </section>
            </div>
          </div>
          <section className="property__map map">
            <OffersMap
              offers={offersClosely}
            />
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              <OfferList
                offers={offersClosely}
              />;
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

OfferPage.propTypes = {
  offer: PropTypes.shape({
    bedroomsCount: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    guestsCount: PropTypes.number.isRequired,
    items: PropTypes.array.isRequired,
    favorite: PropTypes.number.isRequired,
    owner: PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
    photos: PropTypes.array.isRequired,
    premium: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.string.isRequired,
    reviews: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
    typePlace: PropTypes.shape({
      name: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  offersClosely: PropTypes.array.isRequired,
};

export default OfferPage;
