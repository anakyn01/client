import React from 'react'
import Children from "./contextChildren";

const {Provider, Consumer} = React.createContext()
export{Consumer}

class ContextApi extends React.Component{
    constructor (props) {
        super(props);
        this.setStateFunc = this.setStateFunc.bind(this)
    }
    setStateFunc(value){
        this.setState({name : value});
    }

    render(){
        const content = {
        ...this.state,
        setStateFunc: this.setStateFunc
        }
        return(
        <Provider value={content}>
            <Children/>
        </Provider>
        )
    }
}
export default ContextApi

/*
context => 앱의 모든 컴포넌트에 사용할수 있는 데이터를
전달할때 유용합니다

Props drilling : 중첩된 여러계층의 컴포넌트에게
전달해주는걸 의미 

Context Provider :
컨텍스트 공급자에서 하위 구성 요소를 래핑하고
상캐값을 제공합니다 원하는 값입력

Provider가 제공하는 프로퍼티를 사용하고 싶은 컴포넌트는
Consumer가 필요합니다
*/