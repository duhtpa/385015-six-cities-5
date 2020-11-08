import React from 'react';
import PropTypes from 'prop-types';

import {CITIES} from '../../const';

const CityList = ({city, onCityClick}) => {
  return (
    <ul className="locations__list tabs__list">
      {CITIES.map((item) => (
        <li
          key={item.city}
          className="locations__item"
        >
          <a
            className={`locations__item-link tabs__item ${city === item.city ? `tabs__item--active` : ``}`}
            href="#"
            onClick={(evt) => {
              evt.preventDefault();
              onCityClick(item.city);
            }}
          >
            <span>{item.city}</span>
          </a>
        </li>
      ))}
    </ul>
  );
};

CityList.propTypes = {
  city: PropTypes.string.isRequired,
  onCityClick: PropTypes.func.isRequired,
};

export default CityList;
