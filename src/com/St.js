import React, {Component} from 'react';

class St extends Component {
    constructor(props){
        super(props);
        this.state = {
            StateString: this.props.reactString,
            StateNumber:940,
        }
    }
    render(){
        return(
            <>
            {this.state.StateString}
            {this.state.StateNumber}
            </>
        )
    }
}
export default St;