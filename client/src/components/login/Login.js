import ReactDOM from 'react-dom';
import React from 'react';
import Header from "../../elements/header";
import Sidebar from "../../elements/sidebar";
import { Link, Redirect } from 'react-router-dom';


export default class Login extends React.Component {
    renderRedirect = () => {
        return <Redirect to='/layout'/>
    };
    render() {
        return (
            <div>
                <span>Login</span>
                {this.renderRedirect()}
            </div>
        );
    }
}
