import React, {Component} from 'react';
import {connect} from 'react-redux';
import {add} from '../actions'
import 'bootstrap/dist/css/bootstrap.css'
import {Alert, UncontrolledAlert, Badge, Button,Breadcrumb, 
    BreadcrumbItem,  DropdownToggle, DropdownItem,ButtonDropdown, DropdownMenu, 
    ButtonGroup, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle,
    UncontrolledCarousel,UncontrolledCollapse,Fade,Form,Label,Input,Row,Col,FormGroup,
    InputGroup, InputGroupText, ListGroup, ListGroupItem, Modal, ModalHeader,
    ModalBody, ModalFooter, Collapse, Navbar, NavbarToggler, NavbarBrand,
    Nav, NavItem, NavLink, Pagination, PaginationItem, PaginationLink, Table,
    TabContent, TabPane
    } from 'reactstrap';

class StrAddButton extends Component{
    render(){
        return(
        <input 
        value='Add200' 
        type="button"
        className="btn btn-danger my-3"
        onClick={this.props.addString}
        />
        )
    }
}
    let mapDispatchToProps = (dispatch, props) =>{
        console.log('Props from App.js : ' + props.AppProp)
        return{
        addString: () => dispatch(add())
        }
    }
StrAddButton = connect(null, mapDispatchToProps)(StrAddButton);

export default StrAddButton;