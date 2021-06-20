import React, {Component, Fragment} from 'react';
import './App.css';
import Main from './Main.js'
import Home from "./Home.js";
import UpcomingTrips from "./UpcomingTrips.js";
import Friends from "./Friends.js";
import Profile from "./Profile.js";
import BookTrip from "./BookTrip.js";
import CreateDogProfile from './CreateDogProfile'
import EditDog from './EditDog.js'
import About from './About.js';
import "bootstrap/dist/css/bootstrap.css";

import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";


const API = "https://pawsome-hiking-server.herokuapp.com";

class App extends Component {

  state = {

    user: null,
    loggedIn: false,
    selectedTrip: {
      date: '',
      location: '',
      time: ''
    },
    trips: [],
    locations: ['Fort Funston', 'Stern Grove', "Marshall's Beach", "Lands End" ],
    selectedLocation:'All',
    chosenDog: {
      name:'',
      weight:'',
      breed:'',
      age:''
    }
  }


  componentDidMount(){
    if (!this.state.user){
      this.getTrips()
      if (localStorage.token) {
        this.persistUser();

   }
  }
 }

  setUser = (user) => {
    console.log(user)
    this.setState({
      user: user
    })
  }

  selectDog = (id) => {
    const selectedDog = this.state.user.dogs.filter(dog => dog.id === id)[0]
    this.setState({chosenDog: selectedDog})
  }

  selectTrip = (id) => {
    const newSelectedTrip = this.state.trips.filter(trip => trip.id == id)[0]
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

  changeLocation = (location) => {
    this.setState({selectedLocation: location});
  }


  render(){
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path='/'>
            {this.state.loggedIn?
            <Home handleLogout={this.handleLogout} chosenTrip={this.state.trips[0]} user={this.state.user} locations={this.state.locations} changeLocation={this.changeLocation} selectedLocation={this.state.selectedLocation} yCoordinate={0}/>
            :
            <Main handleSignup={this.handleSignup} handleLogin={this.handleLogin}/>
            }
            </Route>
            <Route path='/upcomingTrips'>
            {this.state.loggedIn?
            <UpcomingTrips handleLogout={this.handleLogout} allTrips={this.state.trips} user={this.state.user} chosenTrip={this.state.selectedTrip} selectTrip={this.selectTrip} changeLocation={this.changeLocation} selectedLocation={this.state.selectedLocation}/>
            :
            <Main handleSignup={this.handleSignup} handleLogin={this.handleLogin}/>
            }
            </Route>
            <Route path='/profile'>
            {this.state.loggedIn?
            <Profile handleLogout={this.handleLogout} user={this.state.user} selectTrip={this.selectTrip} selectDog={this.selectDog} changeLocation={this.changeLocation} selectedLocation={this.state.selectedLocation}/>
            :
            <Main handleSignup={this.handleSignup} handleLogin={this.handleLogin}/>
            }
            </Route>
            <Route path='/friends'>
            {this.state.loggedIn?
            <Friends handleLogout={this.handleLogout} user={this.state.user}/>
            :
            <Main handleSignup={this.handleSignup} handleLogin={this.handleLogin}/>
            }
            </Route>
            <Route path='/createDogProfile'>
            {this.state.loggedIn ?
            <CreateDogProfile handleLogout={this.handleLogout} user={this.state.user} persistUser={this.persistUser} setUser={this.setUser}/>
            :
            <Main handleSignup={this.handleSignup} handleLogin={this.handleLogin}/>
            }
            </Route>
            <Route path='/bookTrip'>
            {this.state.loggedIn ?
            <BookTrip handleLogout={this.handleLogout} user={this.state.user} chosenTrip={this.state.selectedTrip} setUser={this.setUser} changeLocation={this.changeLocation} selectedLocation={this.state.selectedLocation}/>
            :
            <Main handleSignup={this.handleSignup} handleLogin={this.handleLogin}/>
            }
            </Route>
            <Route path='/editDog'>
            {this.state.loggedIn ?
            <EditDog handleLogout={this.handleLogout} user={this.state.user} setUser={this.setUser} chosenDog={this.state.chosenDog}/>
            :
            <Main handleSignup={this.handleSignup} handleLogin={this.handleLogin}/>
            }
            </Route>
            <Route path='/FortFunston'>
            {this.state.loggedIn?
            <UpcomingTrips handleLogout={this.handleLogout} user={this.state.user} allTrips={this.state.trips} changeLocation={this.changeLocation} selectedLocation={this.state.selectedLocation}/>
            :
            <Main handleSignup={this.handleSignup} handleLogin={this.handleLogin}/>
            }
            </Route>
            <Route exact path='/about'>
            {this.state.loggedIn?
            <About handleLogout={this.handleLogout} chosenTrip={this.state.trips[0]} user={this.state.user} locations={this.state.locations} changeLocation={this.changeLocation} selectedLocation={this.state.selectedLocation} yCoordinate={750}/>
            :
            <Main handleSignup={this.handleSignup} handleLogin={this.handleLogin}/>
            }
            </Route>
          </Switch>
        </Router>
      </div>
    );
  };
}

export default App;
