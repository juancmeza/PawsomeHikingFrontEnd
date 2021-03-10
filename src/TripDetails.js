import React, {Component, Fragment} from 'react';
import Nav from './Nav';
import { Container, Row, Col, Button, Form, Alert} from "react-bootstrap"
import SimpleReactCalendar from 'simple-react-calendar'
import Map from './Map.js'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    Switch,
  } from "react-router-dom";

let mapLocation = {
  address: '720 Steiner Street',
  lat: 37.7765,
  lng: -122.4330,
}


class TripDetails extends Component {

  // state = {
  //   mapLocation: {

  //   }
  // }

    render(){

        const {date, location, time} = this.props.chosenTrip

        return(
            <div>
                <Container>
                    <Row>
                      <Col>
                          <h5>Next Trip:</h5>
                      </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div>Date: {date}</div>
                        </Col>
                        <Col>
                            <div>Location: {location}</div>
                        </Col>
                        <Col>
                            <div>Time: {time}</div>
                        </Col>
                    </Row>
                    <br></br>
                    <Row>
                        <Col>
                        <img src='http://www.san-francisco-travel-secrets.com/images/fort-funston-trails.jpg'/>
                        </Col>
                        <Col>
                        <Map location={mapLocation} zoomLevel={12.9}/>
                        </Col>
                    </Row>
                    <br></br>
                    <Row>
                      <Col>
                          <Link to='/bookTrip'><Button variant='outline-info'>Sign my puppy up!</Button></Link>
                      </Col>
                    </Row>
                    <br></br>
                </Container>
            </div>
        )
    }
}

export default TripDetails
