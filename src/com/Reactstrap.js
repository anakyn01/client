import React, {Component} from 'react';
import {Alert, UncontrolledAlert, Badge, Button,Breadcrumb, 
BreadcrumbItem,  DropdownToggle, DropdownItem,ButtonDropdown, DropdownMenu, 
ButtonGroup, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle,
UncontrolledCarousel,UncontrolledCollapse,Fade,Form,Label,Input,Row,Col,FormGroup,
InputGroup, InputGroupText, ListGroup, ListGroupItem, Modal, ModalHeader,
ModalBody, ModalFooter, Collapse, Navbar, NavbarToggler, NavbarBrand,
Nav, NavItem, NavLink, Pagination, PaginationItem, PaginationLink, Table,
TabContent, TabPane
} from 'reactstrap';

const items = [
    {
        src: 'logo192.png',
        altText:'슬라이드1 이미지 대체문구',
        caption:'슬라이드1 설명',
        header:'슬라이드1 제목'
    },
    {
        src: 'logo512.png',
        altText:'슬라이드2 이미지 대체문구',
        caption:'슬라이드2 설명',
        header:'슬라이드2 제목'
    },
    {
        src: '',
        altText:'슬라이드3 이미지 대체문구',
        caption:'슬라이드3 설명',
        header:'슬라이드3 제목'
    }
]

class Reactstrap extends Component {
constructor(props){
    super(props);
        this.state = {//초기값 설정하고 함수로 값을 변동
            dropdownOpen: false, 
            number:10, 
            fadeInOut:true, 
            modal:false,
            collapsed:false,
            TabState:'React'
        }
    }
        /*toggle = (e) => {
            this.setState({
                dropdownOpen: !this.state.dropdownOpen,
                fadeInOut: !this.state.fadeInOut,
                modal: !this.state.modal,
                collapsed: !this.state.collapsed
            })
        }*/
        toggle = (tabnum) => {
            if(this.state.TabState !== tabnum) this.setState({TabState:tabnum});
        }
        pagination = (type) => {
            alert("Go " + type)
        }

        move = (type, e) => {
            if (type === 'Left'){
                this.setState({number:this.state.number - 1})
            }else if (type === 'Right')(
                this.setState({number:this.state.number + 1})
            )
        }

    render() {
        return(
            <>
            <h1>Tabs</h1>
<Nav tabs>
    <NavItem>
        <NavLink onClick={()=>{this.toggle('React');}}>First Tab</NavLink>
    </NavItem>
    <NavItem>
        <NavLink onClick={()=>{this.toggle('200');}}>Second Tab</NavLink>
    </NavItem>
</Nav>

<TabContent activeTab={this.state.TabState}>
    <TabPane tabId="React"><h3>React</h3></TabPane>
    <TabPane tabId="200"><h3>200</h3></TabPane>
</TabContent>



            <h1>Table</h1>
            <Table borderless size="sm">
                <thead>
                    <tr>
                        <th>number</th>
                    </tr>
                </thead>
            </Table>
            <h1>pagination</h1>
            <Pagination size="lg" aria-label="Page navigation example">
                <PaginationItem>
                    <PaginationLink previous onClick={e => this.pagination ("previous")}/>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink onClick={e => this.pagination ("1")}>1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink onClick={e => this.pagination ("2")}>2</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink last onClick={e => this.pagination ("last")}/>
                </PaginationItem>
            </Pagination>
            <h1>nav</h1>
            <Navbar color="faded" light>
                <NavbarBrand href="#" className='mr-auto'>
                    Navbar
                </NavbarBrand>
                <NavbarToggler onClick={this.toggle} className="mr-2"/>
                <Collapse isOpen={this.state.collapsed} navbar>
                    <Nav navbar>
                        <NavItem>
                            <NavLink href="#">
                                react
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">
                                vue
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
            <h1>alert</h1>
            <Alert color="light">
                Simple Alert [color:light]
            </Alert>
            <UncontrolledAlert color="warning">
                UncontrolledAlert [color : warning]
            </UncontrolledAlert>

            <h1>Badge</h1>
            <h1>PRODUCT NAME <Badge color="secondary">hit</Badge></h1>
            <Button color="light" outline>
                Accessor <Badge color="dark">4</Badge>
            </Button>
            <Badge color="danger" pill>pill</Badge>
            <Badge href="#" color="light">GoLink</Badge>

            <h1>Breadcrumb</h1>
            <div id="top">
                <Breadcrumb tag="nav" listTag="div">
                    <BreadcrumbItem tag="a" href="#top">
                    Go_Top
                    </BreadcrumbItem>
                    <BreadcrumbItem tag="a" href="#bottom">
                    Go_bottom
                    </BreadcrumbItem>
                </Breadcrumb>
                <div id="bottom">
                    <span>bottom</span>
                </div>
            </div>
            <h1>
            button toggle
            </h1>
            <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                <DropdownToggle caret>
                버튼 Dropdown
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem header>헤더</DropdownItem>
                    <DropdownItem disabled>비활성화 버튼</DropdownItem>
                    <a href="#">
                        <DropdownItem>
                            사이트로 이동
                        </DropdownItem>
                    </a>
                    <DropdownItem onClick={e => alert("Alert 버튼")}>
                        Alert버튼
                    </DropdownItem>
                </DropdownMenu>
            </ButtonDropdown>

            <h1>ButtonGroup</h1>
            <ButtonGroup>
                <Button onClick={e => this.move('Left')} color="primary">Left</Button>
                <Button onClick={e => this.move('Middle')}>Middle</Button>
                <Button onClick={e => this.move('Right')} color="danger">Right</Button>
            </ButtonGroup>
            <br/>{this.state.number}

            <h1>button</h1>
            <Button color="primary">blue</Button><br/>
            <Button color="info">teal</Button><br/>
            <Button color="success">green</Button><br/>

            <h1>Card</h1>
            <Card>
                <CardImg top height="200px"/>
                <CardBody>
                    <CardTitle>
                        Card제목
                    </CardTitle>                   
                </CardBody>
                <CardSubtitle>
                    Card 부제목
                </CardSubtitle>
                <CardText>
                    lorem
                </CardText>
                <Button>
                    버튼
                </Button>
            </Card>

            <h1>Carousel</h1>
            <UncontrolledCarousel items={items}/>

            <h1>Collapse</h1>
            <Button color="warning" id="toggle">
                펼치기/접기
            </Button>
            <UncontrolledCollapse toggler="#toggle">
                <Card>
                    <CardBody>
                        React
                    </CardBody>
                </Card>
            </UncontrolledCollapse>

            <h1>fadeInOut</h1>
            <Button color="success" onClick={this.toggle}>
                Fade In / Out
            </Button>
            <Fade in={this.state.fadeInOut} tag="h1">
                lorem
            </Fade>

            <h1>Form</h1>
            <Form>
                <Label for="exampleGender">gender</Label>
                <Input type="select" bsSize="sm">
                    <option>no select</option>
                    <option>woman</option>
                    <option>man</option>
                </Input>
            </Form>
            <Row form>
                <Col md={6}>
                    <FormGroup>
                        <Label for="exampleAddress">
                            address
                        </Label>
                        <Input type="text" name="address" id="address"/>
                    </FormGroup>
                </Col>
                <Col md={4}>
                    <FormGroup>
                        <Label for="exampleMobile">
                            mobile
                        </Label>
                        <Input type="text" name="mobile" id="mobile"/>
                    </FormGroup>
                </Col>
                <Col md={2}>
                    <FormGroup>
                        <Label for="exampleAge">age</Label>
                        <Input type="text" name="age" id="age"/>
                    </FormGroup>
                </Col>
            </Row>
            <h1>InputGroup</h1>
            <InputGroup>
                <Input placeholder='userid'/>
                <Input addonType="append">
                    <InputGroupText>
                    @reactmail.com
                    </InputGroupText>
                </Input>
            </InputGroup>
            <InputGroup>
            <Input addonType="prepend">
                <Button>버튼</Button>
            </Input>
            </InputGroup>

            <h1>List</h1>
            <ListGroup>
                <ListGroupItem color="danger" className='justify-content-between'>
                    Badge<Badge pill>200</Badge>
                </ListGroupItem>
                <ListGroupItem disabled tag="a" href="#">
                   Disable
                </ListGroupItem>
                <ListGroupItem tag="a" href="#">Link</ListGroupItem>
                <ListGroupItem tag="button" action onClick={e => alert("button")}>
                button    
                </ListGroupItem>
            </ListGroup>

<h1>modal</h1>
<Button color="warning" onClick={this.toggle}>
Modal 버튼
</Button>
<Modal isOpen={this.state.modal} fade={true} toggle={this.toggle}>
    <ModalHeader toggle={this.toggle}>
        Modal Header
    </ModalHeader>
    <ModalBody>
        the ...
    </ModalBody>
    <ModalFooter>
        <Button color="primary" onClick={this.toggle}>
            확인
        </Button>
        <Button color="secondary" onClick={this.toggle}>
            닫기
        </Button>
    </ModalFooter>
</Modal>
            </>
        )
    }
}
export default Reactstrap;