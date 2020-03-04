import React, { Component } from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import './MainAppContent.css';
import Dashboard from '../Routes/Dashboard';
import Charts from '../Routes/Charts/Charts'
import Calender from '../Calander';
import Create from '../Routes/Create'
import {UserConsumer} from '../../user-context';

// class MainAppContent extends Component {

//     // componentDidMount(){
        
//     // }

//     filterTransactionsByMonth = (month, year, transactions) => {

//         console.log(transactions)

        

//         const filteredTransactions = transactions.filter((transaction)=> {

//             const transactionDate = new Date(transaction.date);

            

//             return (transactionDate.getMonth() === month && transactionDate.getFullYear() === year)
//         });

        

//         return filteredTransactions;
//     }
//     render() {
        
//         return (
//             <main className='main-app-content'>
//                 <UserConsumer>
//                     {context => { return (
//                         <React.Fragment>
//                             <Calender 
//                             selectedMonth={context.selectedMonth} 
//                             selectedYear={context.selectedYear}
//                             updateContextMonth={context.updateSelectedMonth}
//                             updateContextYear={context.updateSelectedYear}
//                             />

//                             <Switch>
                                
//                                 <Route path ='/dashboard' 
//                                 // Only give transactions that are within the month of context.currentYear and context.currentMonth
//                                     render={() => <Dashboard 
//                                                         transactions={this.filterTransactionsByMonth(context.selectedMonth, context.selectedYear, context.transactions)}
//                                                         requestUpdate={context.requestUpdate}
//                                                     />}
//                                 />
//                                 <Route path ='/charts'
//                                     render={() => <Charts 
//                                                     transactions={this.filterTransactionsByMonth(context.selectedMonth, context.selectedYear, context.transactions)}
//                                                     />}
//                                 />
//                                 <Route path = '/create' 
//                                     render={() => <Create requestUpdate={context.requestUpdate}/>}
//                                 />
//                                 <Route path='/' render={()=> <Redirect to='/dashboard'/>} />
//                             </Switch>
//                         </React.Fragment>
//                     )}}
//                 </UserConsumer>
                    
                
//             </main>
//         );
//     }
// }


const MainAppContent = (props) => {


    const filterTransactionsByMonth = (month, year, transactions) => {
              

        const filteredTransactions = transactions.filter((transaction)=> {

            const transactionDate = new Date(transaction.date);            

            return (transactionDate.getMonth() === month && transactionDate.getFullYear() === year)
        });        

        return filteredTransactions;
    };
    
        
        return (
            <main className='main-app-content'>
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
                                
                                <Route path ='/dashboard' 
                                // Only give transactions that are within the month of context.currentYear and context.currentMonth
                                    render={() => <Dashboard 
                                                        transactions={filterTransactionsByMonth(context.selectedMonth, context.selectedYear, context.transactions)}
                                                        requestUpdate={context.requestUpdate}
                                                    />}
                                />
                                <Route path ='/charts'
                                    render={() => <Charts 
                                                    transactions={filterTransactionsByMonth(context.selectedMonth, context.selectedYear, context.transactions)}
                                                    />}
                                />
                                <Route path = '/create' 
                                    render={() => <Create requestUpdate={context.requestUpdate}/>}
                                />
                                <Route path='/' render={()=> <Redirect to='/dashboard'/>} />
                            </Switch>
                        </React.Fragment>
                    )}}
                </UserConsumer>
                    
                
            </main>
        );
    
}

export default MainAppContent;