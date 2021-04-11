import React, {Component} from 'react';
import { Container, Row, Col, Button, Form, Alert, Card} from "react-bootstrap"
import { Link } from 'react-router-dom';

// import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


class Trips extends Component {

  state ={
    myTrips: true,
    bookTrip: false
  }

  formatDate = (inputDate) => {
    var date = new Date(inputDate);
    if (!isNaN(date.getTime())) {
      // Months use 0 index.
      return (
        date.getMonth() + 1 + "/" + date.getDate() + "/" + date.getFullYear()
      );
    }
  }

  formatTime = (inputTime) => {

    const options = {
      timeZone:"Canada/Central",
      hour12 : true,
      hour:  "numeric",
      minute: "numeric",seconds:"numeric"
   }

   return new Date(inputTime).toLocaleTimeString("en-US",options)

  }

  selectTrips = (locations) => {
    if (this.props.selectedLocation === 'All'){
      return locations
    }
    else {
      return locations.filter(trip => trip.location === this.props.selectedLocation)
    }
  }

  showTrips = (trips) => {

    let uniqueTrips = [...new Set(trips)]
    

    let tripIds = this.props.user.trips.map(trip => trip.id)
    return uniqueTrips.map(trip => {
      const {id, date, location, time} = trip
      return (
      <TableRow>
        <TableCell>{this.formatDate(date)}</TableCell>
        <TableCell>{location}</TableCell>
        <TableCell>{this.formatTime(time)}</TableCell>
        <TableCell>
          <div>
              {this.props.userTripsOnly ?
              <Button id={id} variant='outline-info'>Cancel</Button> :
              tripIds.includes(id) ?
              <Button id={id} variant='outline-info'>Cancel</Button> :
              <Link to ='bookTrip'><Button id={id} variant='outline-info' onClick={() => this.renderBookTrip(id)}>Book Trip!</Button></Link>
              }
          </div>
        </TableCell>
      </TableRow>
      )
    })
  }

  renderBookTrip = (id) => {
    this.props.selectTrip(id)
    this.setState({bookTrip: true})
  } 

    render(){
        return(
          <div>
            <br></br>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell align="right">Location</TableCell>
                    <TableCell align="right">Time</TableCell>
                    <TableCell align="right"></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {this.showTrips(this.selectTrips(this.props.trips))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        )
    }
}

export default Trips
