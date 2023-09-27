import React,{Component}from 'react';
import {Link} from 'react-router-dom'

class ReactRouter extends Component {
    render(){
        return(
            <>
            <h1>path='/'</h1>
            <h3>reactRouter</h3>
            <Link to={'/ReactRouter2'}>
            ReactRouter2
            </Link>
            </>
        )
    }
}
export default ReactRouter;