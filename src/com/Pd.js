import React, {Component} from 'react';
import datatype from 'prop-types';

class Pd extends Component {
    render(){
        let{String, Number, Boolean, Array, ObjectJson, Function}  = this.props
        return(
            <>
            <p>StringProps:{String}</p>
            <p>NumberProps:{Number}</p>
            <span>BooleanProps:{Boolean.toString()}</span>
            <p>ArrayProps:{Array.toString()}</p>
            <p>ObjectJsonProps:{JSON.stringify(ObjectJson)}</p>
            <p>FunctionProps:{Function}</p>
            </>
        )
    }

}
Pd.propTypes = {
    String: datatype.number,
    Number: datatype.number,
    Boolean: datatype.bool,
    Array: datatype.array,
    ObjectJson: datatype.object,
    Function: datatype.func,
}
export default Pd;