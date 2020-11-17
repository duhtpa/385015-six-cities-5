import React, {PureComponent} from 'react';

import PropTypes from "prop-types";

import {SORTING_TYPES} from "../../const";

const withSortingOptions = (Component) => {
  class WithSortingOptions extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isOpenSorting: false,
        activeSorting: `Popular`,
      };
    }

    render() {
      const {onSortingTypeClick} = this.props;

      const handleOpenSorting = () => {
        this.setState(() => ({
          isOpenSorting: !this.state.isOpenSorting,
        }));
      };

      const handleClickSorting = (type) => {
        this.setState(() => ({
          isOpenSorting: !this.state.isOpenSorting,
          activeSorting: SORTING_TYPES[SORTING_TYPES.findIndex((it) => it.type === type)].title,
        }));

        onSortingTypeClick(type);
      };

      return (
        <Component
          {...this.props}
          isOpenSorting={this.state.isOpenSorting}
          activeSorting={this.state.activeSorting}
          handleOpenSorting={handleOpenSorting}
          handleClickSorting={handleClickSorting}
        />
      );
    }
  }

  WithSortingOptions.propTypes = {
    onSortingTypeClick: PropTypes.string.isRequired,
  };

  return WithSortingOptions;
};

export default withSortingOptions;
