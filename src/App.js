import React, {Component, Fragment} from 'react';
import './App.css';
import Login from "./Login.js";
import Home from "./Home.js";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

const API = "http://localhost:3000";

class App extends Component {

  state = {

    user: {},
    loggedIn: false

  }



  componentDidMount(){
    const token = localStorage.token;
    if (token) {
      this.persistUser(token);

    
    // if (localStorage.token){
    //   fetch('http://localhost:3000/api/v1/persist',{
    //     method: "GET",
    //     headers: {
    //     Authorization: `Bearer ${localStorage.token}`
    //     }
    //     }
    //   )

    // }
    //   .then(res => res.json())
    //   .then(res => {
    //     if (res.username){
    //       const {username, id} = res;
    //       this.setState({
    //         username: username
    //       })
    //     }
    //   })
      
    // }
   }
 }

 persistUser = (token) => {
  fetch(API + "/persist", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((resp) => resp.json())
    .then((data) => {
      if (data.username) {
        const { username } = data;
        this.setState({
          user: {
            username,
          },
          loggedIn: true,
        });
      }
    });
  }

  handleAuthResponse = (data) => {
    if (data.username) {
      const { username, id, token } = data;
      this.setState({
        user: {
          username,
          id,
        },
        error: null,
        loggedIn: true,
      });
      localStorage.setItem("token", token);
      localStorage.setItem("id", this.state.user.id);
    } else if (data.error) {
      this.setState({
        error: data.error,
      });
    }
  };

  
  handleLogin = (e, userInfo) => {
    debugger
    e.preventDefault();
    fetch(API + "/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInfo),
    })
      .then((resp) => resp.json())
      .then((data) => this.handleAuthResponse(data))
      .catch(console.log);
  };
  handleSignup = (e, userInfo) => {
    e.preventDefault();
    fetch(API + "/sign_up", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user: userInfo }),
    })
      .then((resp) => resp.json())
      .then((data) => {
        this.handleAuthResponse(data);
      })
      .catch(console.log);
  };

  handleLogout = () => {
    localStorage.clear();
    this.setState({
      user: {},
      loggedIn: false,
    });
  };

    
  
  // handleLogin = () => {
  //   fetch('http://localhost:3000/api/v1/login', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       Accept: 'application/json'
  //     },
  //     body: JSON.stringify({
  //       user: {
  //         username: this.state.username,
  //         password: this.state.password
  //       }
  //     })
  //     })
  //     .then(res => res.json())
  //     .then((res) => {
  //       console.log(res);
  //       localStorage.setItem('token', res.jwt)
  //       this.setState({login: true,
  //         username: this.state.username,
  //         password: this.state.password
  //       })
  //     })

  // }

  // handleSignUp = () => {
  //   fetch('http://localhost:3000/api/v1/users', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       Accept: 'application/json'
  //     },
  //     body: JSON.stringify({
  //       user: {
  //         username: this.state.username,
  //         password: this.state.password
  //       }
  //     })
  //     })
  //     .then(res => res.json())
  //     .then((res) => {
  //       console.log(res);
  //       localStorage.setItem('token', res.jwt)
  //       this.setState({login: true,
  //         username: this.state.username,
  //         password: this.state.password
  //       })
  //       this.setState({login: true})
  //     })

  // }

  render(){
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path='/'>
            {this.state.loggedIn?
            <Home handleLogout={this.handleLogout}/>
            :
            <Login handleLoginOrSignup={this.handleLogin}/>
            }
            </Route>
          </Switch>
        </Router>
      </div>
    );
  };
}

export default App;
