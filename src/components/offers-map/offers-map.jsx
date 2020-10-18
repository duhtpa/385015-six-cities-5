import React, {createRef, PureComponent} from 'react';
import PropTypes from 'prop-types';
import leaflet from "leaflet";

export default class OffersMap extends PureComponent {
  constructor(props) {
    super(props);
    this._mapRef = createRef();
    this._map = null;
  }

  componentDidMount() {
    const {offers} = this.props;

    const city = [52.38333, 4.9];

    const icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [23, 30]
    });

    const zoom = 12;
    this._map = leaflet.map(this._mapRef.current, {
      center: city,
      zoom,
      zoomControl: false,
      marker: true
    });
    this._map.setView(city, zoom);

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(this._map);

    offers.map((offer) => {
      const coords = [offer.location.latitude, offer.location.longitude];
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
};
