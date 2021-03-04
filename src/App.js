import React, {Component, Fragment} from 'react';
import './App.css';
import Login from "./Login.js";
import Home from "./Home.js";
import UpcomingTrips from "./UpcomingTrips.js";
import Friends from "./Friends.js";
import Profile from "./Profile.js";
import BookTrip from "./BookTrip.js";

import "bootstrap/dist/css/bootstrap.css";

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
    loggedIn: false,
    trips: []

  }


  componentDidMount(){
    const token = localStorage.token;
    this.getTrips();
    if (token) {
      this.persistUser(token);

   }
 }


 getTrips = () => {
  fetch(API + "/trips", {
    method: "GET",
    headers: {
      "Content-Type": "application/json", 
    },
  })
  .then((resp) => resp.json())
  .then((data) => {
    console.log(data)
    this.setState({
      trips: data
    })
  })
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
        const { username, id } = data;
        this.setState({
          user: {
            username,
            id
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


  render(){
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path='/'>
            {this.state.loggedIn?
            <Home handleLogout={this.handleLogout} nextTrip={this.state.trips[0]}/>
            :
            <Login handleLoginOrSignup={this.handleLogin}/>
            }
            </Route>
            <Route path='/upcomingTrips'>
            {this.state.loggedIn?
            <UpcomingTrips handleLogout={this.handleLogout} allTrips={this.state.trips}/>
            :
            <Login handleLoginOrSignup={this.handleLogin}/>
            }
            </Route>
            <Route path='/profile'>
            {this.state.loggedIn?
            <Profile handleLogout={this.handleLogout}/>
            :
            <Login handleLoginOrSignup={this.handleLogin}/>
            }
            </Route>
            <Route path='/friends'>
            {this.state.loggedIn?
            <Friends handleLogout={this.handleLogout}/>
            :
            <Login handleLoginOrSignup={this.handleLogin}/>
            }
            </Route>
            <Route path='/bookTrip'>
            {this.state.loggedIn?
            <BookTrip handleLogout={this.handleLogout} allTrips={this.state.trips}/>
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
