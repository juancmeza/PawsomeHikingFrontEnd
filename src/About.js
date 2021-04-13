import React, {Component, Fragment} from 'react';
import Nav from './Nav';
import IntroCard from './IntroCard.js';
import { BrowserRouter as Router, Link} from "react-router-dom";
import { Row, Col, Button} from "react-bootstrap"
import TripLocations from './TripLocations';
import Carousel from './Carousel.js'




class About extends Component {

    render(){

        return(
            <div className='About'>
                {window.scrollTo(0,this.props.yCoordinate)}
                <Nav handleLogout={this.props.handleLogout} changeLocation={this.props.changeLocation} selectedLocation={this.props.selectedLocation}/>
                <div className="Intro">
                <br></br>
                <br></br>
                  <IntroCard></IntroCard>
                </div>
                <div>
                  <TripLocations locations={this.props.locations} changeLocation={this.props.changeLocation}/>
                </div>
                <div>
                  <br></br>
                  <div >
                    <Row>
                      <Col>
                        <Carousel></Carousel>
                      </Col>
                    </Row>
                  </div>
                </div>
            </div>
        )
    }
}

export default About
