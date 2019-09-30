import React, { Component } from 'react';
import Summary from './Summary/Summary';
import CreateButton from './CreateButton';
import {Link} from 'react-router-dom';
import EditableTransaction from './EditableTransaction';

class Dashboard extends Component {

    // This component WILL only receive props that are for the current month


        state = {
            totalIncome: '',
            totalExpenses: '',

        }

        
    

    setTotalIncomeAndExpense = () => {
        let totalExpense = 0; 
        let totalIncome = 0;


        if(this.props.transactions){
        this.props.transactions.forEach(transaction => {
            if(transaction.type === 'income'){
                totalIncome += transaction.amount;
            } else {
                totalExpense += transaction.amount;
            }
        });} 

        console.log(totalExpense + " " + totalIncome);

        this.setState({totalIncome: totalIncome, totalExpenses: totalExpense});
    }

    // getTotalIncome = () => {
    //     const totalIncome = this.props.transactions.reduce(transaction => {
    //         if(transaction.type === 'income'){
    //             return transaction.amount;
    //         } else {
    //             return 0;
    //         }
    //     });

    //     return totalIncome;
    // };

    // getTotalExpense = () => {
    //     const totalExpense = this.props.transactions.reduce(transaction => {
    //         if(transaction.type === 'expense'){
    //             console.log(transaction.amount);
    //             return transaction.amount;
    //         } else {
    //             return 0;
    //         }
    //     });

    //     console.log(totalExpense);

    //     return totalExpense;
    // };

    

    componentDidMount = () => {
        this.setTotalIncomeAndExpense();
    }

    componentWillReceiveProps = () => {
        this.setTotalIncomeAndExpense();
    }

    render() {

        let transactions = null;

        if(this.props.transactions){
            transactions = this.props.transactions.map((transaction) => (
                <EditableTransaction 

                    key={transaction._id} 
                    type={transaction.type} 
                    category={transaction.category}
                    date={transaction.date}
                    amount={transaction.amount}
                    description={transaction.description}
                    
                    
                />
            ))
        }

        console.log(`In Dashboard, transactions : ${this.props.transactions}`)
        return (
            <div className='dashboard-container'>
                {/* Summary */}
                <Summary income={this.state.totalIncome} expense={this.state.totalExpenses}/>
                <div className='dashboard-scrollable-container'>
                    {transactions}
                    {/* List of this months expenditures, which allows you when clicking on them to edit them */}
                </div>
                
                {/* Bottom right, a create icon to add income or expense */}
                <Link to='/create'>
                    <CreateButton />
                </Link>
                
            </div>
        );
    }
};






export default Dashboard;