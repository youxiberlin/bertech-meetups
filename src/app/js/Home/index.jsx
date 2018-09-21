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
        <Route path="/meetup"
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
                  <div className='trending-container pt-5 pb-3'>
                    <h3>Hot Meetups</h3>
                    <Rsvp meetups={this.props.meetup.data.events} />
                  </div>
                  <div className='recommend-container pt-5'>
                    <h3>Recommended</h3>
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