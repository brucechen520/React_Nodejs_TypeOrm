import ReactDOM from 'react-dom';
import React from 'react';
import Header from "../../elements/header";
import Sidebar from "../../elements/sidebar";
import { Link, Redirect } from 'react-router-dom';
import { Form, Button, Col, Row, InputGroup } from 'react-bootstrap';
import { LineLogin } from './LineLogin';

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfo: {},
        }
    }
    renderRedirect = () => {
        return <Redirect to='/layout'/>
    };
    render() {
        return (
            <div>
                <Header title='Login' />
                {/* {this.renderRedirect()} */}
                <Form noValidate onSubmit={this.handleSubmit}>
                    <Form.Group as={Col} md="4" controlId="validationCustom01">
                        <Form.Label>電子郵件</Form.Label>
                        <Form.Control
                            required
                            type="email"
                            placeholder="Your email"
                            name="email"
                            defaultValue=''
                        />
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="validationCustom02">
                        <Form.Label>密碼</Form.Label>
                        <Form.Control
                            required
                            type="password"
                            placeholder="Enter password"
                            name="password"
                            defaultValue=''
                        />
                    </Form.Group>
                    <Button type="submit" style={{ marginRight: '10px' }}>Login</Button>
                    <Link to="/linelogin"><Button style={{ marginRight: '10px' }}>Line login</Button></Link>
                    <Link to="/forgetPassword" style = {{ marginRight: '10px' }}>忘記密碼?</Link>
                    <Link to="/forgetPassword">Reigster</Link>
                </Form>
            </div>
        );
    }
}
