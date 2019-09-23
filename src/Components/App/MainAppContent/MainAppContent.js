import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import './MainAppContent.css';
import Dashboard from './Dashboard/Dashboard';
import Charts from './Charts/Charts'
import Calender from './Calander/Calender';
import Create from './Create/Create'

class MainAppContent extends Component {

    componentDidMount(){
        // if(this.props.default){
        //     this.props.history.push(this.props.default);
        // }
        // get user data, and transaction data from the server
    }
    render() {
        return (
            <main className='main-app-content'>
                {/* Here we need Calander */}
                <Calender />
                <Switch>
                    <Route exact path ='/dashboard' 
                        render={() => <Dashboard transactions={this.props.transactions}/>}
                        // component={Dashboard }
                    />
                    <Route path ='/charts' component={Charts} />
                    <Route path = '/create' component={Create} />
                </Switch>

            </main>
        );
    }
}

export default MainAppContent;