import React from "react";
import { Form, Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";

class Signup extends React.Component {
  state = {
    username: "",
    password: "",
    first_name:"",
    last_name:'',
    email:'',
    phone_number:'',
  };
  handleChange = (e) => {
    let { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };
  render() {
    return (
      <div>
        <br></br>
        <Container>
          <Row>
            <Col>
            {/* <img src='http://www.san-francisco-travel-secrets.com/images/fort-funston-beach-and-dogs.jpg'/> */}
            </Col>
          </Row>
          <Row>
            <Col></Col>
            <Col>
              <br></br>
              <Form
                onSubmit={(e) => {
                  e.preventDefault();
                  this.props.handleSignup(this.state);
                }}
              >
                <Form.Label style={{ color: "#E4E6EB" }}>First Name</Form.Label>
                <Form.Control
                  onChange={this.handleChange}
                  type="text"
                  name="first_name"
                  placeholder="First Name"
                  style={{
                    backgroundColor: "#181818",
                    borderColor: "#0c7487",
                    color: "#C0C0C0",
                  }}
                />
                <br />
                <Form.Label style={{ color: "#E4E6EB" }}>Last Name</Form.Label>
                <Form.Control
                  onChange={this.handleChange}
                  type="text"
                  name="last_name"
                  placeholder="Last Name"
                  style={{
                    backgroundColor: "#181818",
                    borderColor: "#0c7487",
                    color: "#C0C0C0",
                  }}
                />
                <Form.Label style={{ color: "#E4E6EB" }}>
                  Username
                </Form.Label>
                <Form.Control
                  onChange={this.handleChange}
                  type="text"
                  name="username"
                  placeholder="Username"
                  style={{
                    backgroundColor: "#181818",
                    borderColor: "#0c7487",
                    color: "#C0C0C0",
                  }}
                />
                <br />
                <Form.Label style={{ color: "#E4E6EB" }}>Password</Form.Label>
                <Form.Control
                  onChange={this.handleChange}
                  type="password"
                  name="password"
                  placeholder="Password"
                  style={{
                    backgroundColor: "#181818",
                    borderColor: "#0c7487",
                    color: "#C0C0C0",
                  }}
                />
                <br />
                <Form.Label style={{ color: "#E4E6EB" }}>
                  Phone Number
                </Form.Label>
                <Form.Control
                  onChange={this.handleChange}
                  type="text"
                  name="phone_number"
                  placeholder="Phone Number"
                  style={{
                    backgroundColor: "#181818",
                    borderColor: "#0c7487",
                    color: "#C0C0C0",
                  }}
                />
                <br />
                <Form.Label style={{ color: "#E4E6EB" }}>
                  E-mail
                </Form.Label>
                <Form.Control
                  onChange={this.handleChange}
                  type="text"
                  name="email"
                  placeholder="E-mail"
                  style={{
                    backgroundColor: "#181818",
                    borderColor: "#0c7487",
                    color: "#C0C0C0",
                  }}
                />
                <br />
                <Button variant="outline-info" type="submit">
                  Submit
                </Button>
              </Form>
            </Col>
            <Col></Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default Signup;