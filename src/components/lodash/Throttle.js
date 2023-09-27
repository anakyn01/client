/*
debounce => 연이은 이벤트 중에 마지막 이벤트만 인식
throttle =>  이벤트가 발생하고서 일정 주기마다 
이벤트가 발생되도록 해준다
(일정주기가 끝나지 않으면 이벤트를 호출하지 않는다)
*/
import React, {Component} from 'react';
import {throttle} from "lodash";

class Throttle extends Component {
    throttleFunc = throttle(()=>{
        console.log("Throttle API Call")
    },1000);

    render(){
        return(
            <>
            <h2>검색어 입력</h2>
            <input type="text" onChange={this.throttleFunc}/>
            </>
        )
    }
}
export default Throttle;