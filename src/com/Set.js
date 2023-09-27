import React, {Component} from 'react';

class Set extends Component {
    constructor(props){
        super(props);
        this.state = {
            StateString:'react',
        }
    }

    StateCahange = (flag) => {
        if(flag == 'direct') this.state.StateString = '직접';
        if(flag == 'setstate') this.setState({StateString:'세팅'})
    }
    render(){
        return(
            <>
            <button onClick={(e) => this.StateCahange('direct',e)}>
            state 직접변경
            </button><br/>
            <button onClick={(e) => this.StateCahange('setstate',e)}>
            setState로 변경    
            </button>
            [state 변경하기] StateString : {this.state.StateString}
            </>
        )
    }
}
export default Set;