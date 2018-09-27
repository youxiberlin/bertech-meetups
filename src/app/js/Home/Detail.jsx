import React from 'react';
import { withRouter } from 'react-router'
import { Button } from 'reactstrap';


const Detail = props => {
  const matchingMeetup = props.meetup.find(el =>
    el.id == props.match.params.id)

  const text = matchingMeetup.description.slice(3, 500)


  return (
    <div className='detail-wrapper'>
      <div className="detail-header">
        <div className='text-center'>
          <h1 className='mb-3'>{matchingMeetup.name}</h1>
          <h4>by {matchingMeetup.group.name}</h4>
          <h4>Venue: {matchingMeetup.venue.name}</h4>
          <p>at {matchingMeetup.local_time} on {matchingMeetup.local_date}</p>
          <h5>{matchingMeetup.yes_rsvp_count} peeps are going.</h5>
        </div>
      </div>
      <div className="detail-content pt-3 pb-2">
        <div>
          <div dangerouslySetInnerHTML={{ __html: text }}></div>
          <div className='text-center mb-5'>
            <a href={`${matchingMeetup.link}`}>
              <Button >More & Rsvp on meetup.com</Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Detail)