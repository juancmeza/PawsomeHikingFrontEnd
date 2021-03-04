import React from "react";
import { Form, Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
class Login extends React.Component {
  state = {
    username: "",
    password: "",
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
        <Container>
          <Row>
            <Col>
            <img src='http://www.san-francisco-travel-secrets.com/images/fort-funston-beach-and-dogs.jpg'/>
            </Col>
          </Row>
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              this.props.handleLoginOrSignup(this.state);
            }}
          >
            <Form.Label style={{ color: "#E4E6EB" }}>
              {this.props.ioo}
            </Form.Label>
            <Form.Control
              onChange={this.handleChange}
              type="text"
              name="username"
              placeholder="Username..."
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
              type="password"
              name="password"
              placeholder="Password..."
              style={{
                backgroundColor: "#181818",
                borderColor: "#333333",
                color: "#C0C0C0",
              }}
            />
            <br />
            <Button variant="dark" type="submit">
              Submit
            </Button>
          </Form>
        </Container>
      </div>
    );
  }
}
export default Login;