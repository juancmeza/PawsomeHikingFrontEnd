import React, {Component} from 'react';
import Nav from './Nav';
import { Row, Col, Button, Form} from "react-bootstrap"
import Paws from './Paws.js'
import {withRouter} from 'react-router-dom'

const API = 'http://localhost:3000'

class CreateDogProfile extends Component {

  state = {
    name:'',
    weight:'',
    breed:'',
    age:'',
    user_id: this.props.user.id,
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
      .then(data => {
        this.props.setUser(data.user)
        this.props.history.push('/profile')
      }
    )
  }

  handleChange = (e) => {
    let { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

    render(){
      console.log(this.props)
        return(
            <div>
                <Nav handleLogout={this.props.handleLogout}/>
                <br></br>
                <Paws />
                <Row>
                  <Col></Col>
                  <Col>
                    <Form onSubmit={(e) => {
                      e.preventDefault(); 
                      this.createDog(this.state)}}>
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
                      <Button variant="outline-info" type="submit">Submit</Button>
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

export default withRouter(CreateDogProfile)
