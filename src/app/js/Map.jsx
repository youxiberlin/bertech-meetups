import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import MapMarker from './MapMarker'

class Map extends Component {
  static defaultProps = {
    center: {
      lat: 52.522193,
      lng: 13.413740
    },
    zoom: 13
  };

  render() {
    console.log("@Map props:", this.props)
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '50vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyAEUohQUFe7FN0U53ksF9RadGLmb4zpNE4' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <MapMarker
            lat={52.516382}
            lng={13.377954}
            text={'I am Brandenburg Tor'}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;