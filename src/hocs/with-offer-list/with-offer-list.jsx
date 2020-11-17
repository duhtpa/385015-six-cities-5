import React, {PureComponent} from 'react';

const withOfferList = (Component) => {
  class WithOfferList extends PureComponent {
    constructor(props) {
      super(props);
    }

    render() {
      return (
        <Component
          {...this.props}
        />
      );
    }
  }

  WithOfferList.propTypes = {};

  return WithOfferList;
};

export default withOfferList;
