import React, {Component} from 'react'
import './App.css';
import { Link } from 'react-router-dom';
import Button from "react-bootstrap/Button";
import PetsOutlinedIcon from '@material-ui/icons/PetsOutlined';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import FilterHdrOutlinedIcon from '@material-ui/icons/FilterHdrOutlined';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';

class Nav extends Component {
  render() {
    console.log(this.props)
    return(
      <nav className="navbar">
        <div>
          <PetsOutlinedIcon />
          <h3 className='Desk-view'>PAWsome Hiking</h3>
        </div>
        <div className ="NavStuff">
          <Link to="/about">
            <h5 className='Desk-view'> About </h5>
          </Link>
          <Link to="/">
            <HomeOutlinedIcon className='Icons'/>
            <h5 className='Desk-view'> Home </h5>
          </Link>
          <div onClick={() => this.props.changeLocation('All')}>
            <Link to="/upcomingTrips">
              <FilterHdrOutlinedIcon className="Icons"/>
              <h5 className='Desk-view'> Upcoming Trips </h5>
            </Link>
          </div>
          {/* <Link to="/friends">
            <h5 className = "text-white nav-text"> Friends </h5>
          </Link> */}
          <Link to="/profile">
            <PersonOutlineOutlinedIcon className="Icons"/>
            <h5 className='Desk-view'> Profile </h5>
          </Link>
          <div>
              <Button variant='light' onClick={this.props.handleLogout}>logout</Button>
          </div>
        </div>
      </nav>
    )
  }
}
export default Nav;
