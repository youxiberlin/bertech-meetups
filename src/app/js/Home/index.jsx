import React, { Component } from 'react';
import Upcoming from './Upcoming';
import Rsvp from './Rsvp';
import Recommend from './Recommend';
import Detail from './Detail';
import { Route, Switch } from 'react-router-dom'


class Home extends Component {
  render() {
    // console.log("@index.jsx/Home this.props.meetup", this.props.meetup.data.events)
    return (
      < Switch >
        <Route path="/meetup/:id"
          render={() => {
            return (
              <div className='detail'>
                <Detail
                  meetup={this.props.meetup.data.events}
                />
              </div>
            )
          }}
        />
        <Route exact path="/"
          render={() => {
            return (
              <div className="wrapper">
                <h4>Hello, {this.props.user ? this.props.user.email : 'tech peeps'} :)</h4>
                <div className='contents'>
                  <Upcoming meetups={this.props.meetup.data.events} />
                  <div className='trending-container'>
                    <h1>Hot Meetups</h1>
                    <Rsvp meetups={this.props.meetup.data.events} />
                  </div>
                  <div className='recommend-container'>
                    <h1>Recommended</h1>
                    <Recommend />
                  </div>
                </div>
              </div>
            )
          }}
        />
      </Switch >
    );
  }
}

export default Home;