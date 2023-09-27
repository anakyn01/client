import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import Onclick from '../back/Onclick';
import Ref from '../back/Ref';
import ContextApi from '../back/Context/ContextApi';
import String from '../back/String';
import {Container, Row, Col } from 'reactstrap';

function App() {
  return(
    <Container>
      <Row>
        <Col>
        <Onclick/>
        <Ref/>
        <ContextApi/>
        <String/>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
