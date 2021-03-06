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

    user: null,
    loggedIn: false,
    selectedTrip: {
      date: null,
      location: null,
      time: null
    },
    trips: []

  }


  componentDidMount(){
    if (!this.state.user){
      this.getTrips()
      if (localStorage.token) {
        this.persistUser();

   }
  }
 }

  selectTrip = (id) => {
    const newSelectedTrip = this.state.trips.filter(trip => trip.id == id)
    console.log(newSelectedTrip)
    this.setState({selectedTrip: newSelectedTrip})
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
      trips: data,
      selectedTrip: data[0]
    })
  })
 }

 persistUser = () => {
  fetch(API + "/persist", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${localStorage.token}`,
    },
  })
    .then((resp) => resp.json())
    .then((data) => {
      if (data.user) {
        // const { username, id} = data;
        this.setState({
          user: data.user,
          loggedIn: true,
        });
      }
    });
  }

  handleAuthResponse = (data) => {
    if (data.user.username) {
      const { token } = data;
      this.setState({
        user: data.user,
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

  
  handleLogin = (userInfo) => {
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
  handleSignup = (userInfo) => {
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
            <Home handleLogout={this.handleLogout} chosenTrip={this.state.selectedTrip} user={this.state.user}/>
            :
            <Login handleLoginOrSignup={this.handleLogin}/>
            }
            </Route>
            <Route path='/upcomingTrips'>
            {this.state.loggedIn?
            <UpcomingTrips handleLogout={this.handleLogout} allTrips={this.state.trips} user={this.state.user} chosenTrip={this.state.selectedTrip} selectTrip={this.selectTrip}/>
            :
            <Login handleLoginOrSignup={this.handleLogin}/>
            }
            </Route>
            <Route path='/profile'>
            {this.state.loggedIn?
            <Profile handleLogout={this.handleLogout} user={this.state.user}/>
            :
            <Login handleLoginOrSignup={this.handleLogin}/>
            }
            </Route>
            <Route path='/friends'>
            {this.state.loggedIn?
            <Friends handleLogout={this.handleLogout} user={this.state.user}/>
            :
            <Login handleLoginOrSignup={this.handleLogin}/>
            }
            </Route>
            {/* <Route path='/bookTrip'>
            {this.state.loggedIn?
            <BookTrip handleLogout={this.handleLogout} allTrips={this.state.trips} user={this.state.user}/>
            :
            <Login handleLoginOrSignup={this.handleLogin}/>
            }
            </Route> */}
          </Switch>
        </Router>
      </div>
    );
  };
}

export default App;
