import React from 'react';
import { withRouter } from 'react-router'

const Detail = props => {
  console.log("hello I am Detail")
  return (
    <div className="detail">
      I'm Detail
    </div>
  );
};

export default withRouter(Detail)