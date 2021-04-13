import React, {Component, Fragment} from 'react';
import Nav from './Nav';
import TripDetails from './TripDetails.js'
import Paws from './Paws.js'
import { BrowserRouter as Router, Link} from "react-router-dom";
import { Container, Row, Col, Button} from "react-bootstrap"
import TripLocations from './TripLocations';




class Home extends Component {

  // toggleBooking = () => {
  //   const update = !this.state.booking
  //   this.setState({booking: update})
  // }

    render(){

        return(
            <div className='Home'>
                {window.scrollTo(0,this.props.yCoordinate)}
                <Nav handleLogout={this.props.handleLogout} changeLocation={this.props.changeLocation} selectedLocation={this.props.selectedLocation}/>
                <div className='Landing'>
                  <br></br>
                  <div >
                    <Row>
                      <Col>
                          <Link to='/upcomingTrips'><Button variant='outline-info' onClick={() => this.props.changeLocation('All')}>Book a Trip!</Button></Link>
                      </Col>
                    </Row>
                  </div>
                  {/* <TripDetails chosenTrip={this.props.chosenTrip} user={this.props.user} handleLogout={this.props.handleLogout} /> */}
                </div>
                <div>
                  <TripLocations locations={this.props.locations} changeLocation={this.props.changeLocation}/>
                </div>
            </div>
        )
    }
}

export default Home
