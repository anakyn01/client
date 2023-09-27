import React from 'react'
import { Consumer } from './ContextApi';
import 'bootstrap/dist/css/bootstrap.css'
import {Button } from 'reactstrap';

class contextChildren extends React.Component{
    render(){
        return(
            <Consumer>
                {contextValue=>
                <p className='my-5'>
                <Button 
                onClick={e => contextValue.setStateFunc("react js")}
                color="primary"
                >
                    {contextValue.name}_button
                </Button>
                </p>
                }
            </Consumer>
        )
    }
}
export default contextChildren

/*
context를 이용하면 단계마다 일일이 props를
넘겨주지 않고 컴포넌트 트리전체에
데이터를 제공할수 있습니다
함수컴포넌트 안에서 context를 구독할수 있습니다
*/
