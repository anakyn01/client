/*
npm install --save sweetalert2
*/
import React, {Component} from 'react';
import Swal from 'sweetalert2'

class Sweetalert2 extends Component{
    componentDidMount(){
        Swal.fire('1.SweetAlert').then(
            result => {
                alert('2. result.value : ' + result.value)
            }
        )
    }

    render(){
        return(
            <h1>sweetalert2</h1>
        )
    }
}
export default Sweetalert2;