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

const API = 'http://localhost:3000'

class BookTrip extends Component {

  state = {
    selectedDogs: []
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
      return (this.props.user.dogs.map(dog => {
        return (
            <DogCheckbox user={this.props.user} dog={dog} updateSelectedDogs={() => this.updateSelectedDogs(dog)}/>
        )
      }))
    }

    bookTrip = () => {
      this.state.selectedDogs.map(dog => {
        console.log(dog.id, this.props.chosenTrip.id)
        let newTrip = {
          dog_trip: {
            dog_id: dog.id,
            trip_id: this.props.chosenTrip.id
          }
        } 

        fetch(API + "/dog_trips", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.token}` 
          },
          body: JSON.stringify(newTrip)
        })
        .then(res => res.json())
        .then(console.log)
      })
    }


    render(){
      const {location, date, time} = this.props.chosenTrip
      console.log(this.props.chosenTrip, 'test')


        return(
            <div>
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
                    <Button variant='outline-info' onClick={() => this.bookTrip()}>Book Trip!</Button>
                  </Col>
                </Row>
            </div>

        )
    }
}

export default BookTrip
