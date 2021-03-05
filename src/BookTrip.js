import React, {Component, Fragment} from 'react';
import Nav from './Nav';
import { Container, Row, Col, Button, Form, Alert} from "react-bootstrap"
import SimpleReactCalendar from 'simple-react-calendar'
import FormGroup from '@material-ui/core/FormGroup';
import DogCheckbox from './DogCheckbox.js';


import {
    BrowserRouter as Router,
    Redirect,
  } from "react-router-dom";

const API = 'http://localhost:3000/users'

class BookTrip extends Component {

  state = {
    userDogs: [],
    selectedDogs: []
  }

  componentDidMount(){
    this.getUserDogs(this.props.user.id)
  }

  getUserDogs = (id) => {
    fetch(API + `/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.token}` 
      },
    })
    .then((resp) => resp.json())
    .then((data) => {
      // console.log(data)
      this.setState({
        userDogs: data.dogs
      })
    })
  }

    updateSelectedDogs = (dog) => {
      if (this.state.selectedDogs.includes(dog)){
        const removingDog = [...this.state.selectedDogs].filter(includedDog => includedDog.id !== dog.id)
        this.setState({selectedDogs: removingDog})
      } else {
        const addingDog = [...this.state.selectedDogs, dog]
        this.setState({selectedDogs: addingDog})
      }
      console.log(this.state.selectedDogs)
    }

    createCheckBoxes = () => {
      return (this.state.userDogs.map(dog => {
        // console.log(dog)
        return (
            <DogCheckbox user={this.props.user} dog={dog} updateSelectedDogs={() => this.updateSelectedDogs(dog)}/>
        )
      }))
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
                    {/* <Checkboxes user={this.props.user} userDogs={this.state.userDogs}/> */}
                    <FormGroup>{this.createCheckBoxes()}</FormGroup>
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
