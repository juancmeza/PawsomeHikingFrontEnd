import React, {Component} from 'react';
import Nav from './Nav';
import IntroCard from './IntroCard.js';
import {Link} from "react-router-dom";
import { Row, Col, Button} from "react-bootstrap"
import TripLocations from './TripLocations';




class Home extends Component {

  // toggleBooking = () => {
  //   const update = !this.state.booking
  //   this.setState({booking: update})
  // }

    render(){

        return(
            <div className='MainComponents'>
                {window.scrollTo(0,this.props.yCoordinate)}
                <Nav handleLogout={this.props.handleLogout} changeLocation={this.props.changeLocation} selectedLocation={this.props.selectedLocation}/>
                <div className='Landing'>
                  <br></br>
                  <div >
                    <Row>
                      <Col>
                          <Link to='/bookings'><Button variant='info' onClick={() => this.props.changeLocation('All')}>Book Now!</Button></Link>
                      </Col>
                    </Row>
                  </div>
                  {/* <TripDetails chosenTrip={this.props.chosenTrip} user={this.props.user} handleLogout={this.props.handleLogout} /> */}
                </div>
                <div className="Intro">
                <br></br>
                <br></br>
                  <IntroCard></IntroCard>
                </div>
                <div>
                  <TripLocations locations={this.props.locations} changeLocation={this.props.changeLocation}/>
                </div>
            </div>
        )
    }
}

export default Home
