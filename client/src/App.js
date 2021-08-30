import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Login from "./components/login";
import Register from "./components/register";
import Layout from "./components/layout";
import AddStorePage from "./components/store/add_store";
import ListStorePage from "./components/store/list_store";
import UpdateStorePage from "./components/store/update_store";

class App extends Component {

    render() {
        return (
            <div className="App">
                <Router>
                    <Switch>
                        <Route exact path='/' component={Login} />
                        <Route path='/register' component={Register} />
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