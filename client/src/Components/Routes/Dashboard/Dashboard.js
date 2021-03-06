import React, { Component } from 'react';
import Summary from './Summary';
import CreateButton from './CreateButton';
import {Link} from 'react-router-dom';
import EditableTransaction from './EditableTransaction';
import apiCall from '../../../API_CALLS';

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

    handleDeleteTransactions = async (transactionId) => {

        
        let response = await apiCall('/transactions/delete', 'DELETE', {transaction_id: transactionId});
        console.log(response)
        
        if(response.status === 200){
            this.props.requestUpdate();
            }
    }

    

    componentDidMount = () => {
        
    }

    

    render() {

        let transactions = null;

        // this.setTotalIncomeAndExpense()

        if(this.props.transactions){
            transactions = this.props.transactions.map((transaction) => (
                <EditableTransaction 

                    key={transaction._id}
                    id={transaction._id} 
                    type={transaction.type} 
                    category={transaction.category}
                    date={transaction.date}
                    amount={transaction.amount}
                    description={transaction.description}
                    onDeleteTransaction={this.handleDeleteTransactions}
                    // add a function that is called when the delete button is clicked.
                    
                />
            ))
        }

        console.log(`In Dashboard, transactions : ${this.props.transactions}`)
        return (
            <div className='dashboard-container'>
                {/* Summary */}
                <Summary transactions={this.props.transactions}/>
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