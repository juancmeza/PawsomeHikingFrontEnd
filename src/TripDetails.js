import React, {Component, Fragment} from 'react';
import Nav from './Nav';
import { Container, Row, Col, Button, Form, Alert} from "react-bootstrap"
import SimpleReactCalendar from 'simple-react-calendar'
import Map from './Map.js'
import TripCard from './TripCard.js'
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
                        <Col></Col>
                        <Col>
                          <TripCard trip={this.props.chosenTrip} />
                        </Col>
                        <Col></Col>
                    </Row>
                    <br></br>
                    <Row>
                        <Col>
                        <img src='http://www.san-francisco-travel-secrets.com/images/fort-funston-trails.jpg'/>
                        <img src='https://i.pinimg.com/originals/89/94/ea/8994eaf9b1f80e21c9f44e544998f714.jpg'/>
                        <img src='https://greatruns.com/wp-content/uploads/2016/11/SanFran3.jpg'/>
                        <img src='https://ucarecdn.com/067bb93b-221c-4d23-ae61-26ba7ced96fb/-/resize/1000x/-/format/auto/-/progressive/yes/-/quality/lightest/'/>
                        <img src='https://www.nps.gov/common/uploads/cropped_image/primary/6C603C3C-A463-FE1F-8EF01871BE9615E8.jpg?width=1600&quality=90&mode=crop'/>
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
