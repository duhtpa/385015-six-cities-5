import React, {PureComponent} from 'react';

const withFormFeedback = (Component) => {
  class WithFormFeedback extends PureComponent {
    constructor(props) {
      super(props);
      this.handleTextChange = this.handleTextChange.bind(this);
      this.handleChangeRating = this.handleChangeRating.bind(this);

      this.state = {
        rating: 0,
        text: ``,
      };
    }

    handleTextChange(evt) {
      const value = evt.target.value;

      this.setState(() => ({
        text: value,
      }));
    }

    handleChangeRating(evt) {
      const value = evt.target.value;

      this.setState(() => ({
        rating: value,
      }));
    }

    render() {
      const {rating, text} = this.state;

      return (
        <Component
          {...this.props}
          rating={rating}
          text={text}
          handleTextChange={this.handleTextChange}
          handleChangeRating={this.handleChangeRating}
        />
      );
    }
  }

  WithFormFeedback.propTypes = {};

  return WithFormFeedback;
};

export default withFormFeedback;
