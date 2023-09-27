import React, {Component} from 'react';

class Promise extends Component {
componentDidMount(){
    /*new Promise(resolve => {
        setTimeout (function(){
            resolve('수업');
        },1500);
    })*/
    new Promise((resolve, reject) =>{
        reject(Error("ERROR Info"))
    })
    /*.then(function(result){
        console.log(result);
        return result + 200;
    })*/
    .then(result => console.log("then " + result))
    .catch(result => console.log("catch : "+ result))
}

    render(){
        return(
            <h1>Promise</h1>
        )
    }
}
export default Promise;