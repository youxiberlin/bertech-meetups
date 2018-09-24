import React, { Component } from 'react';
import {
  Card, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Col
} from 'reactstrap';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { Redirect } from 'react-router-dom'


class UpcomingLi extends Component {
  constructor(props) {
    super(props)
    this.state = {
      flipped: null,
      heart: null,
    }

    this._saveCard = this._saveCard.bind(this)
  }

  mouseOut() {
    this.setState({ flipped: false });
  }

  mouseOver() {
    this.setState({ flipped: true });
  }

  heartOut() {
    this.setState({ heart: false });
  }

  heartOver() {
    this.setState({ heart: true });
  }

  render() {
    // console.log('@UpcomingLi:', this.state.user)

    let flipped = ''
    if (this.state.flipped) {
      flipped += ' flipped'
    }

    let heartFlipped = 'card-heart'
    if (this.state.heart) {
      heartFlipped += ' heart-on'
    }

    return (
      <Col sm="6" md="4" lg="3">
        <Card body className='m-1 p-0' >
          <CardBody
            className={`card-shadow ${flipped}`}
            onMouseOut={() => this.mouseOut()}
            onMouseOver={() => this.mouseOver()}
          >
            <CardTitle>{this.props.name}</CardTitle>
            <CardSubtitle>{this.props.group}</CardSubtitle>
            <CardText className='secondary-color font-sm'>{this.props.date} | {this.props.time}</CardText>
            <CardText>Venue: {this.props.venue} <br />{this.props.description}</CardText>
            <Link className='card-link' to={`/meetup/${this.props.id}`}>
              <Button outline size='sm' className='detail-button'>Detail</Button>
            </Link>
            <span className='pl-3'>
              <FontAwesomeIcon icon={faHeart}
                className={heartFlipped}
                onMouseOut={() => this.heartOut()}
                onMouseOver={() => this.heartOver()}
                onClick={() => this._saveCard()}
              />
            </span>
          </CardBody>
        </Card>
      </Col>
    );
  }


  _saveCard() {
    if (!this.props.user) {
      console.log('please sign-up/sign-in')
      return <Redirect to="/auth/sign-in" />
      // this Redirect doesn't work
    } else {
      console.log("card is saved")
    }
  }
}

export default UpcomingLi;

