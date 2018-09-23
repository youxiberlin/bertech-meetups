import React from 'react';
import { withRouter } from 'react-router'
import { Button } from 'reactstrap';


const Detail = props => {
  const matchingMeetup = props.meetup.find(el =>
    el.id == props.match.params.id)

  // console.log("@Detail matchingMeetup: ", matchingMeetup)

  return (
    <div className="detail">
      <div className='text-center'>
        <h1>{matchingMeetup.name}</h1>
        <h4>{matchingMeetup.group.name}</h4>
        <h4>Venue: {matchingMeetup.venue.name}</h4>
        <p>at {matchingMeetup.local_time} on {matchingMeetup.local_date}</p>
        <p>{matchingMeetup.yes_rsvp_count} peeps are going.</p>
        <a href={`${matchingMeetup.link}`}>
          <Button>More & Rsvp on meetup.com</Button>
        </a>
      </div>
      <p>{matchingMeetup.description}</p>
    </div>
  );
};

export default withRouter(Detail)