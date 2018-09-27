import React, { Component } from 'react';
import {
  Card, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Col
} from 'reactstrap';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faArrowCircleUp } from '@fortawesome/free-solid-svg-icons'

class UpcomingLi extends Component {
  constructor(props) {
    super(props)
    this.state = {
      flipped: null,
      heart: null,
      // savedHeart: false,
    }

    // this.toggleOn = this.toggleOn.bind(this)
  }

  //card and heart toggling functions
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
  // toggleOn() {
  //   let toggle;
  //   if (!this.state.savedHeart) {
  //     toggle = true;
  //   } else {
  //     toggle = false;
  //   }
  //   this.setState({ savedHeart: toggle })
  // }


  render() {
    // console.log('upcomingLi: ', this.props.bookmark)
    // console.log('heart is on', this.state.savedHeart)
    // console.log('upcomingLi bookmarked: ', this.props.bookmarked)
    // console.log('upcomingLi meetup id: ', this.props.id)

    // card and heart toggling
    let flipped = ''
    if (this.state.flipped) {
      flipped += ' flipped'
    }

    let heartFlipped = 'card-heart'
    if (this.state.heart) {
      heartFlipped += ' heart-on'
    }

    if (this.state.savedHeart) {
      heartFlipped += ' heart-on'
    }


    // to replace p and br tags with n
    const br2nl = function (str) {
      return str.replace(/(<br>|<p>|<\/p>|<br\/>)/gi, '\n');
    };
    const description = br2nl(this.props.description)

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
            <CardText className='secondary-color font-sm font-weight-bold'>{this.props.date} | {this.props.time}</CardText>
            <CardText>Venue: {this.props.venue} <br />{description}</CardText>
            <Link className='card-link' to={`/meetup/${this.props.id}`}>
              <Button outline size='sm' className='detail-button'>Detail</Button>
            </Link>
            <span className='pl-3'>
              <FontAwesomeIcon icon={faHeart}
                className={heartFlipped}
                onMouseOut={() => this.heartOut()}
                onMouseOver={() => this.heartOver()}
                onClick={() => this.props.saveCard(this.props.user, this.props.id)}
              // onClick={() => this.toggleOn()}
              />

            </span>
          </CardBody>
        </Card>
      </Col>
    );
  }


}
export default UpcomingLi;

