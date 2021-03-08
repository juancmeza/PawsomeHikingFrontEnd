import React, {Component, Fragment} from 'react';
import Nav from './Nav';
import Map from './Map.js';


const location = {
  address: '1600 Amphitheatre Parkway, Mountain View, california.',
  lat: 37.42216,
  lng: -122.08427,
}

class Friends extends Component {

    render(){
        return(
            <div>
                <Nav handleLogout={this.props.handleLogout}/>
                <h5>You have reached the Friends Component</h5>
                <br></br>
                <Map location={location} zoomLevel={15} />
            </div>
        )
    }
}

export default Friends
