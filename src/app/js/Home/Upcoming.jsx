import React, { Component } from 'react';
import UpcomingLi from './UpcomingLi'
import { Row } from 'reactstrap';
import { Redirect } from 'react-router-dom'
import api from '../utils/api'
import { withRouter } from 'react-router'


class Upcoming extends Component {
  constructor(props) {
    super(props)
    this.state = {
      bookmark: [],
      upvote: [],
    }

    this._saveCard = this._saveCard.bind(this)
    this._upvoteCard = this._upvoteCard.bind(this)
  }

  render() {
    // console.log('@upcoming this.props.meetups: ', this.props.user)
    // console.log('@upcomign this.state.bookmark: ', this.state.bookmark)
    console.log('@upcomign this.state.upvote: ', this.state.upvote)

    const upcomingLi = this.props.meetups.map((el, i) =>
      <UpcomingLi
        group={el.group.name}
        name={el.name}
        venue={el.venue.name}
        date={el.local_date}
        time={el.local_time}
        description={el.description.slice(3, 100)}
        key={i}
        id={el.id}
        user={this.props.user}
        saveCard={this._saveCard}
        upvoteCard={this._upvoteCard}
      />
    )
    return (
      <Row className='mt-3'>
        {upcomingLi}
      </Row>
    );
  }

  _saveCard(user, value) {
    if (!user) {
      console.log('please sign in')
      this.props.history.push("/auth/sign-in")
    } else {
      const array = [...this.state.bookmark]
      // value pushed into the array is the meetup id
      array.push(value)
      console.log('this.state.bookmark', this.state.bookmark)
      this.setState({
        bookmark: array
      })
    }

    // this doesn't work?
    api.post('/meetup/bookmark',
      {
        bookmark: this.state.bookmark,
        user: this.props.user
      })
      .then(data => {
        console.log(data)
      })

  }

  _upvoteCard(user, meetup, voteNum) {
    if (!user) {
      console.log('please sign in')
      return < Redirect to="/auth/sign-in" />
    } else {
      console.log('@upcoming upvote()', this.state.upvote)
      // console.log(user, meetup, voteNum)
      const arr = [...this.state.upvote]
      arr.push({
        meetup: meetup,
        vote: voteNum,
      })

      console.log('arr', arr)
      this.setState({
        upvote: arr
      })

    }
  }


}

export default withRouter(Upcoming)
