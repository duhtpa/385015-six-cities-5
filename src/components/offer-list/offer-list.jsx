import React from "react";
import PropTypes from "prop-types";
import OfferItem from "../offer-item/offer-item";

import withOfferList from "../../hocs/with-offer-list/with-offer-list";

const OfferItemWrapper = withOfferList(OfferItem);

const OfferList = (props) => {
  const {offers} = props;

  return <React.Fragment>
    {
      offers.map((offer, i) => {
        return (
          <OfferItemWrapper
            offer={offer}
            key={offer + i}
          />
        );
      })
    }
  </React.Fragment>;
};

OfferList.propTypes = {
  offers: PropTypes.array.isRequired,
};

export default OfferList;
