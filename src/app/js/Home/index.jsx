import React, { Component } from 'react';
import Upcoming from './Upcoming';
import Trending from './Trending';
import Recommend from './Recommend';

class Home extends Component {
  render() {
    return (
      <div>
        <div className="wrapper">
          <h1>Hello {this.props.user ? this.props.user.email : ''}!</h1>
          <div className='contents'>
            <Upcoming meetups={this.props.meetup.data.events} />
            <div className='trending-container'><Trending /></div>
            <div className='recommend-container'><Recommend /></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;