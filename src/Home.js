import React, {Component, Fragment} from 'react';
import Nav from './Nav';
import TripDetails from './TripDetails.js'
import Paws from './Paws.js'
import { BrowserRouter as Router, Link} from "react-router-dom";
import { Container, Row, Col, Button} from "react-bootstrap"
import TripLocations from './TripLocations';




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
            <div className='Home'>
                <Nav handleLogout={this.props.handleLogout}/>
                {/* <Paws /> */}
                <div className='Landing'>
                  <br></br>
                  <div >
                    <Row>
                      <Col>
                          <Link to='/bookTrip'><Button variant='outline-info'>Book a Trip!</Button></Link>
                      </Col>
                    </Row>
                  </div>
                  {/* <TripDetails chosenTrip={this.props.chosenTrip} user={this.props.user} handleLogout={this.props.handleLogout} /> */}
                </div>
                <div>
                  <TripLocations />
                </div>
            </div>
        )
    }
}

export default Home
