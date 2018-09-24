import React, { Component } from 'react';
import { upcomingStyle, rsvpStyle } from './mapStyle.js';
import InfoWindow from './InfoWindow';


class MapMarker extends Component {
  constructor(props) {
    super(props)
    this.state = {
      infoDisplay: null,
    }
  }

  mouseOut() {
    this.setState({ infoDisplay: false });
  }

  mouseOver() {
    this.setState({ infoDisplay: true });
  }

  render() {
    let mapStyle;
    if (this.props.cat == 'upcoming') {
      mapStyle = upcomingStyle
    } else if (this.props.cat == 'rsvp') {
      mapStyle = rsvpStyle
    }

    return (
      <div style={mapStyle}
        onMouseOut={() => this.mouseOut()}
        onMouseOver={() => this.mouseOver()}
      >
        <InfoWindow
          info={this.props}
          display={this.state.infoDisplay}
        />
      </div>
    );
  }
}

export default MapMarker;