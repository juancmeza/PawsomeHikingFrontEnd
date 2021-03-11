import React, {Component, Fragment} from 'react';
import Nav from './Nav';
import { Container, Row, Col, Button, Form, Alert} from "react-bootstrap"
import TripDetails from './TripDetails.js'
import BookTrip from './BookTrip.js'
import Paws from './Paws.js'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    Switch,
  } from "react-router-dom";


class Home extends Component {

  // componentDidMount() {
  //   this.setState({booking: false})
  // }

  // toggleBooking = () => {
  //   const update = !this.state.booking
  //   this.setState({booking: update})
  // }

    render(){

        return(
            <div>
                <Nav handleLogout={this.props.handleLogout}/>
                <br></br>
                <Paws />
                <div>
                  <TripDetails chosenTrip={this.props.chosenTrip} user={this.props.user} handleLogout={this.props.handleLogout} />
                </div>
            </div>
        )
    }
}

export default Home
