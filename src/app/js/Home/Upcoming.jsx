import React, { Component } from 'react';
import Map from './Map';
import UpcomingLi from './UpcomingLi'
import { Row } from 'reactstrap';


class Upcoming extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render() {
    console.log("Upcoming: ", this.props.meetups)
    console.log("Upcoming: this.state", this.state)

    const newArray = [];
    //there was an element which venue.name doesn't exist, therefore couldn't render
    this.props.meetups.forEach((item => {
      newArray.push({
        group: item.group.name,
        venue: item.venue.name,
        description: item.description.slice(3, 50),
        date: item.local_date,
        time: item.local_time
      })
    }))

    const mappedLi = newArray.map((el, i) =>
      <UpcomingLi
        group={el.group}
        venue={el.venue}
        date={el.date}
        time={el.time}
        description={el.description}
        key={i}
      />
    )

    // creating array that has group and venue data of each event to pass to Map component
    const mapArray = [];
    this.props.meetups.forEach((item) => {
      mapArray.push({
        group: item.group,
        venue: item.venue
      })
    })
    return (
      <div>
        <div className="map-container"><Map meetups={mapArray} /></div>
        <div className='upcoming-container'><Row className='mt-3'>{mappedLi}</Row></div>
      </div>
    );
  }
}


export default Upcoming;