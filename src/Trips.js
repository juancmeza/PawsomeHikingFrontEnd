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

  showTrips = (trips) => {

    let uniqueTrips = [...new Set(trips)]
    

    let tripIds = this.props.user.trips.map(trip => trip.id)
    return uniqueTrips.map(trip => {
      const {id, date, location, time} = trip
      return (
      <Row>
        <Col>{date}</Col>
        <Col>{location}</Col>
        <Col>{time}</Col>
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
            <Row>
              <Col>
                  {/* <SimpleReactCalendar trips={this.props.trips}/> */}
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
