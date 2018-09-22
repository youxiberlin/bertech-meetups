import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import jwtDecode from 'jwt-decode'

import api from "./utils/api"

import Auth from './Auth'
import Home from './Home'
import Navigation from './Navigation'
import Profile from './Profile'
import NotFound from './NotFound'
import Footer from './Footer'


class Application extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            user: this._setUser(true),
            meetup: [],
            loading: true,
        }

        this._setUser = this._setUser.bind(this)
        this._resetUser = this._resetUser.bind(this)
    }

    componentDidMount() {
        api.get('/api')
            .then(result => {
                this.setState({ meetup: result, loading: false })
            })
            .catch(console.error)

    }

    render() {
        if (this.state.loading) {
            return <div className='spinner'>loading.....</div>
        }


        // console.log("@Application.jsx / this.state.data,", this.state.data)
        return (
            <BrowserRouter>
                <div>
                    <Navigation user={this.state.user} />
                    <Switch>
                        <Route exact path="/profile" render={() => <Profile user={this.state.user} />} />
                        <Route
                            path="/auth"
                            render={() => <Auth setUser={this._setUser} resetUser={this._resetUser} />}
                        />
                        <Route path="/" render={() => <Home user={this.state.user} meetup={this.state.meetup} />} />
                        <Route component={NotFound} />
                    </Switch>
                    <Footer />
                </div>
            </BrowserRouter>
        )
    }

    _resetUser() {
        this.setState({
            user: null,
        })
    }

    _setUser(init) {
        const token = localStorage.getItem('identity')
        if (token) {
            const decoded = jwtDecode(token)
            delete decoded.iat
            if (init) return decoded
            this.setState({ user: decoded })
        } else {
            return null
        }
    }
}

export default Application
