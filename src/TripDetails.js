import React, {Component, Fragment} from 'react';
import Nav from './Nav';
import { Container, Row, Col, Button, Form, Alert} from "react-bootstrap"
import SimpleReactCalendar from 'simple-react-calendar'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    Switch,
  } from "react-router-dom";


class TripDetails extends Component {

  state = {
    Booking: false
  }

    render(){

      // const {date, location, time} = this.props.chosenTrip
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
                        <img src='https://www.tideschart.com/maps/en/Fort-Funston-Beach-United-States-tides-map.png'/>
                        </Col>
                        <Col>
                            <img src='http://www.san-francisco-travel-secrets.com/images/fort-funston-trails.jpg'/>
                        </Col>
                    </Row>
                    <br></br>
                    <Row>
                      <Col>
                          <Button variant='outline-info'>Sign my puppy up!</Button>
                      </Col>
                    </Row>
                    <br></br>
                </Container>
            </div>
        )
    }
}

export default TripDetails
