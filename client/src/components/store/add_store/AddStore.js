import ReactDOM from 'react-dom';
import React from 'react';
import Header from "../../../elements/header";
import Sidebar from "../../../elements/sidebar";
import { Redirect, useParams } from 'react-router-dom'
import { Form, Button, Col, Row, InputGroup } from 'react-bootstrap';
import { api } from '../../../models/api';

export default class AddStore extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            store: api.currentStore,
            needRedirect: false
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.checkRedirect = this.checkRedirect.bind(this);
    }

    handleSubmit(event) {
        const target = event.target;
        const form = {
            id: this.state.store.id, 
            title: target.title.value,
            address: target.address.value,
            phone: target.phone.value,
            owner: target.owner.value,
        }
        api.addStore(form);
        this.setState({ needRedirect: true});
    }

    checkRedirect() {
        if (this.state.needRedirect) 
            return (<Redirect to="/store/list" />)
    }

    render() {
        return (
            <div>
                {this.checkRedirect()}
                <Header title="Update Store" />
                <Form noValidate onSubmit={this.handleSubmit}>
                    <Form.Group as={Col} md="4" controlId="validationCustom01">
                        <Form.Label>店家名稱</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Store title"
                            name="title"
                            defaultValue=''
                        />
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="validationCustom02">
                        <Form.Label>店家地址</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Store address"
                            name="address"
                            defaultValue=''
                        />
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="validationCustom03">
                        <Form.Label>店家電話</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Store phone"
                            name="phone"
                            defaultValue=''
                        />
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="validationCustom04">
                        <Form.Label>店家負責人</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Store owner"
                            name="owner"
                            defaultValue=''
                        />
                    </Form.Group>
                    <Button type="submit">Submit</Button>
                </Form>
            </div>
        );
    }
}