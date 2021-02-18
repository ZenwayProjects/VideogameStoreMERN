import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './core/Home';
import Search from './coreSearch';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/" exact component={Search} />
            </Switch>
      </BrowserRouter>
    )
}

export default Routes;