import React, {Component} from 'react';

class Ps extends Component {
    render() {
        let props_value = this.props.props_val;
        props_value += 'from App.js'
        return(
            <>
            {props_value}
            </>
        )
    }
}
export default Ps;