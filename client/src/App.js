import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Login from "./components/login";
import LineLogin from "./components/login/LineLogin";
import Register from "./components/register";
import Layout from "./components/layout";
import AddStorePage from "./components/store/add_store";
import ListStorePage from "./components/store/list_store";
import UpdateStorePage from "./components/store/update_store";
import ForgetPassword from "./components/forgetpassword";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {},
            isLoggedIn: false,
        }

        this.setUser = this.setUser.bind(this);
    }

    setUser(user) {
        this.setState({user: user, isLogged: true });
    }
    
    render() {
        return (
            <div className="App">
                <Router>
                    <Switch>
                        <Route exact path='/' component={Login} info = {{ user: this.state.user, isLogged: this.state.isLoggedIn, setUser: this.setUser}} />
                        <Route exact path='/linelogin' component={LineLogin} info = {{ user: this.state.user, isLogged: this.state.isLoggedIn, setUser: this.setUser}} />
                        <Route path='/register' component={Register} info = {{ user: this.state.user, isLogged: this.state.isLoggedIn, setUser: this.setUser}} />
                        <Route path='/forgetpassword' component={ForgetPassword} />
                        <Route path='/layout' component={Layout} />
                        <Route path='/store/add' component={AddStorePage} />
                        <Route path='/store/update/:storeid' component={UpdateStorePage} />
                        <Route path='/store/list' component={ListStorePage} />
                        {/* <Route path='*' component={NotFound} /> */}
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default App;