import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import './MainAppContent.css';
import Dashboard from './Dashboard/Dashboard';
import Charts from './Charts/Charts'
import Calender from './Calander/Calender';

class MainAppContent extends Component {
    render() {
        return (
            <main className='main-app-content'>
                {/* Here we need Calander */}
                <Calender />
                <Switch>
                    <Route exact path ='/dashboard' component={Dashboard}/>
                    <Route path ='/charts' component={Charts} />
                </Switch>

            </main>
        );
    }
}

export default MainAppContent;