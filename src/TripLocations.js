import React, {Component} from 'react';
import LocationCard from './LocationCard'
import {Col, Row} from 'react-bootstrap'
import {Link} from 'react-router-dom'

class TripLocations extends Component {

  showLocations = (locations) => {
    return locations.map(location => {
      return <Col><Link to='/UpcomingTrips'><LocationCard location={location} changeLocation={this.props.changeLocation}/></Link></Col>
    })
  }

    render(){
        return(
            <div>
              <br></br>
              <h2> Trip Locations </h2>
              <br></br>
              <div className="Locations-row">
                <Row>
                  {this.showLocations(this.props.locations)}
                </Row>
              </div>
              <br></br>
              <br></br>
            </div>
        )
    }
}

export default TripLocations