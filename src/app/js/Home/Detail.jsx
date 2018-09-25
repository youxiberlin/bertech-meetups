import React from 'react';
import { withRouter } from 'react-router'
import { Button } from 'reactstrap';


const Detail = props => {
  const matchingMeetup = props.meetup.find(el =>
    el.id == props.match.params.id)

  const text = matchingMeetup.description.slice(3, 500)

  //   function br2nl(str) {
  //     return str.replace(/<br\s*\/?>/mg,"\n");
  // }

  const br2nl = function (str) {
    return str.replace(/(<br>|<p>|<\/p>|<br\/>)/gi, '\n');
  };
  const newText = br2nl(text);

  return (
    <div className="detail">
      <div className='text-center'>
        <h1>{matchingMeetup.name}</h1>
        <h4>by {matchingMeetup.group.name}</h4>
        <h4>Venue: {matchingMeetup.venue.name}</h4>
        <p>at {matchingMeetup.local_time} on {matchingMeetup.local_date}</p>
        <p>{matchingMeetup.yes_rsvp_count} peeps are going.</p>
      </div>
      {/* <p className='mt-3'>{text} ....</p> */}
      <p className='mt-3'>{newText} ....</p>
      <div className='text-center mb-5'>
        <a href={`${matchingMeetup.link}`}>
          <Button>More & Rsvp on meetup.com</Button>
        </a>
      </div>

    </div>
  );
};

export default withRouter(Detail)