import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import {Button } from 'reactstrap';

class Onclick extends Component {

    buttonClick = (param) => {
        if(typeof param != 'string') param = "Click a"
        console.log('param : ' + param)
    }
    change = (e) => {
        let val = e.target.value;
        console.log('param : ' + val)
    }

    MouseMove = (tag) => {
        console.log('TAG : ' + tag);
    }

    render(){
        return(
            <>
            <Button 
            color="primary" 
            onClick={e => this.buttonClick("Click button")}
            className='my-5'
            >
            click button    
            </Button>
            <div
            onClick={e => this.buttonClick("click div")}
            className='my-5'
            >
            click div
            </div>
            <a href="javascript:" onClick={this.buttonClick}
            className='my-5'
            >
            Click a
            </a>
            <h1 className='my-5'>
            onChange 
            </h1>
            <input 
            type="text" 
            className='form-control' 
            onChange={this.change}
            />
            <select
            className='form-select'
            onChange={this.change}
            >
                <option value="react">react</option>
                <option value="js">js</option>
            </select>

            <h1 className='my-5'>
            mousemove   
            </h1>
            <div onMouseMove={e => this.MouseMove("div")}>
                <h3>DIV onMouseMove</h3>
            </div>
            <select
            className='form-select'
            onMouseMove={e => this.MouseMove("select")}
            >
                <option value="react">react</option>
                <option value="js">js</option>
            </select>
            </>
        )
    }
}
export default Onclick;

/*
oninput : 태그안의 값들이 변경될때 마다 이벤트가 발생
onchange : input태그의 포커스를 벗어났을때 (즉 입력이 끝났을때)
발생하는 이벤트
*/