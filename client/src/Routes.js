import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';


import { Auth as AuthV } from './components';
import { Home as HomeV } from './components';


const Routes = () => {
    return (
        <Switch>
            <Redirect
                exact
                from="/"
                to="/auth"
            />
            <Route path="/auth">
                <AuthV />
            </Route>
            <Route path="/home">
                <HomeV />
            </Route>
        </Switch>
    );
};

export default Routes;