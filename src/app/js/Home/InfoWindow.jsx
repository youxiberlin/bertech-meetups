import React, { Component } from 'react';

class InfoWindow extends Component {
  constructor(props) {
    super(props)
    this.state = {
      info: null
    }
  }

  mouseOut() {
    this.setState({ info: false });
  }

  mouseOver() {
    this.setState({ info: true });
  }

  render() {
    // console.log(this.state.info)
    console.log("@InfoWindow this.props", this.props.info)
    const info = this.props.info;

    let infoDisplay = ''
    if (this.state.info) {
      infoDisplay += ' info-on'
    }

    return (
      <div
        onMouseOut={() => this.mouseOut()}
        onMouseOver={() => this.mouseOver()}
        // className={infoDisplay}
        className={`info-window info-off ${infoDisplay}`}
      >
        <p>{info.name}</p>
      </div>
    );
  }
}

export default InfoWindow;