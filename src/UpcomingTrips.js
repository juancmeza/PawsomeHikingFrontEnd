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


class UpcomingTrips extends Component {

    render(){
        return(
            <div>
                <Nav handleLogout={this.props.handleLogout}/>
                <Row>
                        <Col>
                            <SimpleReactCalendar daysOfWeek={['Monday']}/>
                        </Col>
                </Row>
            </div>
        )
    }
}

export default UpcomingTrips
