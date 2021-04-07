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

        // const {date, location, time} = this.props.chosenTrip

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
                        <Col>
                          <br></br>
                          <br></br>
                          <TripCard trip={this.props.chosenTrip} />
                        </Col>
                        <Col>
                          <Map location={mapLocation} zoomLevel={12.9}/>
                        </Col>
                    </Row>
                    <Paws />
                    {/* <Row>
                        <Col>
                        <Map location={mapLocation} zoomLevel={12.9}/>
                        </Col>
                    </Row> */}
                    <br></br>
                    <Row>
                      <Col>
                          <Link to='/bookTrip'><Button variant='outline-info'>Sign my puppy up!</Button></Link>
                      </Col>
                    </Row>
                    <Paws />
                </Container>
            </div>
        )
    }
}

export default TripDetails
