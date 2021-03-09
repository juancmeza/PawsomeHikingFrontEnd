import React, {Component, Fragment} from 'react';
import Nav from './Nav';
import { Container, Row, Col, Button, Form, Alert, Card} from "react-bootstrap"
import SimpleReactCalendar from 'simple-react-calendar'
import BookTrip from './BookTrip.js'
import Trips from './Trips.js'
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
            <br></br>
            <div>
                <Trips user={this.props.user} trips={this.props.allTrips} userTripsOnly={false} selectTrip={this.props.selectTrip}/>
            </div>
          </div>
        )
    }
}

export default UpcomingTrips
