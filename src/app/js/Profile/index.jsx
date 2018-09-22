import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

class Profile extends Component {
    render() {
        if (!this.props.user) return <Redirect to="/auth/sign-in" /> // this is actually the protection
        // console.log(this.props.user)
        return (
            <div className="container mt-5 mb-5">
                <div className="profile-pic">
                    <img src={this.props.user.profilePicture} alt="" />
                </div>

                <br />
                {this.props.user._id}
                <br />
                {this.props.user.email}

                <h3>Favorites:</h3>
                <ul>
                    <li></li>
                </ul>
            </div>
        )
    }
}

export default Profile
