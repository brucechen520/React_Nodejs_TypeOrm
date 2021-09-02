import ReactDOM from 'react-dom';
import React from 'react';
import Header from "../../elements/header";
import Sidebar from "../../elements/sidebar";
import { Link, Redirect } from 'react-router-dom';
import { Form, Button, Col, Row, InputGroup } from 'react-bootstrap';

export default class ForgetPassword extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Header title='Forget passowrd' />
            </div>
        )
    }
}
