import React, { Component } from 'react';
import { withRouter } from 'react-router'


class Detail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      beer: [],
    }
  }

  componentDidMount() {
    this.setState({
      beer: this.props.beer,
    })
  }

  render() {
    console.log("@Detail props:", this.props)
    const matchingBeer = this.props.beer.find(el =>
      el._id === this.props.match.params.id
    )

    // console.log("@Detail matchingBeer : ", matchingBeer)

    return (
      <div className="detail">
        <h3>{matchingBeer.name}</h3>
        <div className="detail-img">
          <img src={matchingBeer.image_url} alt="" />
        </div>
        <p>{matchingBeer.brewers_tips}</p>
      </div>
    );
  }
}

