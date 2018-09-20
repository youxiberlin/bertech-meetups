import React, { Component } from 'react';
import Upcoming from './Upcoming';
import Trending from './Trending';
import Recommend from './Recommend';
import Detail from './Detail';
import { Route, Switch } from 'react-router-dom'


class Home extends Component {
  render() {
    console.log("this.props.meetup", this.props.meetup.data.events)
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
                <h1>Hello {this.props.user ? this.props.user.email : ''}!</h1>
                <div className='contents'>
                  <Upcoming meetups={this.props.meetup.data.events} />
                  <div className='trending-container'><Trending /></div>
                  <div className='recommend-container'><Recommend /></div>
                </div></div>
            )
          }}
        />
      </Switch >
    );
  }
}

export default Home;