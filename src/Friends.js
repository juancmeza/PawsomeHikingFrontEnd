import React, {Component, Fragment} from 'react';
import Nav from './Nav';
import Carousel from './Carousel.js'
import PetsOutlinedIcon from '@material-ui/icons/PetsOutlined';
import Signup from './Signup.js'
import Login from './Login.js'
import { Row, Col, Button} from "react-bootstrap"
import Paws from './Paws.js'



class Friends extends Component {

  state = {
    display: null,
  }

  displaySignup = () => {
    this.setState({display: 'signup'})
  }

  displayLogin = () => {
    this.setState({display: 'login'})
  }

    render(){
        return(
            <div className='MainComponents'>
                <Nav handleLogout={this.props.handleLogout}/>
                <br></br>
                <div>
                  <PetsOutlinedIcon fontSize='large'/>
                  <h3 className="text-white">PAWsome Hiking</h3>
                </div>
                <Paws />
                <Paws />
                <Button variant='outline-info' onClick={this.displaySignup}> Signup </Button><Button variant='outline-info' onClick={this.displayLogin}> Login </Button>
                <br></br>
                <div>
                  {!this.state.display ?
                  null :
                  this.state.display === 'signup' ?
                  <Signup /> :
                  <Login />
                  }
                </div>
                <Paws />
                <Paws />                
                <br></br>
                <Carousel />
                {/* <img src='http://www.san-francisco-travel-secrets.com/images/fort-funston-trails.jpg'/>
                <img src='https://i.pinimg.com/originals/89/94/ea/8994eaf9b1f80e21c9f44e544998f714.jpg'/>
                <img src='https://greatruns.com/wp-content/uploads/2016/11/SanFran3.jpg'/>
                <img src='https://ucarecdn.com/067bb93b-221c-4d23-ae61-26ba7ced96fb/-/resize/1000x/-/format/auto/-/progressive/yes/-/quality/lightest/'/>
                <img src='https://www.nps.gov/common/uploads/cropped_image/primary/6C603C3C-A463-FE1F-8EF01871BE9615E8.jpg?width=1600&quality=90&mode=crop'/> */}
            </div>
        )
    }
}

export default Friends
