import React, {Component, Fragment} from 'react';
import Nav from './Nav';
import Trips from './Trips.js'
import Paws from './Paws.js'


class UpcomingTrips extends Component {

  // componentDidMount(){
  //   this.props.changeLocation('All')
  // }

    render(){
        return(
          <div className='MainComponents'>
            {window.scrollTo(0,0)}
            <Nav handleLogout={this.props.handleLogout} changeLocation={this.props.changeLocation}/>
            <br></br>
            <Paws />
            <div>
                <Trips user={this.props.user} trips={this.props.allTrips} userTripsOnly={false} selectTrip={this.props.selectTrip} changeLocation={this.props.changeLocation} selectedLocation={this.props.selectedLocation}/>
            </div>
            <Paws />
            <Paws />
          </div>
        )
    }
}

export default UpcomingTrips
