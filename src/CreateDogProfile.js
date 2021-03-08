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


class CreateDogProfile extends Component {

    render(){
        return(
            <div>
                <Nav handleLogout={this.props.handleLogout}/>
                <br></br>
                {/* <Form onSubmit={(e) => {e.preventDefault(); this.props.handleLoginOrSignup(this.state);}}>
                  <Form.Label style={{ color: "#E4E6EB" }}>Name</Form.Label>
                  <Form.Control
                  onChange={this.handleChange}
                  type="text"
                  name="Name"
                  placeholder="name..."
                  style={{
                    backgroundColor: "#181818",
                    borderColor: "#333333",
                    color: "#C0C0C0",
                  }}
                  />
                  <br />
                  <Form.Label style={{ color: "#E4E6EB" }}>Password</Form.Label>
                  <Form.Control
                    onChange={this.handleChange}
                    type="text"
                    name="Age"
                    placeholder=""
                    style={{
                      backgroundColor: "#181818",
                      borderColor: "#333333",
                      color: "#C0C0C0",
                    }}
                  />
                  <br />
                  <Button variant="dark" type="submit">Submit</Button>
                </Form> */}
            </div>
        )
    }
}

export default CreateDogProfile
