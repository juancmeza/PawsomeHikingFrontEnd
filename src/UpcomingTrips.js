import React, {Component, Fragment} from 'react';
import Nav from './Nav';
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch,
  } from "react-router-dom";


class UpcomingTrips extends Component {

    render(){
        return(
            <div>
                <Nav handleLogout={this.props.handleLogout}/>
                <h5>You have reached the Upcoming Trips Component</h5>
            </div>
        )
    }
}

export default UpcomingTrips
