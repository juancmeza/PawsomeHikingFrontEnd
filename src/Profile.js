import React, {Component, Fragment} from 'react';
import Nav from './Nav';
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch,
  } from "react-router-dom";


class Profile extends Component {

    render(){
        return(
            <div>
                <Nav handleLogout={this.props.handleLogout}/>
                <h5>You have reached the Profile Component</h5>
            </div>
        )
    }
}

export default Profile
