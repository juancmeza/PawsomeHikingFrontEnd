import React, {Component, Fragment} from 'react';
import Nav from './Nav';
import { Container, Row, Col, Button, Form, Alert} from "react-bootstrap"
import SimpleReactCalendar from 'simple-react-calendar'
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch,
  } from "react-router-dom";


class Home extends Component {

    render(){
        return(
            <div>
                <Nav handleLogout={this.props.handleLogout}/>
                <br></br>
                <Container>
                    <Row>
                        <Col>
                            <h5>Next Trip:</h5>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div>Date: {this.props.nextTrip.date}</div>
                        </Col>
                        <Col>
                            <div>Location: {this.props.nextTrip.location}</div>
                        </Col>
                        <Col>
                            <div>Time: {this.props.nextTrip.time}</div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Home
