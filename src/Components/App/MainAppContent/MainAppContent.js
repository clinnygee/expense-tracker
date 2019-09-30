import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import './MainAppContent.css';
import Dashboard from './Dashboard/Dashboard';
import Charts from './Charts/Charts'
import Calender from './Calander/Calender';
import Create from './Create/Create'
import Picker from 'react-month-picker';
import {UserConsumer} from '../../../user-context';

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

                {/* <Calender /> */}
                <UserConsumer>
                    {context => { return (
                        <React.Fragment>
                            <Calender 
                            selectedMonth={context.selectedMonth} 
                            selectedYear={context.selectedYear}
                            updateContextMonth={context.updateSelectedMonth}
                            updateContextYear={context.updateSelectedYear}
                            />

                            <Switch>
                                {/* this needs a parent component, which contains the switches, which holds in state the request for a redirect
                                and the redirects url.
                                
                                when this occurs, it returns a <Redirect to=/URL />*/}
                                <Route exact path ='/dashboard' 
                                    render={() => <Dashboard transactions={[...context.transactions]}/>}
                                    // component={Dashboard }
                                />
                                <Route path ='/charts' component={Charts} />
                                <Route path = '/create' 
                                    render={() => <Create requestUpdate={context.requestUpdate}/>}
                                />
                            </Switch>
                        </React.Fragment>
                    )}}
                </UserConsumer>
                    {/* <Switch>
                        <Route exact path ='/dashboard' 
                            render={() => <Dashboard transactions={this.props.transactions}/>}
                            // component={Dashboard }
                        />
                        <Route path ='/charts' component={Charts} />
                        <Route path = '/create' component={Create} />
                    </Switch> */}
                
            </main>
        );
    }
}

export default MainAppContent;