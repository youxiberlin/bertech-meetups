import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

class Profile extends Component {
    render() {
        if (!this.props.user) return <Redirect to="/auth/sign-in" /> // this is actually the protection
        // console.log(this.props.user)
        return (
            <div className="container mt-5 mb-5 pt-5">
                <div className='profile-container'>
                    <div className="profile-pic">
                        <img src={this.props.user.profilePicture} alt="" />
                    </div>
                    <h3>my e-mail is : {this.props.user.email}</h3>
                    <br />
                    {/* {this.props.user._id} */}
                </div>
            </div>
        )
    }
}

export default Profile
