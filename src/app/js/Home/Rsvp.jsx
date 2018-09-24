import React from 'react';
import RsvpItem from './RsvpItem';
import { Row } from 'reactstrap';

const Rsvp = props => {
  // console.log('@Rsvp: ', props.meetups)

  const mappedRsvp = props.meetups.map((el, i) =>
    <RsvpItem
      name={el.name}
      group={el.group.name}
      date={el.local_date}
      time={el.local_time}
      key={i}
      rsvp={el.yes_rsvp_count}
      id={el.id}
    />
  )

  return (
    <Row>
      {mappedRsvp}
    </Row>
  );
};

export default Rsvp;