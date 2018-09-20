import React, { Component } from 'react';
import Map from './Map';
import UpcomingLi from './UpcomingLi'
import { Row, Button } from 'reactstrap';


class Upcoming extends Component {
  constructor(props) {
    super(props)
    this.state = {
      meetups: []
    }
  }

  componentDidMount() {
    this.setState({
      //display 8 el
    })
  }

  // moreList = () => {
  //   this.setState({
  //       //display more 8
  //   })
  // }

  render() {
    // console.log("Upcoming: ", this.props.meetups)
    console.log("Upcoming: this.state", this.state)

    const newArray = [];
    //there was an element which venue.name doesn't exist, therefore couldn't render
    this.props.meetups.forEach((item => {
      newArray.push({
        group: item.group.name,
        venue: item.venue.name,
        description: item.description.slice(3, 50),
        date: item.local_date,
        time: item.local_time,
        id: item.id
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
        id={el.id}
      />
    )

    const firstLi = [];
    for (let i = 0; i < 8; i++) {
      firstLi.push(mappedLi[i])
    }


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
        <div className='upcoming-container'><Row className='mt-3'>{firstLi}</Row></div>
        <div className='text-center'><Button color="secondary">More</Button></div>
      </div>
    );
  }
}


export default Upcoming;