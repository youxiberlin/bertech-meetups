import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = props => {
    return (

        <div className='nav-wrapper'>
            <Link className="link nav-link" to="/">
                <p>B</p>
            </Link>
            <div className='nav-menu'>
                {props.user ? (
                    <Link className="link nav-link" to="/auth/logout">
                        Logout
                        </Link>
                ) : (
                        <span className='nav-menu'>
                            <Link className="link nav-link" to="/auth/sign-in">
                                Sign in
                            </Link>
                            <Link className="link nav-link" to="/auth/sign-up">
                                Sign up
                            </Link>
                        </span>
                    )}
                {props.user && (
                    <span>
                        <Link className="link nav-link" to="/profile">
                            Profile
                            </Link>
                    </span>
                )}
            </div>
        </div>


    )
}

export default Navigation