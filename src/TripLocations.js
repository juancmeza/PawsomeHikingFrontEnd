import React, {Component} from 'react';
import LocationCard from './LocationCard'

class TripLocations extends Component {

  showLocations = (locations) => {
    return locations.map(location => {
      return <LocationCard location={location}/>
    })
  }

    render(){
        return(
            <div>
              <br></br>
              <h2> Trip Locations </h2>
              <br></br>
              <div className='Locations'>
                {this.showLocations(this.props.locations)}
              </div>
              <br></br>
              <br></br>
            </div>
        )
    }
}

export default TripLocations