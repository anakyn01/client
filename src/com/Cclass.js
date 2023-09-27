import React, {Component} from 'react';

class Cclass extends Component {
//html에 head영역입니다
constructor (props) {//state설정
    super(props);
    this.state = {
        StateString:'react',
        StateArrayObj:['react',{react:'200'}]
    }
}

//화살표함수
buttonClick = (type) => {
    if (type === 'String') {
        this.setState({StateString:'react'});
    }else{
        this.setState({StateArrayObj:['react',{react:'200'}]});
    }
}

    render(){
        console.log('render() 실행')
        return(
            <>
            <button onClick={e => this.buttonClick('String')}>
            문자열 변경   
            </button>
            <button onClick={e => this.buttonClick('ArrayObject')}>
            객체배열 변경   
            </button>
            </>
        )
    }
}
export default Cclass;