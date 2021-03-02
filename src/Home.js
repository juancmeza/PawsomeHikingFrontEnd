import React, {Component, Fragment} from 'react';
import Nav from './Nav';
import { Container, Row, Col, Button, Form, Alert} from "react-bootstrap"
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
                            <div></div>
                        </Col>
                        <Col>
                            <div>Date:</div>
                        </Col>
                        <Col>
                            <div>Location:</div>
                        </Col>
                        <Col>
                            <div>Time:</div>
                        </Col>
                        <Col>
                            <div></div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Home
