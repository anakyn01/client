import React, {Component}from 'react';

class Pdd extends Component {
    render() {
        let {
            ReactString,
            ReactNumber
        } = this.props
        return(
            <>
            {ReactString}{ReactNumber}
            </>
        )
    }
}
Pdd.defaultProps = {
    ReactString:"현재시각은 ",
    ReactNumber: 2135
}
export default Pdd;