import React, {Component, Fragment} from 'react';
import Nav from './Nav';
import Trips from './Trips.js'
import Paws from './Paws.js'


class UpcomingTrips extends Component {

    render(){
        return(
          <div className='MainComponents'>
            <Nav handleLogout={this.props.handleLogout}/>
            <br></br>
            <Paws />
            <div>
                <Trips user={this.props.user} trips={this.props.allTrips} userTripsOnly={false} selectTrip={this.props.selectTrip}/>
            </div>
            <Paws />
            <Paws />
          </div>
        )
    }
}

export default UpcomingTrips
