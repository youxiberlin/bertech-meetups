import React from 'react';

import { mapStyle } from './mapStyle.js';

const MapMarker = ({ text }) => {
  return (
    <div style={mapStyle}>
      {text}
    </div>
  );
};

export default MapMarker;