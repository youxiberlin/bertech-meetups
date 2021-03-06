import React, { Component } from 'react';

class InfoWindow extends Component {
  render() {
    const info = this.props.info;

    let infoDisplay = ''
    if (this.props.display) {
      infoDisplay += ' info-on'
    }

    return (
      <div className={`info-off ${infoDisplay}`}>
        <p><a href={`/meetup/${info.id}`}>{info.name}</a></p>
      </div>
    );
  }
}

export default InfoWindow;