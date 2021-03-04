import React, {Component, Fragment} from 'react';
import Nav from './Nav';
import { Container, Row, Col, Button, Form, Alert} from "react-bootstrap"
import SimpleReactCalendar from 'simple-react-calendar'
import Checkboxes from './Checkboxes';


import {
    BrowserRouter as Router,
    Redirect,
  } from "react-router-dom";

const API = 'http://localhost:3000/users'


class BookTrip extends Component {

  state = {
    userDogs: []
  }

  componentDidMount(){
    this.getUserDogs(this.props.user.id)
  }

  getUserDogs = (id) => {
    fetch(API + `/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json", 
      },
    })
    .then((resp) => resp.json())
    .then((data) => {
      console.log(data)
      this.setState({
        userDogs: data.dogs
      })
    })
  }

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
                    <Checkboxes user={this.props.user} userDogs={this.state.userDogs}/>
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
