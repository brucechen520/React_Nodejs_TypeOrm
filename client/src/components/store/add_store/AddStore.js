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
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async handleSubmit(event) {
        event.preventDefault();
        const target = event.target;
        const form = {
            title: target.title.value,
            address: target.address.value,
            phone: target.phone.value,
            owner: target.owner.value,
        }
        try {
            const res = await api.addStore(form);
            // console.log(res);
            this.props.history.push('/store/list');
        }
        catch (error) {
            console.log(error);
        }
    }

    render() {
        return (
            <div>
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
                    <Button onClick = {() => this.props.history.goBack() }>返回</Button>
                </Form>
            </div>
        );
    }
}
