import React, {Component} from 'react';
import Nav from './Nav';
import ProfileTab from './ProfileTab.js'


class Profile extends Component {

    render(){
        return(
            <div justify='center'>
                <Nav handleLogout={this.props.handleLogout} changeLocation={this.props.changeLocation} selectedLocation={this.props.selectedLocation}/>
                {/* <br></br> */}
                <ProfileTab user={this.props.user} selectTrip={this.props.selectTrip} selectDog={this.props.selectDog} changeLocation={this.props.changeLocation} selectedLocation={this.props.selectedLocation}/>
                <br></br>
            </div>
        )
    }
}

export default Profile
