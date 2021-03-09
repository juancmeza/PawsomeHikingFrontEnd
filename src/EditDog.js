import React, {Component} from 'react';
import Nav from './Nav';
import { Container, Row, Col, Button, Form} from "react-bootstrap"

class EditDog extends Component {
  
  
  render() {
    
    const {name, weight, breed, age} = this.props.chosenDog

    return (
      <div>
            <div>
            <Nav handleLogout={this.props.handleLogout}/>
            <br></br>
            </div>
            <div>{name}</div>
      </div>
    )
  }
}

export default EditDog