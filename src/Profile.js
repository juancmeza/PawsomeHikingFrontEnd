import React, {Component, Fragment} from 'react';
import Nav from './Nav';
import ProfileTab from './ProfileTab.js'
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
                <ProfileTab />
                <Row>
                  <Col></Col>
                  <Col>
                    <ProfileCard user={this.props.user}/>
                  </Col>
                  <Col></Col>
                </Row>
                <br></br>
                <Row>
                  <Col>
                    <h5>My Trips:</h5>
                  </Col>
                </Row>
            </div>
        )
    }
}

export default Profile
