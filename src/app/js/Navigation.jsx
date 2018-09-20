import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = props => {
    return (
        <div class='nav-wrapper'>

            <Link className="link nav-link" to="/">
                Home
                    </Link>
            {props.user && (
                <span>
                    &nbsp; &nbsp; &nbsp;
                            <Link className="link nav-link" to="/profile">
                        Profile
                            </Link>
                </span>
            )}



            <div>
                {props.user ? (
                    <Link className="link nav-link" to="/auth/logout">
                        Logout
                        </Link>
                ) : (
                        <span class='nav-menu'>
                            <Link className="link nav-link" to="/auth/sign-in">
                                Sign in
                            </Link>
                            <Link className="link nav-link" to="/auth/sign-up">
                                Sign up
                            </Link>
                        </span>
                    )}
            </div>
        </div>
    )
}

export default Navigation