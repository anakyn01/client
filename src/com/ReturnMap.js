import React, {Component} from 'react';
//react를 사용하려면 es6에 몇가지요소를 기억해야 하는데
//일반적으로 어레이는 map을 사용합니다
class ReturnMap extends Component{
    render(){
const element_Array = [
    <li>react js</li>,
    <li>vue js</li>,
    <li>next js</li>
]
        return(
        <ul>
        {element_Array.map((array_val) => array_val)}
        </ul>
        )
    }
}
export default ReturnMap;