import React, {Component} from 'react';
import { Container, Row, Col, Button} from "react-bootstrap"
import Map from './Map.js'
import TripCard from './TripCard.js'
import Paws from './Paws.js'
import {
    BrowserRouter as Router,
    Link,

  } from "react-router-dom";

let mapLocation = {
  address: 'Fort Funston',
  lat: 37.7195,
  lng: -122.5028,
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
                    <br></br>
                    <Row>
                        <Col></Col>
                        <Col>
                          <TripCard trip={this.props.chosenTrip} />
                        </Col>
                        <Col></Col>
                    </Row>
                    <Paws />
                    <br></br>
                    <Row>
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
