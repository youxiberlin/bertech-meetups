import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Col, Button
} from 'reactstrap';
import { Link } from 'react-router-dom'


const RsvpItem = props => {
  return (
    <Col sm="6" md="4" lg="4">
      <Card body className='m-1 p-0'>
        <CardBody>
          <CardTitle>{props.name}</CardTitle>
          <CardSubtitle>{props.group}</CardSubtitle>
          <CardText><span className='emphasized'>{props.rsvp}</span><br />tech peeps are going.</CardText>
          <Link to={`/meetup/${props.id}`}>
            <Button outline color="secondary" size='sm' className=''>Detail</Button>
          </Link>
        </CardBody>
      </Card>
    </Col>
  );
};

export default RsvpItem;