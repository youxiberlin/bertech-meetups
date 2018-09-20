import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, Col
} from 'reactstrap';

const RsvpItem = props => {
  return (
    <Col sm="6" md="4" lg="4">
      <Card body className='m-1 p-0'>
        <CardBody>
          <CardTitle>{props.group}</CardTitle>
          <CardText>{props.rsvp} tech peeps are going.</CardText>
        </CardBody>
      </Card>
    </Col>
  );
};

export default RsvpItem;