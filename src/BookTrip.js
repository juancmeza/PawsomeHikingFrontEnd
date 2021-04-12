import React, {Component, Fragment} from 'react';
import Nav from './Nav';
import { Row, Col, Button} from "react-bootstrap"
import FormGroup from '@material-ui/core/FormGroup';
import DogCheckbox from './DogCheckbox.js';
import Map from './Map.js'
import TripCard from './TripCard.js'
import Paws from './Paws.js'


import {
    BrowserRouter as Router,
    Redirect, Link
  } from "react-router-dom";

const API = 'http://localhost:3000'

const mapLocation = {
  address: '720 Steiner Street',
  lat: 37.7765,
  lng: -122.4330,
}

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
        let newTrip = {
            trip_id: this.props.chosenTrip.id,
          dogs: this.state.selectedDogs
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
        .then(data => {
          this.props.setUser(data.user)
        } 
        )
    }

    render(){
      // const {location, date, time} = this.props.chosenTrip

        return(
            <div>
              {window.scrollTo(0,0)}
                <div>
                  <Nav handleLogout={this.props.handleLogout} changeLocation={this.changeLocation}/>
                  <br></br>
                  <Paws />
                </div>
                <Row>
                  <Col></Col>
                  <Col>
                    <TripCard trip={this.props.chosenTrip} /> 
                  </Col>
                  <Col></Col>
                </Row>
                <br></br>
                <Row>
                  <Col>
                    <h5>Select dog(s) going on this trip:</h5>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <div></div>
                  </Col>
                  <Col>
                    <FormGroup>
                      {this.props.user.dogs.length > 0 ?
                       this.createCheckBoxes() :
                      <div>
                         <div>You have not created a profile for your dog(s)</div>
                         <br></br>
                         <Link to="/createDogProfile"><Button variant='outline-info'> Create dog profile </Button></Link>
                      </div>
                      }
                    </FormGroup>
                  </Col>
                  <Col>
                    <div></div>
                  </Col>
                </Row>
                <Paws />
                {this.props.user.dogs.length > 0 ?
                <div>
                  <Row>
                    <Col>
                      <h5>Drop off location: 720 Steiner Street</h5>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Map location={mapLocation} zoomLevel={12.9}/> :
                    </Col>
                    <br></br>
                  </Row>
                </div> :
                null
                }
                <br></br>
                <Row>
                  <Col>
                    {this.props.user.dogs.length > 0 ?
                      <Link to='/profile' ><Button variant='outline-info' onClick={() => this.bookTrip()}>Book Trip!</Button></Link> :
                      null                    
                    }
                  </Col>
                </Row>
                <Paws />
            </div>

        )
    }
}

export default BookTrip
