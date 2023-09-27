import React, {Component} from 'react';
import Axios from "axios";

class Ax extends Component {
    componentDidMount(){
        /*Axios.get('http://date.jsontest.com/')*/
        Axios.post('http://date.jsontest.com/',{
            a:"axios", b:"post"
        })
        .then(response => {alert(response.data.date)})
    }
    render(){
        return(
            <h1>axios get, post</h1>
        )
    }
}
export default Ax;