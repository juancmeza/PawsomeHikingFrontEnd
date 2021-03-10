import React, {Component} from 'react';
import Nav from './Nav';
import { Row, Col, Button, Form} from "react-bootstrap"
import { Link } from 'react-router-dom';


const API = 'http://localhost:3000'

class EditDog extends Component {
  
  state = {
    name: this.props.chosenDog.name,
    weight: this.props.chosenDog.weight,
    breed: this.props.chosenDog.breed,
    age: this.props.chosenDog.age,
    user_id: this.props.user.id,
    id: this.props.chosenDog.id,
  }

  handleChange = (e) => {
    let { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  updateDog = (dog) => {

    let newDog = {
      dog: dog
    } 

    fetch(API + "/dogs/" + `${dog.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.token}` 
      },
      body: JSON.stringify(newDog)
    })
    .then(res => res.json())
    .then(data => this.props.setUser(data.user))
  }
  
  render() {
    
    const {name, weight, breed, age} = this.props.chosenDog

    return (
      <div>
            <div>
            <Nav handleLogout={this.props.handleLogout}/>
            <br></br>
            </div>
            <Row>
              <Col></Col>
              <Col>
                <Form
                  onSubmit={(e) => {
                    e.preventDefault();
                    this.updateDog(this.state);
                  }}
                >
                  <Form.Label style={{ color: "#E4E6EB" }}>
                    Name
                  </Form.Label>
                  <Form.Control
                    onChange={this.handleChange}
                    type="text"
                    name="name"
                    placeholder={name}
                    style={{
                      backgroundColor: "#181818",
                      borderColor: "#333333",
                      color: "#C0C0C0",
                    }}
                  />
                  <br />
                  <Form.Label style={{ color: "#E4E6EB" }}>Weight</Form.Label>
                  <Form.Control
                    onChange={this.handleChange}
                    type="text"
                    name="weight"
                    placeholder={weight}
                    style={{
                      backgroundColor: "#181818",
                      borderColor: "#333333",
                      color: "#C0C0C0",
                    }}
                  />
                  <br />
                  <Form.Label style={{ color: "#E4E6EB" }}>Breed</Form.Label>
                  <Form.Control
                    onChange={this.handleChange}
                    type="text"
                    name="breed"
                    placeholder={breed}
                    style={{
                      backgroundColor: "#181818",
                      borderColor: "#333333",
                      color: "#C0C0C0",
                    }}
                  />
                  <br />
                  <Form.Label style={{ color: "#E4E6EB" }}>Age</Form.Label>
                  <Form.Control
                    onChange={this.handleChange}
                    type="text"
                    name="age"
                    placeholder={age}
                    style={{
                      backgroundColor: "#181818",
                      borderColor: "#333333",
                      color: "#C0C0C0",
                    }}
                  />
                  <br />
                  <Link to='profile'>
                    <Button variant="dark" type="submit">
                    Submit
                    </Button>
                  </Link>
                </Form>
              </Col>
              <Col></Col>
            </Row>
      </div>
    )
  }
}

export default EditDog