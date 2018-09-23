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

    this._updateLi = this._updateLi.bind(this)
  }

  componentDidMount() {
    this._firstList()
  }

  render() {
    // console.log("Upcoming, this.props.meetups: ", this.props.meetups)
    // console.log("Upcoming, this.state.meetups: ", this.state.meetups)


    const mappedList = this.state.meetups.map((el, i) =>
      <UpcomingLi
        group={el.group.name}
        name={el.name}
        venue={el.venue.name}
        date={el.local_date}
        time={el.local_time}
        description={el.description.slice(3, 100)}
        key={i}
        id={el.id}
      />
    )

    // creating array that has group and venue data of each event to pass to Map component
    const mapArray = [];
    this.state.meetups.forEach((item) => {
      mapArray.push({
        group: item.group,
        venue: item.venue,
        name: item.name,
        id: item.id,
      })
    })

    return (
      <div>
        <div className="map-container">
          <Map meetups={mapArray} />

        </div>
        <div className='upcoming-upper-container pb-5'>
          <div className='upcoming-container'>
            <Row className='mt-3'>
              {mappedList}
            </Row>
          </div>
          <div className='text-center pt-4'>
            <Button onClick={this._updateLi} color="secondary">More</Button>
          </div>
        </div>

      </div>
    );
  }

  _firstList() {
    const firstList = [];
    function sortDate(a, b) {
      if (a.local_date > b.local_date) {
        return 1;
      } else if (a.local_date < b.local_date) {
        return -1;
      } else {
        return 0;
      }
    }
    const sortedByDateLi = this.props.meetups.sort(sortDate)

    for (let i = 0; i < 1; i++) {
      firstList.push(sortedByDateLi[i])
    }
    this.setState({
      meetups: firstList
    })
  }

  _updateLi() {
    let currLength = this.state.meetups.length
    const addedLi = [];
    for (let i = currLength; i < currLength + 1; i++) {
      addedLi.push(this.props.meetups[i])
    }
    this.setState({
      meetups: [...this.state.meetups, ...addedLi]
    })
  }



}



export default Upcoming;