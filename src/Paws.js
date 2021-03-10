import React, {Component} from 'react';
import PetsOutlinedIcon from '@material-ui/icons/PetsOutlined';
import { Row, Col, Button} from "react-bootstrap"



class Paws extends Component {


    render(){
        return(
            <div className='MainComponents'>
                <br></br>
                <br></br>
                <Row><Col></Col><Col></Col><Col></Col><Col></Col><Col><PetsOutlinedIcon fontSize='large'/></Col><Col></Col><Col></Col><Col></Col></Row>
                <br></br>
                <br></br>
                <Row><Col></Col><Col></Col><Col></Col><Col><PetsOutlinedIcon fontSize='large'/></Col><Col></Col><Col></Col><Col></Col><Col></Col></Row>
                <br></br>
                <br></br>
            </div>
        )
    }
}

export default Paws
