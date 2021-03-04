import React, {Component, Fragment} from 'react';
import Nav from './Nav';
import { Container, Row, Col, Button, Form, Alert} from "react-bootstrap"
import SimpleReactCalendar from 'simple-react-calendar'
import Checkboxes from './Checkboxes';


import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch,
  } from "react-router-dom";


class BookTrip extends Component {


    render(){

      const {location, date, time} = this.props.allTrips[0]

        return(
            <div>
                <Nav handleLogout={this.props.handleLogout}/>
                <br></br>
                <Row>
                  <Col>
                    <div>
                      Trip to: {location}
                    </div>
                  </Col>
                  <Col>
                    <div>
                      Date: {date} 
                    </div>
                  </Col>
                  <Col>
                    <div>
                      Time: {time} 
                    </div>
                  </Col>
                </Row>
                <br></br>
                <Row>
                  <Col>
                    <h6>Drop off location: Some address</h6>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <img src='https://i.insider.com/5a9d79812b66e624008b4573?width=500&format=jpeg&auto=webp'/>
                  </Col>
                  <br></br>
                </Row>
                <br></br>
                <Row>
                  <Col>
                    <h6>Select puppies going on this trip:</h6>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <div></div>
                  </Col>
                  <Col>
                    <Checkboxes user={this.props.user}/>
                  </Col>
                  <Col>
                    <div></div>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Button variant='outline-dark'>Book Trip!</Button>
                  </Col>
                </Row>
            </div>

        )
    }
}

export default BookTrip
