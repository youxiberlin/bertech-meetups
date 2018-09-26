import React from 'react';
import { Link } from 'react-router-dom'

const BookmarkLi = props => {
  return (
    <div>
      <Link to={`/meetup/${props.id}`}>


        {props.name}
      </Link>

    </div>
  );
};

export default BookmarkLi;