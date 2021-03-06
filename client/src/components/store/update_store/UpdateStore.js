import ReactDOM from 'react-dom';
import React from 'react';
import Header from "../../../elements/header";
import { Redirect, useParams } from 'react-router-dom'
import { Form, Button, Col, Row, InputGroup } from 'react-bootstrap';
import { api } from '../../../models/api';

export default class UpdateStore extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            stores: [],
            store: {},
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.setCurrentStore = this.setCurrentStore.bind(this);
        this.getStore = this.getStore.bind(this);
    }

    setCurrentStore() {
        const storeid = parseInt(this.props.match.params.storeid);
        for(const store of this.state.stores) {
            if(store.id === storeid) {
                this.setState({ store: store })
                return
            }
        }
    }
    componentDidMount() {
        this.getStore();
    }

    async getStore() {
        const stores = await api.getStore();
        console.log(stores);
        this.setState({stores: stores});
        this.setCurrentStore();
    }

    async handleSubmit(event) {
        event.preventDefault();
        const target = event.target;
        const store = {
            id: this.state.store.id, 
            title: target.title.value,
            address: target.address.value,
            phone: target.phone.value,
            owner: target.owner.value,
        }
        try {
            const res = await api.updateStore(store);
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
                            defaultValue={this.state.store.title}
                        />
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="validationCustom02">
                        <Form.Label>店家地址</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Store address"
                            name="address"
                            defaultValue={this.state.store.address}
                        />
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="validationCustom03">
                        <Form.Label>店家電話</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Store phone"
                            name="phone"
                            defaultValue={this.state.store.phone}
                        />
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="validationCustom04">
                        <Form.Label>店家負責人</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Store owner"
                            name="owner"
                            defaultValue={this.state.store.owner}
                        />
                    </Form.Group>
                    <Button type="submit">Submit form</Button>
                    <Button onClick = {() => this.props.history.goBack() }>返回</Button>
                </Form>
            </div>
        );
    }
}
