import React, {Component, Fragment} from 'react';
import Nav from './Nav';
import { Container, Row, Col, Button, Form} from "react-bootstrap"
import ProfileCard from './ProfileCard.js';
import { Link } from 'react-router-dom';
import Paws from './Paws.js'



  const API = 'http://localhost:3000'

class CreateDogProfile extends Component {

  state = {
    name:'',
    weight:'',
    breed:'',
    age:'',
    user_id: this.props.user.id
  }

  createDog = (dog) => {

      let newDog = {
        dog: dog
      } 

      fetch(API + "/dogs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.token}` 
        },
        body: JSON.stringify(newDog)
      })
      .then(res => res.json())
      .then(data => this.props.setUser(data.user))
  }

  handleChange = (e) => {
    let { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

    render(){
        return(
            <div>
                <Nav handleLogout={this.props.handleLogout}/>
                <br></br>
                <Paws />
                <Row>
                  <Col></Col>
                  <Col>
                    <Form onSubmit={(e) => {e.preventDefault(); this.createDog(this.state);}}>
                      <Form.Label style={{ color: "#E4E6EB" }}>Name</Form.Label>
                      <Form.Control
                      onChange={this.handleChange}
                      type="text"
                      name="name"
                      placeholder="Name"
                      style={{
                        backgroundColor: "#181818",
                        borderColor: "#0c7487",
                        color: "#C0C0C0",
                      }}
                      />
                      <br />
                      <Form.Label style={{ color: "#E4E6EB" }}>Weight</Form.Label>
                      <Form.Control
                        onChange={this.handleChange}
                        type="text"
                        name="weight"
                        placeholder="Weight"
                        style={{
                          backgroundColor: "#181818",
                          borderColor: "#0c7487",
                          color: "#C0C0C0",
                        }}
                      />
                      <br />
                      <Form.Label style={{ color: "#E4E6EB" }}>Breed</Form.Label>
                      <Form.Control
                        onChange={this.handleChange}
                        type="text"
                        name="breed"
                        placeholder="Breed"
                        style={{
                          backgroundColor: "#181818",
                          borderColor: "#0c7487",
                          color: "#C0C0C0",
                        }}
                      />
                      <br />
                      <Form.Label style={{ color: "#E4E6EB" }}>Age</Form.Label>
                      <Form.Control
                        onChange={this.handleChange}
                        type="text"
                        name="age"
                        placeholder="Age"
                        style={{
                          backgroundColor: "#181818",
                          borderColor: "#0c7487",
                          color: "#C0C0C0",
                        }}
                      />
                      <br />
                      <Link to='profile'><Button variant="outline-info" type="submit">Submit</Button></Link>
                    </Form>
                  </Col>
                  <Col></Col>
                </Row>
                <Paws />
                <Paws />

            </div>
        )
    }
}

export default CreateDogProfile
