import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import DetailMarker from './DetailMarker'

class DetailMap extends Component {
  static defaultProps = {
    center: {
      lat: 52.515,
      lng: 13.413
    },
    zoom: 14
  };

  render() {
    const center = {
      lat: this.props.meetup.venue.lat,
      lng: this.props.meetup.venue.lon
    }

    return (
      <div style={{ height: '20vh', width: '50vw' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyAEUohQUFe7FN0U53ksF9RadGLmb4zpNE4' }}
          defaultCenter={center}
          defaultZoom={this.props.zoom}
        >
          <DetailMarker />
        </GoogleMapReact>
      </div>
    );
  }
}

export default DetailMap;