import ReactDOM from 'react-dom';
import React from 'react';
import Header from "../../elements/header";
import Sidebar from "../../elements/sidebar";
import { Link } from 'react-router-dom';


export default class Register extends React.Component {

    render() {
        return (
            <div>
                <Header title="Register" />
            </div>
        );
    }
}
