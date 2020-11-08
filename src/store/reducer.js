import {extend, getSortedOffers} from "../utils";
import {ActionType} from "./action";
import offers from "../mocks/offers";
import {CITIES} from "../const";

const initialState = {
  city: CITIES[0].city,
  offers: offers.filter((offer) => offer.location.city === CITIES[0].city),
  selectedCity: CITIES[0].city,
  activeOffer: -1,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return extend(state, {
        city: action.payload,
        offers: offers.filter((offer) => offer.location.city === action.payload),
        selectedCity: action.payload,
      });

    case ActionType.GET_OFFERS_LIST:
      return extend(state, {
        offers: offers.filter((offer) => offer.location.city === state.city),
      });

    case ActionType.SET_SORTING_TYPE:
      return extend(state, {
        offers: getSortedOffers(offers.filter((offer) => offer.location.city === state.city), action.payload),
      });

    case ActionType.SET_ACTIVE_ITEM:
      return extend(state, {
        activeOffer: action.payload,
      });
  }

  return state;
};

export {reducer};
