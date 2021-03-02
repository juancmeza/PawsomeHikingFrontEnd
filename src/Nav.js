import React, {Component} from 'react'
import './App.css';
import { Link } from 'react-router-dom';

class Nav extends Component {
  render() {
    return(
      <nav className="navbar">
        <h3 className="text-white"> Logo goes here </h3>
        <div className ="NavStuff">
          <Link to="/">
            <h5 className="text-white nav-text"> Home </h5>
          </Link>
          <Link to="/upcomingTrips">
            <h5 className = "text-white nav-text"> Upcoming Trips </h5>
          </Link>
          <Link to="/friends">
            <h5 className = "text-white nav-text"> Friends </h5>
          </Link>
          <Link to="/profile">
            <h5 className = "text-white nav-text"> Profile </h5>
          </Link>
          <div>
              <button onClick={this.props.handleLogout}>logout</button>
          </div>
        </div>
      </nav>
    )
  }
}
export default Nav;
