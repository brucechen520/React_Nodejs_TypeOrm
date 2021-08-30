import ReactDOM from 'react-dom';
import React from 'react';
import { Link } from 'react-router-dom';
import {
    Navbar,
    Nav,
    NavDropdown,
    Container,
   } from "react-bootstrap";
export default class Header extends React.Component {

    render() {
        return (
            // <ul>
            //     <li className="breadcrumb-item">
            //         <Link to={'/'} >Log in</Link>
            //     </li>
            //     <li className="breadcrumb-item">
            //         <Link to={'/register'} >Register</Link>
            //     </li>
            //     <li className="breadcrumb-item">
            //         <Link to={'/addstore'} >addstore</Link>
            //     </li>
            //     <li className="breadcrumb-item">
            //         <Link to={'/updatestore'} >updatestore</Link>
            //     </li>
            //     <li className="breadcrumb-item">
            //         <Link to={'/liststore'} >liststore</Link>
            //     </li>
            //     <li className="breadcrumb-item">
            //         <Link to={'/deletestore'} >deletestore</Link>
            //     </li>
            // </ul>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Text>This page: {this.props.title} </Navbar.Text>
                <Container>
                    <Navbar.Brand href="/layout">Home</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        <NavDropdown title="Store" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="/store/list">Store lists</NavDropdown.Item>
                            <NavDropdown.Item href="/store/add">Add a store</NavDropdown.Item>
                        </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }
}

