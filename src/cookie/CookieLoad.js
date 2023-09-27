import React, {Component} from 'react';
import cookie from 'react-cookies';

class CookieLoad extends Component{

    componentDidMount(){
    const expires = new Date()   
    expires.setMinutes(expires.getMinutes() + 60)
    cookie.save('userid',"skyworkor",{
        path:'/',
        expires,
      }
    )
    setTimeout(function(){
        alert(cookie.load('userid'))
    },1000);
    }
    render(){
        return(
            <>
           <h3 className='my-3'>
            react-cookies Load
           </h3>
            </>
        )
    }
}
export default CookieLoad;