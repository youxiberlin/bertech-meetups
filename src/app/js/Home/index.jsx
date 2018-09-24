import React, { Component } from 'react';
import Map from './Map';
import Upcoming from './Upcoming';
import Rsvp from './Rsvp';
import Recommend from './Recommend';
import Detail from './Detail';
import { Route, Switch } from 'react-router-dom'
import { Button } from 'reactstrap';



class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      meetups: [],
      loading: true,
    }
  }

  componentDidMount() {
    this._createList()
    this.setState({ loading: false })
  }

  render() {
    if (this.state.loading) {
      return <div className='spinner'>loading.....</div>
    }
    // console.log('this.state.meetup', this.state.meetups)


    // 1 create upcoming list
    const sortedByDate = this.state.meetups.sort(this._sortByDate)
    const upcomingLi = [];
    for (let i = 0; i < 6; i++) {
      upcomingLi.push(sortedByDate[i]);
    }
    // console.log('@index upcomingLi', upcomingLi)

    // 2 make updateLi() function and put it on the button


    // 3 create rsvp list
    const sortedByRsvp = this.state.meetups.sort(this._sortByRsvp)
    const rsvpLi = [];
    for (let i = 0; i < 3; i++) {
      rsvpLi.push(sortedByRsvp[i])
    }
    // console.log('rsvpLi', rsvpLi)

    // create recommended list (in the future)



    return (
      < Switch >
        <Route path="/meetup/:id"
          render={() => <Detail meetup={this.props.meetup.events} />}
        />
        <Route exact path="/"
          render={() => {
            return (
              <div className="wrapper">
                <h4>Hello, {this.props.user ? this.props.user.email : 'tech peeps'} :)</h4>
                <div className='contents'>
                  <div className="map-container">
                    <Map
                      upcoming={upcomingLi}
                      rsvp={rsvpLi}
                    />
                  </div>
                  <div><Upcoming meetups={upcomingLi} user={this.props.user} /></div>
                  <div className='text-center pt-4'>
                    <Button onClick={this._updateLi} color="secondary">More</Button>
                  </div>
                  <div className='trending-container pt-5 pb-5'>
                    <h3>Hot Meetups</h3>
                    <Rsvp meetups={rsvpLi} />
                  </div>
                  <div className='recommend-container pt-5 pb-5'>
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

  _createList() {
    const newArray = [];
    const meetupLi = this.props.meetup.events
    meetupLi.forEach(el => {
      let placeholder = {
        name: 'unknown',
        lat: 52.516382,
        lon: 13.377954
      }
      newArray.push({
        id: el.id,
        name: el.name,
        description: el.description ? el.description : 'unknown',
        local_time: el.local_time,
        local_date: el.local_date,
        group: el.group,
        venue: el.venue ? el.venue : placeholder,
        yes_rsvp_count: el.yes_rsvp_count
      })
    })
    this.setState({
      meetups: newArray
    })
  }

  _sortByDate(a, b) {
    if (a.local_date > b.local_date) {
      return 1;
    } else if (a.local_date < b.local_date) {
      return -1;
    } else {
      return 0;
    }
  }

  _sortByRsvp(a, b) {
    if (a.yes_rsvp_count > b.yes_rsvp_count) {
      return -1;
    } else if (a.yes_rsvp_count < b.yes_rsvp_count) {
      return 1;
    } else {
      return 0;
    }
  }

}

export default Home;