import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Row, Col
} from 'reactstrap';

const UpcomingLi = props => {
  return (
    <Col sm="6" md="4" lg="3">
      <Card body className='m-1 p-0'>
        <CardBody>
          <CardTitle>{props.group}</CardTitle>
          <CardSubtitle>{props.venue}</CardSubtitle>
          <CardText>{props.date} | {props.time}</CardText>
          <CardText>{props.description}</CardText>
          <Button outline color="secondary" size='sm' className=''>Detail</Button>
        </CardBody>
      </Card>
    </Col>
  );
};

export default UpcomingLi;