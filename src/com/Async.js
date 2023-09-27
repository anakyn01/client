import React, {Component} from 'react';

class Async extends Component {
    componentDidMount = async () => {
        const response = await fetch ('http://date.jsontest.com/',{
        method:'POST',
            headers:{
            'Content-Type' :'application/json',   
            },
            body:{a:"react",b:928},   
        });
        const body = await response.json();
        alert(body.date)
    }

    render() {
        return(
            <h1>fetch get</h1>
        )
    }
}
export default Async;