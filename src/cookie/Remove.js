import React, {Component} from 'react';
import cookie from 'react-cookies';

class Remove extends Component {

    componentDidMount() {
        const expires = new Date()
        expires.setMinutes(expires.getMinutes() + 60)
        cookie.save('userid','remove'
        ,{
            path:'/',
            expires,
        }
    );
    setTimeout(function(){
        cookie.remove('userid',{path:'/'});
    }, 1000);
    setTimeout(function(){
        alert(cookie.load('userid'))
    },2000);
}

    render(){
        return(
            <>
            <h3 className='my-3'>react-cookies Remove</h3>
            </>
        )
    }
}
export default Remove;