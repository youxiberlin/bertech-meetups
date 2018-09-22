import React, { Component } from 'react';
import {
  Card, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Row, Col
} from 'reactstrap';
import { Link } from 'react-router-dom'

class UpcomingLi extends Component {
  constructor(props) {
    super(props)
    this.state = {
      flipped: null
    }
  }

  mouseOut() {
    this.setState({ flipped: false });
  }

  mouseOver() {
    this.setState({ flipped: true });
  }

  render() {
    let flipped = ''
    if (this.state.flipped) {
      flipped += ' flipped'
    }

    return (
      <Col sm="6" md="4" lg="3">
        <Link className='card-link' to={`/meetup/${this.props.id}`}>
          <Card body className='m-1 p-0' >
            <CardBody
              className={flipped}
              onMouseOut={() => this.mouseOut()}
              onMouseOver={() => this.mouseOver()}
            >
              <CardTitle>{this.props.name}</CardTitle>
              <CardSubtitle>{this.props.group}</CardSubtitle>
              <CardText className='secondary-color font-sm'>{this.props.date} | {this.props.time}</CardText>
              <CardText>Venue: {this.props.venue} <br />{this.props.description}</CardText>
              <Button outline color="secondary" size='sm' className=''>Detail</Button>
            </CardBody>
          </Card>
        </Link>
      </Col>
    );
  }
}

export default UpcomingLi;

