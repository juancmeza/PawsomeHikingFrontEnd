import React, {Component} from 'react';
import Nav from './Nav';
import { Container, Row, Col, Button, Form, Alert, Card} from "react-bootstrap"
import SimpleReactCalendar from 'simple-react-calendar'
import BookTrip from './BookTrip.js'
import { Link } from 'react-router-dom';


class Trips extends Component {

  state ={
    myTrips: true,
    bookTrip: false
  }

  formatDate = (inputDate) => {
    var date = new Date(inputDate);
    if (!isNaN(date.getTime())) {
      // Months use 0 index.
      return (
        date.getMonth() + 1 + "/" + date.getDate() + "/" + date.getFullYear()
      );
    }
  }

  formatTime = (inputTime) => {

    const options = {
      timeZone:"Canada/Central",
      hour12 : true,
      hour:  "numeric",
      minute: "numeric",seconds:"numeric"
   }

   return new Date(inputTime).toLocaleTimeString("en-US",options)

  }

  selectTrips = (locations) => {
    if (this.props.selectedLocation === 'All'){
      return locations
    }
    else {
      return locations.filter(trip => trip.location === this.props.selectedLocation)
    }
  }

  showTrips = (trips) => {

    let uniqueTrips = [...new Set(trips)]
    

    let tripIds = this.props.user.trips.map(trip => trip.id)
    return uniqueTrips.map(trip => {
      const {id, date, location, time} = trip
      return (
      <Row>
        <Col>{this.formatDate(date)}</Col>
        <Col>{location}</Col>
        <Col>{this.formatTime(time)}</Col>
        <Col>
          <div>
              {this.props.userTripsOnly ?
              <Col><Button id={id} variant='outline-info'>Cancel</Button></Col> :
              tripIds.includes(id) ?
              <Col><Button id={id} variant='outline-info'>Cancel</Button></Col> :
              <Col><Link to ='bookTrip'><Button id={id} variant='outline-info' onClick={() => this.renderBookTrip(id)}>Book Trip!</Button></Link></Col>
              }
          </div>
        </Col>
      </Row>
      )
    })
  }

  renderBookTrip = (id) => {
    this.props.selectTrip(id)
    this.setState({bookTrip: true})
  } 

    render(){
        return(
          <div>
            <br></br>
            <div>
                {this.showTrips(this.selectTrips(this.props.trips))}
            </div>
          </div>
        )
    }
}

export default Trips
