import React, {Component, Fragment} from 'react';
import Nav from './Nav';
import { Container, Row, Col, Button, Form, Alert, Card} from "react-bootstrap"
import SimpleReactCalendar from 'simple-react-calendar'
import BookTrip from './BookTrip.js'
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch,
  } from "react-router-dom";


class Trips extends Component {

  
  state ={
    myTrips: true,
    bookTrip: false
  }

  showTrips = (trips) => {
    return trips.map(trip => {
      const {id, date, location, time} = trip
      return (
      <Row>
        <Col>{date}</Col>
        <Col>{location}</Col>
        <Col>{time}</Col>
        <div>
            {this.props.userTripsOnly ?
            <Col><Button id={id} variant='outline-info'>Cancel</Button></Col> :
            <Col><Button id={id} variant='outline-info' onClick={() => this.renderBookTrip(id)}>Book Trip!</Button></Col>
            }
        </div>
      </Row>
      )
    })
  }

  renderBookTrip = (id) => {
    this.props.selectTrip(id)
    debugger
    this.setState({bookTrip: true})
  } 

    render(){
        return(
          <div>
            <Row>
              <Col>
                  <SimpleReactCalendar trips={this.props.trips}/>
              </Col>
            </Row>
            <br></br>
            <div>
              {this.state.bookTrip ?
                <BookTrip chosenTrip={this.props.chosenTrip} user={this.props.user}/> :
                this.showTrips(this.props.trips)
              }
            </div>
          </div>
        )
    }
}

export default Trips
