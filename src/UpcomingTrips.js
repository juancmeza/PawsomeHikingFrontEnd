import React, {Component, Fragment} from 'react';
import Nav from './Nav';
import { Container, Row, Col, Button, Form, Alert, Card} from "react-bootstrap"
import SimpleReactCalendar from 'simple-react-calendar'
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch,
  } from "react-router-dom";

const API = 'http://localhost:3000'


class UpcomingTrips extends Component {

  
  state ={
    myTrips: false,
    bookTrip: true
  }

  showMyTrips = () => {
    return this.props.user.trips.map(trip => {

      return 
    })
  }

  showTrips = (trips) => {
    return trips.map(trip => {
      const {id, date, location, time} = trip
      return (
      <Row>
        <Col>{date}</Col>
        <Col>{location}</Col>
        <Col>{time}</Col>
        <Col><Button variant='outline-info'>Book Trip!</Button></Col>
      </Row>
      )
    })
  }

    render(){
        return(
          <div>
            <Nav handleLogout={this.props.handleLogout}/>
            <Row>
              <Col>
                  <SimpleReactCalendar trips={this.props.allTrips}/>
              </Col>
            </Row>
            <br></br>
            <div>
              {this.state.myTrips ? this.showTrips(this.props.user.trips) : this.showTrips(this.props.allTrips)}
            </div>
          </div>
        )
    }
}

export default UpcomingTrips
