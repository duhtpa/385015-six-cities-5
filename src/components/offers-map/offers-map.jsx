import React, {createRef, PureComponent} from 'react';
import {connect} from 'react-redux';

import PropTypes from 'prop-types';

import {CITIES} from '../../const';
import {getIconUrl} from '../../utils';

import leaflet from "leaflet";

const zoom = 12;
const leafletIconSize = [23, 30];

export class OffersMap extends PureComponent {
  constructor(props) {
    super(props);
    this._mapRef = createRef();
    this._map = null;
  }

  componentDidMount() {
    const {offers, activeOffer, selectedCity} = this.props;
    this._currentCityInfo = CITIES.find((item) => item.city === selectedCity);

    this._map = leaflet.map(this._mapRef.current, {
      center: this._currentCityInfo.coords,
      zoom,
      zoomControl: false,
      marker: true
    });

    this._map.setView(this._currentCityInfo.coords, zoom);

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(this._map);

    offers.map((offer) => {
      let coords = [offer.location.latitude, offer.location.longitude];

      const icon = leaflet.icon({
        iconUrl: getIconUrl(offer.id, activeOffer),
        iconSize: leafletIconSize
      });

      leaflet
      .marker(coords, {icon})
      .addTo(this._map);
    });
  }

  componentDidUpdate() {
    const {offers, activeOffer, selectedCity} = this.props;
    let {coords} = CITIES.find((item) => item.city === selectedCity);

    if (this._currentCityInfo.coords !== coords) {
      this._currentCityInfo = CITIES.find((item) => item.city === selectedCity);

      this._map.remove();

      this._map = leaflet.map(this._mapRef.current, {
        center: this._currentCityInfo.coords,
        zoom,
        zoomControl: false,
        marker: true
      });

      this._map.setView(this._currentCityInfo.coords, zoom);

      leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(this._map);

      this._map.setView(this._currentCityInfo.coords, zoom);
    }

    offers.map((offer) => {
      coords = [offer.location.latitude, offer.location.longitude];

      const icon = leaflet.icon({
        iconUrl: getIconUrl(offer.id, activeOffer),
        iconSize: leafletIconSize
      });

      leaflet
      .marker(coords, {icon})
      .addTo(this._map);
    });
  }

  render() {
    return (
      <div
        ref={this._mapRef}
        id="map"
        style={{height: `100%`}}
      />
    );
  }
}

OffersMap.propTypes = {
  offers: PropTypes.array.isRequired,
  activeOffer: PropTypes.number.isRequired,
  selectedCity: PropTypes.string.isRequired,
};

const mapStateToProps = ({activeOffer, selectedCity}) => ({activeOffer, selectedCity});

// export default OffersMap;
export default connect(mapStateToProps)(OffersMap);
