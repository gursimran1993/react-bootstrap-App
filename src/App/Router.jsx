import React from 'react';
import { Route,Switch } from 'react-router-dom';
import Home from '../Container/Home';

const Router = () => (
    <main>
        <Switch>
        <Route exact path="/" component={Home} />
        {/* <Route exact path="/" component={Home} /> */}
        </Switch>
    </main>
);

export default Router;
