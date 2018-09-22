import React from 'react';
import {
  Card, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Row, Col
} from 'reactstrap';
import { Link } from 'react-router-dom'


const UpcomingLi = props => {
  // console.log("UpcomingLi: ", props)
  return (
    <Col sm="6" md="4" lg="3">
      <Link className='card-link' to={`/meetup/${props.id}`}>
        <Card body className='m-1 p-0'>
          <CardBody className='card-hover'>
            <CardTitle>{props.name}</CardTitle>
            <CardSubtitle>{props.group}</CardSubtitle>
            <CardText className='secondary-color font-sm'>{props.date} | {props.time}</CardText>
            <CardText>Venue: {props.venue} <br />{props.description}</CardText>
            <Button outline color="secondary" size='sm' className=''>Detail</Button>
          </CardBody>
        </Card>
      </Link>
    </Col>
  );
};

export default UpcomingLi;