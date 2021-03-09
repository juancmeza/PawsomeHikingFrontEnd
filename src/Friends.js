import React, {Component, Fragment} from 'react';
import Nav from './Nav';
import Map from './Map.js';


const location = {
  address: 'Some addres',
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
                <Map location={location} zoomLevel={11} />
            </div>
        )
    }
}

export default Friends
