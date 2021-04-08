import React, {Component} from 'react';


class TripLocations extends Component {

    render(){
        return(
            <div className='Locations'>
              <h2> Trip Locations </h2>
              <div>
                <div className='Funston'>
                  Fort Funston
                </div>
                <div className='Sigmund'>
                  Sigmund Stern Recreation Grove
                </div>
                <div className="Marshall's Beach">
                  Marshall's Beach
                </div>
                <div className="Lands End">
                  Lands End
                </div>
              </div>
            </div>
        )
    }
}

export default TripLocations