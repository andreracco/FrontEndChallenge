import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LoginRegister from './containers/loginRegister';
import Dashboard from './containers/dashBoard';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={LoginRegister} />
                <Route path="/dashboard" exact component={Dashboard} />
            </Switch>
        </ BrowserRouter>
    );
};

export default Routes;

