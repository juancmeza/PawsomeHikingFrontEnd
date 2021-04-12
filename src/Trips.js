import React, {Component} from 'react';
import { Row, Col, Button} from "react-bootstrap"
import { Link } from 'react-router-dom';
import TripsTable from './TripsTable.js'


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


    render(){
        return(
            <div className="Trip-table">
                <TripsTable 
                    trips={this.selectTrips(this.props.trips)}
                    userTripsOnly={this.props.userTripsOnly}
                    user={this.props.user}
                >
                </TripsTable>
            </div>
        )
    }
}

export default Trips
