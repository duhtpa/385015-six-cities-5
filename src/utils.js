export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export const getSortedOffers = (offers, sortingType) => {
  switch (sortingType) {
    case `price_to_high`:
      return offers.slice().sort((a, b) => (a.price - b.price));

    case `price_to_low`:
      return offers.slice().sort((a, b) => (b.price - a.price));

    case `top_rated`:
      return offers.slice().sort((a, b) => (b.rating - a.rating));

    default:
      return offers;
  }
};

export const getIconUrl = (id, activeOffer) => {
  return id === activeOffer ? `/img/pin-active.svg` : `/img/pin.svg`;
};
