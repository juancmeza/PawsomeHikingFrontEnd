import React, {Component, Fragment} from 'react';
import Nav from './Nav';
import { Container, Row, Col, Button, Form, Alert} from "react-bootstrap"
import ProfileCard from './ProfileCard.js';
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch,
  } from "react-router-dom";


class Profile extends Component {

    render(){
        return(
            <div>
                <Nav handleLogout={this.props.handleLogout}/>
                <br></br>
                <Row>
                  <Col></Col>
                  <Col>
                    <ProfileCard user={this.props.user}/>
                  </Col>
                  <Col></Col>
                </Row>
            </div>
        )
    }
}

export default Profile
