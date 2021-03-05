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

  
  componentDidMount() {
    this.getUserTrips(this.props.user.id)
  }
  
  getUserTrips = (id) => {
    fetch(API + `/users/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.token}` 
      },
    })
    .then((resp) => resp.json())
    .then((data) => {
      // console.log(data)
      this.setState({
        userDogs: data.trips
      })
    })
  }

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
