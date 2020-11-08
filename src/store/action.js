export const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  GET_OFFERS_LIST: `GET_OFFERS_LIST`,
  SET_SORTING_TYPE: `SET_SORTING_TYPE`,
  SET_ACTIVE_ITEM: `SET_ACTIVE_ITEM`
};

export const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city,
  }),

  getOffersList: () => ({
    type: ActionType.GET_OFFERS_LIST,
  }),

  setSortingTypeAction: (sortingType) => ({
    type: ActionType.SET_SORTING_TYPE,
    payload: sortingType,
  }),

  setActiveItem: (id) => ({
    type: ActionType.SET_ACTIVE_ITEM,
    payload: id,
  }),
};
