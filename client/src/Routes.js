import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';


import { Auth as AuthV } from './components';


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
        </Switch>
    );
};

export default Routes;