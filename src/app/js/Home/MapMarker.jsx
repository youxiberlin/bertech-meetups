import React, { Component } from 'react';
import { mapStyle } from './mapStyle.js';
import InfoWindow from './InfoWindow';

class MapMarker extends Component {
  render() {
    return (
      <div style={mapStyle}>
        <InfoWindow
          info={this.props}
        />
      </div>
    );
  }
}

export default MapMarker;