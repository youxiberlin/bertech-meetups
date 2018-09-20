import React from 'react';
import RsvpItem from './RsvpItem';
import { Row, Button } from 'reactstrap';


const Rsvp = props => {
  // console.log("Rsvp: ", props.meetups)

  function sortRsvp(a, b) {
    if (a.yes_rsvp_count > b.yes_rsvp_count) {
      return -1;
    } else if (a.yes_rsvp_count < b.yes_rsvp_count) {
      return 1;
    } else {
      return 0;
    }
  }
  const sortedByRsvp = props.meetups.sort(sortRsvp)
  console.log('sortedByRsvp', sortedByRsvp)

  const hotList = []
  for (let i = 0; i < 3; i++) {
    hotList.push(sortedByRsvp[i])
  }

  const mappedHotLi = hotList.map((el, i) =>
    <RsvpItem
      group={el.group.name}
      key={i}
      rsvp={el.yes_rsvp_count}
    />
  )

  return (
    <Row>
      {mappedHotLi}
    </Row>
  );
};

export default Rsvp;