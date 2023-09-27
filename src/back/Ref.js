import React,{Component}from 'react';
import {useRef}from 'react';

class Ref extends Component{
    constructor(props){
        super(props);
        this.InputRef = React.createRef();
        /*this.InputRef = React.useRef();*/
    }
    RefFocus = (e) => {
        this.InputRef.current.focus();
    }
    JavascriptFocus() {
    document.getElementById('id').focus();
    }


    render(){
        return(
            <>
                <input 
                id="id"
                type="text"
                ref={this.InputRef}
                className='form-control'
                />
                <input
                type="button"
                value="Ref Focus"
                onClick={this.RefFocus}
                className='btn btn-outline-success'
                /><br/>
                <input
                type="button"
                value="Javascript Focus"
                onClick={this.JavascriptFocus}
                className='btn btn-outline-secondary'
                />
            </>
        )
    }
}
export default Ref;
/*
특정 dom을 잡아야할때 사용합니다
ref를 쓸때 createRef와 useRef두가지 방식으로
사용할수 있습니다
useRef가 좋다

createRef는 리렌더링 될때 마다 ref 값이 초기화되어
원하는 값을 얻지 못한다
*/