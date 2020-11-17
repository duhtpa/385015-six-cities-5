import React from "react";
import PropTypes from "prop-types";

import {SORTING_TYPES} from "../../const";

const SortingOptions = (props) => {
  const {
    isOpenSorting,
    activeSorting,
    handleOpenSorting,
    handleClickSorting,
  } = props;

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span
        className="places__sorting-type"
        tabIndex="0"
        onClick={handleOpenSorting}
      >
        {activeSorting}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${isOpenSorting ? `places__options--opened` : ``}`}>
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
  // }
};

SortingOptions.propTypes = {
  isOpenSorting: PropTypes.bool.isRequired,
  activeSorting: PropTypes.string.isRequired,
  handleOpenSorting: PropTypes.func.isRequired,
  handleClickSorting: PropTypes.func.isRequired,
};

export default SortingOptions;
