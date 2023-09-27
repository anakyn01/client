/*
debounce는  dom스크롤 또는 숫자입력에 따른 api값 호출같이
이벤트가 과도하게 많은 호출을 할경우 지정한 시간동안 
호출네 제약을 걸어서 api호출 과부하를 방지하는 기술
지정된 시간이 0.5초이고 0.5초내에 5번이 호출되었다면
가장 마지막에 호출된 5번째  api만 서버로 호출합니다
npm i lodash
*/
import React,{Component} from 'react';
import {debounce} from "lodash";

class Debounce extends Component {
    debounceFunc = debounce(() => {
        console.log("Debounce API Call");
    },1000);
    
    render(){
        return(
            <>
            <h2>검색어 입력</h2>
            <input type="text" onChange={this.debounceFunc}/>
            </>
        ) 
    }

}
export default Debounce;