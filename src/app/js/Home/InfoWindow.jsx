import React, { Component } from 'react';

class InfoWindow extends Component {
  render() {
    const info = this.props.info;
    // console.log("@InfoWindow,", this.props.display)


    let infoDisplay = ''
    if (this.props.display) {
      infoDisplay += ' info-on'
    }

    return (
      <div
        className={`info-off ${infoDisplay}`}
      >
        <p><a href="http://www.google.com">{info.name}</a></p>
      </div>
    );
  }
}

export default InfoWindow;