import React, {PureComponent} from "react";
import {connect} from 'react-redux';
import PropTypes from "prop-types";

import {ActionCreator} from '../../store/action';

import {SORTING_TYPES} from "../../const";

class SortingOptions extends PureComponent {
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
      <form className="places__sorting" action="#" method="get">
        <span className="places__sorting-caption">Sort by</span>
        <span
          className="places__sorting-type"
          tabIndex="0"
          onClick={handleOpenSorting}
        >
          {this.state.activeSorting}
          <svg className="places__sorting-arrow" width="7" height="4">
            <use xlinkHref="#icon-arrow-select"></use>
          </svg>
        </span>
        <ul className={`places__options places__options--custom ${this.state.isOpenSorting ? `places__options--opened` : ``}`}>
          {SORTING_TYPES.map((item) => (
            <li
              key={item.type}
              // className={`places__option ${item.type === currentSorting ? `places__option--active` : ``}`}
              className={`places__option`}
              tabIndex="0"
              onClick={() => handleClickSorting(item.type)}
            >
              {item.title}
            </li>
          ))}
        </ul>
        {/* <select className="places__sorting-type" id="places-sorting">
          <option className="places__option" value="popular" selected="">Popular</option>
          <option className="places__option" value="to-high">Price: low to high</option>
          <option className="places__option" value="to-low">Price: high to low</option>
          <option className="places__option" value="top-rated">Top rated first</option>
        </select> */}
      </form>
    );
  }
}

SortingOptions.propTypes = {
  onSortingTypeClick: PropTypes.func.isRequired,
};

const {setSortingTypeAction} = ActionCreator;

const mapStateToProps = ({sortingType}) => ({sortingType});

const mapDispatchToProps = (dispatch) => ({
  onSortingTypeClick: (sortingType) => dispatch(setSortingTypeAction(sortingType)),
});

export {SortingOptions};
export default connect(mapStateToProps, mapDispatchToProps)(SortingOptions);
