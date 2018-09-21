import React from 'react';
import { withRouter } from 'react-router'

const Detail = props => {
  console.log("hello I am Detail")
  return (
    <div>
      I'm Detail
    </div>
  );
};

export default withRouter(Detail)