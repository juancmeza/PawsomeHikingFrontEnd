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


class BookTrip extends Component {

    render(){
        return(
            <div>
                <Nav handleLogout={this.props.handleLogout}/>
                <h5>You have reached the BookTrip Component</h5>
            </div>

        )
    }
}

export default BookTrip
