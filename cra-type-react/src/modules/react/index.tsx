import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ReactContext from './react-context';
import ReactLazy from './react-lazy';
import Home from './home';

import { Location } from 'history'

const Routes = (props: { location: Location }): any => {
    const { location } = props
    return (
        <Switch location={location}>
            <Route exact={true} path="/react" component={Home} />
            <Route exact={true} path="/react/reactcontext" component={ReactContext} />
            <Route exact={true} path="/react/reactlazy" component={ReactLazy} />
        </Switch>
    );
};

export default Routes;
