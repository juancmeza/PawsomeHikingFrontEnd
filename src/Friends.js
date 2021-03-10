import React, {Component, Fragment} from 'react';
import Nav from './Nav';
import Map from './Map.js';
import Carousel from './Carousel.js'


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
                <Carousel />
                <img src='http://www.san-francisco-travel-secrets.com/images/fort-funston-trails.jpg'/>
                <img src='https://i.pinimg.com/originals/89/94/ea/8994eaf9b1f80e21c9f44e544998f714.jpg'/>
                <img src='https://greatruns.com/wp-content/uploads/2016/11/SanFran3.jpg'/>
                <img src='https://ucarecdn.com/067bb93b-221c-4d23-ae61-26ba7ced96fb/-/resize/1000x/-/format/auto/-/progressive/yes/-/quality/lightest/'/>
                <img src='https://www.nps.gov/common/uploads/cropped_image/primary/6C603C3C-A463-FE1F-8EF01871BE9615E8.jpg?width=1600&quality=90&mode=crop'/>
            </div>
        )
    }
}

export default Friends
