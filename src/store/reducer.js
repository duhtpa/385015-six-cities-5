import {extend} from "../utils";
import {ActionType} from "./action";
import offers from "../mocks/offers";
import {CITIES} from "../const";

const initialState = {
  city: CITIES[0],
  offers: offers.filter((offer) => offer.location.city === CITIES[0]),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return extend(state, {
        city: action.payload,
        offers: offers.filter((offer) => offer.location.city === action.payload),
      });

    case ActionType.GET_OFFERS_LIST:
      return extend(state, {
        offers: offers[state.city],
      });
  }

  return state;
};

export {reducer};
