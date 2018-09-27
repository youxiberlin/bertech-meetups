import React, { Component } from 'react';
import UpcomingLi from './UpcomingLi'
import { Row } from 'reactstrap';
import api from '../utils/api'
import { withRouter } from 'react-router'
import Bookmark from './Bookmark';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'


class Upcoming extends Component {
  constructor(props) {
    super(props)
    this.state = {
      bookmark: [],
      upvote: [],
    }

    this._saveCard = this._saveCard.bind(this)
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
    console.log('@upcomign this.props.meetups: ', this.props.meetups)

    const bookmark = this.state.bookmark;
    const meetups = this.props.meetups;
    const bookmarkLi = [];
    // const newArr = []

    // for (let i = 0; i < meetups.length; i++) {
    //   for (let j = 0; j < bookmark.length; j++) {
    //     if (meetups[i].id == bookmark[j]) {
    //       newArr.push(meetups[i])
    //     }
    //   }
    // }


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
      // bookmark={bookmarked}
      />
    )
    return (
      <div>
        <Row className='mt-3'>
          {upcomingLi}
        </Row>
        <div className='bookmark-container pt-3 pb-3'>
          <FontAwesomeIcon className="bookmark-icon mr-3" icon={faBookmark} />
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
          this.setState({
            bookmark: data
          })
        })
    }
  }

}

export default withRouter(Upcoming)
