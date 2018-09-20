import React from 'react';
import UpcomingLi from './UpcomingLi'
import { Row } from 'reactstrap';

const Upcoming = props => {
  console.log("Upcoming: ", props.meetups)

  const newArray = [];
  //there was an element which venue.name doesn't exist, therefore couldn't render
  props.meetups.forEach((item => {

    newArray.push({
      group: item.group.name,
      // venue: item.venue.name,
      description: item.description.slice(3, 50),
      date: item.local_date,
      time: item.local_time
    })
  }))
  //console.log("@Upcoming / newArray: ", newArray)

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

  return (
    <Row className='mt-3'>{mappedLi}</Row>
  );
};

export default Upcoming;