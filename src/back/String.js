import React, {Component} from 'react';
import {connect} from 'react-redux';
import {add} from '../actions'
import 'bootstrap/dist/css/bootstrap.css'

class String extends Component {
    render(){
        return(
            <input 
            value='Add200'
            type="button"
            className='btn btn-warning'
            onClick={this.addString}
            />

        )
    }
    addString = () => {
        this.props.store.dispatch(add());
    }
}
export default String;