import React, {Component} from 'react';


class Home extends Component {

    render(){
        return(
            <div>
                <button onClick={this.props.handleLogout}>logout</button>
            </div>
        )
    }
}

export default Home