import React, { Component } from 'react';
import UpcomingLi from './UpcomingLi'
import { Row, Button } from 'reactstrap';


class Upcoming extends Component {
  render() {
    const upcomingLi = this.props.meetups.map((el, i) =>
      <UpcomingLi
        group={el.group.name}
        name={el.name}
        venue={el.venue.name}
        date={el.local_date}
        time={el.local_time}
        description={el.description.slice(3, 100)}
        key={i}
        id={el.id}
        user={this.props.user}
      />
    )
    return (
      <Row className='mt-3'>
        {upcomingLi}
      </Row>
    );
  }
}

export default Upcoming;