import React, { Component } from 'react';
import Map from './Map';
import Upcoming from './Upcoming';
import Rsvp from './Rsvp';
import Recommend from './Recommend';
import Detail from './Detail';
import { Route, Switch } from 'react-router-dom'
import { Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      meetups: [],
      loading: true,
      upcomingVisible: 6,
      rsvpVisible: 3,
    }

    this._updateLi = this._updateLi.bind(this)
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    this._createList()
    this.setState({ loading: false })
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    window.onscroll = function () { mapFix() };
    const mapel = document.getElementById('map')
    const content = document.getElementById('list-content')

    var sticky = mapel.offsetTop;

    function mapFix() {
      if (window.pageYOffset > sticky) {
        mapel.classList.add('sticky');
        content.classList.add('sticky-content');
      } else {
        mapel.classList.remove('sticky');
        content.classList.remove('sticky-content');
      }
    }

  }

  render() {
    if (this.state.loading) {
      return <div className='spinner'>loading.....</div>
    }

    //  create upcoming list
    const sortedByDate = this.state.meetups.sort(this._sortByDate)
    const upcomingLi = [];
    for (let i = 0; i < this.state.upcomingVisible; i++) {
      upcomingLi.push(sortedByDate[i]);
    }

    // 3create rsvp list
    const sortedByRsvp = this.state.meetups.sort(this._sortByRsvp)
    const rsvpLi = [];
    for (let i = 0; i < this.state.rsvpVisible; i++) {
      rsvpLi.push(sortedByRsvp[i])
    }

    // create recommended list (in the future)



    return (
      < Switch >
        <Route path="/meetup/:id"
          render={() => <Detail meetup={this.state.meetups} />}
        />
        <Route exact path="/"
          render={() => {
            return (
              <div className="wrapper">
                <div className="header pt-3 pb-3">
                  <div className="pt-5">
                    <h4 className='tagline'>
                      Bertech Meetu
                    <FontAwesomeIcon className="code-icon" icon={faSearch} />
                      s
                    </h4>
                    <p className='pt-1'>
                      Hello, {this.props.user ? this.props.user.email : 'tech peeps'}.<br></br>
                      Discover your next favorite tech meetups in Berlin.</p>
                  </div>
                </div>
                <div className='contents'>
                  <div id='map' className="map-container">
                    <Map
                      upcoming={upcomingLi}
                      rsvp={rsvpLi}
                    />
                  </div>
                  <div id='list-content' className='upcoming-upper-container'>
                    <div><Upcoming meetups={upcomingLi} user={this.props.user} /></div>
                    <div className='text-center pt-4'>
                      <Button onClick={this._updateLi} color="secondary">More</Button>
                    </div>
                  </div>
                  <div className='trending-container pt-4 pb-5'>
                    <h3>Hot Meetups</h3>
                    <Rsvp meetups={rsvpLi} />
                  </div>
                  {/* <div className='recommend-container pt-5 pb-5'>
                    <h3>Recommended</h3>
                    <Recommend />
                  </div> */}
                </div>
              </div>
            )
          }}
        />
      </Switch >
    );
  }

  _updateLi() {
    this.setState({
      upcomingVisible: this.state.upcomingVisible + 3
    }
    )
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
        yes_rsvp_count: el.yes_rsvp_count,
        link: el.link
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