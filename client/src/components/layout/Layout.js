import ReactDOM from 'react-dom';
import React from 'react';
import Header from "../../elements/header";
import Sidebar from "../../elements/sidebar";
import { Link } from 'react-router-dom';


export default class Layout extends React.Component {

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
            <div>
                <Header title='Home' />
            </div>
        );
    }
}

