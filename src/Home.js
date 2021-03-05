import React, {Component, Fragment} from 'react';
import Nav from './Nav';
import { Container, Row, Col, Button, Form, Alert} from "react-bootstrap"
import TripDetails from './TripDetails.js'
import BookTrip from './BookTrip.js'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    Switch,
  } from "react-router-dom";


class Home extends Component {

  state = {
    booking: false
  }

  // componentDidMount() {
  //   this.setState({booking: false})
  // }

  toggleBooking = () => {
    const update = !this.state.booking
    this.setState({booking: update})
  }

    render(){
        const {date, location, time} = this.props.chosenTrip

        return(
            <div>
                <Nav handleLogout={this.props.handleLogout}/>
                <br></br>
                <div>
                  {this.state.booking ? 
                  <BookTrip chosenTrip={this.props.chosenTrip} user={this.props.user} toggleBooking={this.toggleBooking} handleLogout={this.props.handleLogout} toggleBooking={this.toggleBooking}/> : 
                  <TripDetails chosenTrip={this.props.chosenTrip} user={this.props.user} toggleBooking={this.toggleBooking} handleLogout={this.props.handleLogout} toggleBooking={this.toggleBooking}/>}
                </div>
            </div>
        )
    }
}

export default Home
