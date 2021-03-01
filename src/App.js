import React, {Component} from 'react';
import './App.css';

class App extends Component {

  state = {
    username: null,
    email: null,
    password: null,
    login: false,
    store: null

  }

  
  login(){
    fetch('http://localhost:3000/api/v1/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(this.state)
      })
      .then(res => res.json())
      .then((res) => {
        console.log(res);
        localStorage.setItem('login', JSON.stringify({
          login: true,
          token: res.token
        }))
      })

  }
  render(){
    return (
      <div className="App">
        <form onSubmit={this.login()}>
          <label>
            <input
              onChange={(e) => this.setState({username: e.target.value})}
              className="form-control form-control-lg"
              type="text"
              placeholder="username"
              id="username"
              name="username"
            />{" "}
            <br />
          </label>

          <label>
            <input
              onChange={(e) => this.setState({password: e.target.value})}
              className="form-control form-control-lg"
              type="password"
              placeholder="password"
              id="password"
              name="password"
            />{" "}
            <br />
          </label>
          <button
            className="btn btn-outline-light btn-block"
            type="submit"
          >
            Sign up
          </button>
        </form>
      </div>
    );
  };
}

export default App;
