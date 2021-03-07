import React, {Component, Fragment} from 'react';
import Nav from './Nav';
import { Container, Row, Col, Button, Form, Alert, Card} from "react-bootstrap"
import SimpleReactCalendar from 'simple-react-calendar'
import BookTrip from './BookTrip.js'
import DogCard from './DogCard.js'
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch,
  } from "react-router-dom";

const API = 'http://localhost:3000'


class UpcomingTrips extends Component {

  
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
            {this.state.myTrips ?
            <Col><Button id={id} variant='outline-info'>Cancel!</Button></Col> :
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
            <Nav handleLogout={this.props.handleLogout}/>
            <Row>
              <Col>
                  <SimpleReactCalendar trips={this.props.allTrips}/>
              </Col>
            </Row>
            <br></br>
            <div>
              {this.state.bookTrip ?
                <BookTrip chosenTrip={this.props.chosenTrip} user={this.props.user}/> :
                this.state.myTrips ? this.showTrips(this.props.user.trips) : this.showTrips(this.props.allTrips)
              }
            </div>
            <div>{this.props.user.dogs.map(dog => <DogCard dog={dog}/>)}</div>
          </div>
        )
    }
}

export default UpcomingTrips
