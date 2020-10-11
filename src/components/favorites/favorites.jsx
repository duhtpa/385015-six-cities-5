import React from "react";
import {Link} from 'react-router-dom';
import PropTypes from "prop-types";

const Favorites = (props) => {
  const {offers} = props;

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
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              <li className="favorites__locations-items">
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <a className="locations__item-link" href="#">
                      <span>Amsterdam</span>
                    </a>
                  </div>
                </div>
                <div className="favorites__places">
                  <article
                    className="favorites__card place-card"
                  >
                    <div className="favorites__image-wrapper place-card__image-wrapper">
                      <Link
                        to={`/offer/` + offers[1].id}
                      >
                        <img className="place-card__image" src={offers[1].photos[0]} width="150" height="110" alt="Place image"/>
                      </Link>
                    </div>
                    <div className="favorites__card-info place-card__info">
                      <div className="place-card__price-wrapper">
                        <div className="place-card__price">
                          <b className="place-card__price-value">&euro;{offers[1].price}</b>
                          <span className="place-card__price-text">&#47;&nbsp;night</span>
                        </div>
                        <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
                          <svg className="place-card__bookmark-icon" width="18" height="19">
                            <use xlinkHref="#icon-bookmark"></use>
                          </svg>
                          <span className="visually-hidden">In bookmarks</span>
                        </button>
                      </div>
                      <div className="place-card__rating rating">
                        <div className="place-card__stars rating__stars">
                          <span style={{width: offers[1].rating * 20 + `%`}}></span>
                          <span className="visually-hidden">Rating</span>
                        </div>
                      </div>
                      <h2 className="place-card__name">
                        <Link
                          to={`/offer/` + offers[1].id}
                        >
                          {offers[1].title}
                        </Link>
                      </h2>
                      <p className="place-card__type">{offers[1].typePlace.name}</p>
                    </div>
                  </article>

                  <article
                    className="favorites__card place-card"
                  >
                    <div className="favorites__image-wrapper place-card__image-wrapper">
                      <Link
                        to={`/offer/` + offers[2].id}
                      >
                        <img className="place-card__image" src={offers[2].photos[0]} width="150" height="110" alt="Place image"/>
                      </Link>
                    </div>
                    <div className="favorites__card-info place-card__info">
                      <div className="place-card__price-wrapper">
                        <div className="place-card__price">
                          <b className="place-card__price-value">&euro;{offers[2].price}</b>
                          <span className="place-card__price-text">&#47;&nbsp;night</span>
                        </div>
                        <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
                          <svg className="place-card__bookmark-icon" width="18" height="19">
                            <use xlinkHref="#icon-bookmark"></use>
                          </svg>
                          <span className="visually-hidden">In bookmarks</span>
                        </button>
                      </div>
                      <div className="place-card__rating rating">
                        <div className="place-card__stars rating__stars">
                          <span style={{width: offers[2].rating * 20 + `%`}}></span>
                          <span className="visually-hidden">Rating</span>
                        </div>
                      </div>
                      <h2 className="place-card__name">
                        <Link
                          to={`/offer/` + offers[2].id}
                        >
                          {offers[2].title}
                        </Link>
                      </h2>
                      <p className="place-card__type">{offers[2].typePlace.name}</p>
                    </div>
                  </article>
                </div>
              </li>

              <li className="favorites__locations-items">
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <a className="locations__item-link" href="#">
                      <span>Cologne</span>
                    </a>
                  </div>
                </div>
                <div className="favorites__places">
                  <article
                    className="favorites__card place-card"
                  >
                    <div className="favorites__image-wrapper place-card__image-wrapper">
                      <Link
                        to={`/offer/` + offers[0].id}
                      >
                        <img className="place-card__image" src={offers[0].photos[0]} width="150" height="110" alt="Place image"/>
                      </Link>
                    </div>
                    <div className="favorites__card-info place-card__info">
                      <div className="place-card__price-wrapper">
                        <div className="place-card__price">
                          <b className="place-card__price-value">&euro;{offers[0].price}</b>
                          <span className="place-card__price-text">&#47;&nbsp;night</span>
                        </div>
                        <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
                          <svg className="place-card__bookmark-icon" width="18" height="19">
                            <use xlinkHref="#icon-bookmark"></use>
                          </svg>
                          <span className="visually-hidden">In bookmarks</span>
                        </button>
                      </div>
                      <div className="place-card__rating rating">
                        <div className="place-card__stars rating__stars">
                          <span style={{width: offers[0].rating * 20 + `%`}}></span>
                          <span className="visually-hidden">Rating</span>
                        </div>
                      </div>
                      <h2 className="place-card__name">
                        <Link
                          to={`/offer/` + offers[0].id}
                        >
                          {offers[0].title}
                        </Link>
                      </h2>
                      <p className="place-card__type">{offers[0].typePlace.name}</p>
                    </div>
                  </article>
                </div>
              </li>
            </ul>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <Link
          className="footer__logo-link"
          to="/"
        >
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
        </Link>
      </footer>
    </div>
  );
};

Favorites.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.any.isRequired,
    photos: PropTypes.array,
    price: PropTypes.number.isRequired,
    rating: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    typePlace: PropTypes.shape({
      name: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
    }).isRequired,
  })).isRequired,
};

export default Favorites;
