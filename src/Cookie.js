import React, {Component} from 'react'
import {connect} from 'react-redux'
import StrAddButton from './redux/StrAddButton'
import 'bootstrap/dist/css/bootstrap.css'
import {Container, Row, Col, Button} from 'reactstrap';
import CookieSave from './cookie/CookieSave';
import Basic from './basic/Basic'
import Event from './event/Event'
import CookieLoad from './cookie/CookieLoad';

class App extends Component {
    render(){
        return(
            <>
            <Container>
                <Row>
                    <Col>
                    <h1 className='my-3'>Start React js!</h1>
                    <span className='my-3'>{this.props.str}</span><br/>
                    <StrAddButton AppProp="200"/>
                    <CookieSave/>
                    <CookieLoad/>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col>
                        <Event/>
                    </Col>
                </Row>
            </Container>

            </>
        )
    }
}
let mapStateToProps = (state, props) => {
    console.log('Props from index.js : ' + props.indexProp)
    return{
        str: state.data.str,
    }
}
App = connect(mapStateToProps, null)(App);

export default App;