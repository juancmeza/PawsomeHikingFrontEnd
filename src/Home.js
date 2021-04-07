import React, {Component, Fragment} from 'react';
import Nav from './Nav';
import TripDetails from './TripDetails.js'
import Paws from './Paws.js'



class Home extends Component {

  // componentDidMount() {
  //   this.setState({booking: false})
  // }

  // toggleBooking = () => {
  //   const update = !this.state.booking
  //   this.setState({booking: update})
  // }

    render(){

        return(
            <div>
                <Nav handleLogout={this.props.handleLogout}/>
                {/* <Paws /> */}
                <div className='Top-for-bar'>
                  <TripDetails chosenTrip={this.props.chosenTrip} user={this.props.user} handleLogout={this.props.handleLogout} />
                </div>
            </div>
        )
    }
}

export default Home
