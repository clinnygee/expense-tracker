import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import Dashboard from './Dashboard/Dashboard';
import Charts from './Charts/Charts'

class MainAppContent extends Component {
    render() {
        return (
            <main>
                <Switch>
                    <Route exact path ='/dashboard' component={Dashboard}/>
                    <Route path ='/charts' component={Charts} />
                </Switch>

            </main>
        );
    }
}

export default MainAppContent;