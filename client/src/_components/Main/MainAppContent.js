import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import './MainAppContent.css';
import Dashboard from '../Routes/Dashboard';
import Charts from '../Routes/Charts/Charts'
import Calender from '../Calander';
import Create from '../Routes/Create'
import Picker from 'react-month-picker';
import {UserConsumer} from '../../user-context';

class MainAppContent extends Component {

    componentDidMount(){
        // if(this.props.default){
        //     this.props.history.push(this.props.default);
        // }
        // get user data, and transaction data from the server
    }

    filterTransactionsByMonth = (month, year, transactions) => {

        console.log(transactions)

        

        const filteredTransactions = transactions.filter((transaction)=> {

            const transactionDate = new Date(transaction.date);

            

            return (transactionDate.getMonth() === month && transactionDate.getFullYear() === year)
        });

        

        return filteredTransactions;
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
                                // Only give transactions that are within the month of context.currentYear and currentMonth
                                    // render={() => <Dashboard transactions={[...context.transactions]}/>}
                                    render={() => <Dashboard 
                                                        transactions={this.filterTransactionsByMonth(context.selectedMonth, context.selectedYear, context.transactions)}
                                                        requestUpdate={context.requestUpdate}
                                                    />}
                                    // component={Dashboard }
                                />
                                {/* <Route path ='/charts' component={Charts} /> */}
                                <Route path ='/charts'
                                    render={() => <Charts 
                                                    transactions={this.filterTransactionsByMonth(context.selectedMonth, context.selectedYear, context.transactions)}
                                                    />}
                                />
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