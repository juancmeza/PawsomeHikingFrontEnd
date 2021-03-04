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


class UpcomingTrips extends Component {

  showAllTrips = () => {
    return this.props.allTrips.map(trip => {
      const {id, date, location, time} = trip
      return (
      <Row>
        <Col>{date}</Col>
        <Col>{location}</Col>
        <Col>{time}</Col>
        <Col><Button id={id}>Book Trip!</Button></Col>
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
              {this.showAllTrips()}
            </div>
          </div>
        )
    }
}

export default UpcomingTrips
