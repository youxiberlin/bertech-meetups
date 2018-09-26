import React, { Component } from 'react';
import UpcomingLi from './UpcomingLi'
import { Row } from 'reactstrap';
import api from '../utils/api'
import { withRouter } from 'react-router'
import Bookmark from './Bookmark';


class Upcoming extends Component {
  constructor(props) {
    super(props)
    this.state = {
      bookmark: [],
      upvote: [],
    }

    this._saveCard = this._saveCard.bind(this)
    // this._upvoteCard = this._upvoteCard.bind(this)
  }

  componentDidMount() {
    api.get("/api/meetup/bookmark")
      .then(allBookmarks => {
        this.setState({
          bookmark: allBookmarks
        })
      })
  }

  render() {
    console.log('@upcomign this.state.bookmark: ', this.state.bookmark)


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
      <div>
        <Row className='mt-3'>
          {upcomingLi}
        </Row>
        <div className='bookmark-container pt-5 pb-5'>
          <h3>Bookmark</h3>
          <Bookmark
            bookmark={this.state.bookmark}
            meetup={this.props.meetups}
          />
        </div>
      </div>
    );
  }

  _saveCard(user, value) {
    if (!user) {
      this.props.history.push("/auth/sign-in")
    } else {
      api.post('/api/meetup/bookmark',
        {
          bookmark: value
        })
        .then(data => {
          let unique = [...new Set(data)]
          unique.shift();
          console.log('hello I am unique')
          this.setState({
            bookmark: unique
          })
        })
    }


  }

  // _upvoteCard(user, meetup, voteNum) {
  //   if (!user) {
  //     console.log('please sign in')
  //     return < Redirect to="/auth/sign-in" />
  //   } else {
  //     // console.log('@upcoming upvote()', this.state.upvote)
  //     // console.log(user, meetup, voteNum)
  //     const arr = [...this.state.upvote]
  //     arr.push({
  //       meetup: meetup,
  //       vote: voteNum,
  //     })

  //     console.log('arr', arr)
  //     this.setState({
  //       upvote: arr
  //     })

  //   }
  // }


}

export default withRouter(Upcoming)
