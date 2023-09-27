import React, {Component}from 'react';

class Force extends Component{
    constructor(props){
        super(props);
        this.state = {
            StateString: 'react',
        }
    }

    //함수
    StateChange = () => {
        this.state.StateString = '리액트';
        this.forceUpdate();
    }
    render(){
        return(
            <>
            <button onClick={(e) => this.StateChange(e)}>
            state 직접변경
            </button><br/>
            [state 변경하기] StateString : {this.state.StateString}
            </>
        )
    }
}
export default Force;

/*
react의 component관련 함수는 
lifecycle에 간접적으로 영향을 주는
setState와 forceupdate가 있다

기본적으로, state나 props가 변경되면, 
component's을 re-render한다.
하지만 state나 props가 아닌, 다른 data을 통해서, 
render() 함수가 동작하게 되어 있는 경우가 있을 수 있다.

이런 경우, React의 기본적인 component life cycle와 
무관하기 때문에,직접 React에게 해당 component가 
re-rendering되야 한다고 알려야 한다.
이때 사용가능한 함수가 forceUpdate() 이다. 

shouldComponentUpdate()는 건너뛴다.
즉 child component의 shouldComponentUpdate()는 호출된다.
React는 DOM의 변경을 잘 찾아서 변경된 부분만 update해준다.

그런데
forceUpdate()의 사용을 최대한 피하고, 
this.props 와 this.state로 처리하도록 권고 하고 있다.
*/