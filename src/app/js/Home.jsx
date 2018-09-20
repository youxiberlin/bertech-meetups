import React from 'react';
import Upcoming from './Upcoming';
import Map from './Map';
import Trending from './Trending';
import Recommend from './Recommend';

const Home = props => {
    //  console.log("@Home: ", props.meetup.data.events)

    return (
        <div className="wrapper">
            <h1>Hello {props.user ? props.user.email : ''}!</h1>
            <div className='contents'>
                <div className='map-container'><Map /></div>
                <div className='upcoming-container'><Upcoming meetups={props.meetup.data.events} /></div>
                <div className='trending-container'><Trending /></div>
                <div className='recommend-container'><Recommend /></div>
            </div>
        </div>
    )
}

export default Home
