import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import OfferItem from "../offer-item/offer-item";

class OfferList extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {offers} = this.props;

    return <React.Fragment>
      {
        offers.map((offer, i) => {
          return (
            <OfferItem
              offer={offer}
              key={offer + i}
            />
          );
        })
      }
    </React.Fragment>;
  }
}

OfferList.propTypes = {
  offers: PropTypes.array.isRequired,
};

export default OfferList;
