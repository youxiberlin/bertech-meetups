import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import MapMarker from './MapMarker'

class Map extends Component {
  static defaultProps = {
    center: {
      lat: 52.515,
      lng: 13.413
    },
    zoom: 13
  };

  render() {
    // console.log('@map', this.props.rsvp)

    const mappedMarker = this.props.upcoming.map((el, i) =>
      <MapMarker
        key={i}
        lat={el.venue.lat}
        lng={el.venue.lon}
        name={el.name}
        id={el.id}
        cat='upcoming'
      />
    )

    const rsvpMarker = this.props.rsvp.map((el, i) =>
      <MapMarker
        key={i}
        lat={el.venue.lat}
        lng={el.venue.lon}
        name={el.name}
        id={el.id}
        cat='rsvp'
      />
    )


    return (
      <div style={{ height: '53vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyAEUohQUFe7FN0U53ksF9RadGLmb4zpNE4' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          {mappedMarker}
          {rsvpMarker}
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;