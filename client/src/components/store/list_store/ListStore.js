import ReactDOM from 'react-dom';
import React from 'react';
import Header from "../../../elements/header";
import Sidebar from "../../../elements/sidebar";
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { api } from '../../../models/api';
import { ListGroup, Button, ThemeProvider } from 'react-bootstrap';
// 店家名稱
// 店家地址
// 店家電話
// 店家負責人

export default class ListStore extends React.Component {
    constructor(props) {
        super(props);
        // 之後再用redux 取代
        this.state = { 
            stores: [],
        };
        this.renderList = this.renderList.bind(this);
        this.getStore = this.getStore.bind(this);
        this.deleteStore = this.deleteStore.bind(this);
        this.setCurrentStore = this.setCurrentStore.bind(this);
    }
    componentDidMount() {
        this.getStore();
    }

    async getStore() {
        const stores = await api.getStore();
        console.log(stores);
        this.setState({stores: stores});
    }

    async deleteStore(store) {
        await api.deleteStore(store.store);
        this.getStore();
    }

    setCurrentStore(store) {
        api.setCurrentStore(store);
    }

    renderList(data) {
        const store = data.store;
        const arrId = data.id;
        const url = "/store/update/"+store.id;
        return (
            <ListGroup.Item variant="info" key={store.id}>
                <div><span>店家名稱: </span><span key={store.title}>{store.title}</span></div>
                <div><span>店家地址: </span><span key={store.address}>{store.address}</span></div>
                <div><span>店家電話: </span><span key={store.phone}>{store.phone}</span></div>
                <div><span>店家負責人: </span><span key={store.owner}>{store.owner}</span></div>
                <div>
                    <Button onClick={() => this.deleteStore({id: arrId, store, store})}>刪除</Button>
                    <Link to={url} onClick = {() => this.setCurrentStore(store)}><Button>更新</Button></Link>
                </div>
            </ListGroup.Item>
        )
    }

    render() {
        const stores = this.state.stores;
        // console.log(stores);
        let storeLists = [];
        for(let i = 0; i < stores.length; i++) {
            const store = stores[i];
            storeLists.push(this.renderList({index: i, store: store}));
        }
        return (
            <div>
                <Header title = "Store Lists" />
                <ListGroup>
                    { storeLists }
                </ListGroup>
            </div>
        );
    }
}
