import React, {Component} from 'react';
import LocationCard from './LocationCard'
import {Col, Row} from 'react-bootstrap'

class TripLocations extends Component {

  showLocations = (locations) => {
    return locations.map(location => {
      return <Col><LocationCard location={location}/></Col>
    })
  }

    render(){
        return(
            <div>
              <br></br>
              <h2> Trip Locations </h2>
              <br></br>
              <Row>
                {this.showLocations(this.props.locations)}
              </Row>
              <br></br>
              <br></br>
            </div>
        )
    }
}

export default TripLocations