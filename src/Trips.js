import React, {Component} from 'react';
import { Container, Row, Col, Button, Form, Alert, Card} from "react-bootstrap"
import { Link } from 'react-router-dom';
import TripsTable from './TripsTable.js'


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
          <Col><div className="Trip-row">{this.formatDate(date)}</div></Col>
          <Col><div className="Trip-row">{location}</div></Col>
          <Col><div className="Trip-row">{this.formatTime(time)}</div></Col>
          <Col>
            <div className="Trip-row">
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


    render(){
        return(
          <div>
            <br></br>
            <div className="Trip-table">
                <TripsTable 
                    trips={this.selectTrips(this.props.trips)}
                    formatDate={this.formatDate}
                    format
                >
                </TripsTable>
            </div>
          </div>
        )
    }
}

export default Trips
