import React, { Component } from 'react';
import './Summary.css'

class Summary extends Component {

    setTotalIncomeAndExpense = (transactions) => {
        let totalExpense = 0; 
        let totalIncome = 0;


        if(transactions){
        this.props.transactions.forEach(transaction => {
            if(transaction.type === 'income'){
                totalIncome += transaction.amount;
            } else {
                totalExpense += transaction.amount;
            }
        });} 

        console.log(totalExpense + " " + totalIncome);

        return {totalIncome: totalIncome, totalExpense: totalExpense}

        
    }

    render() {

        const totalIncomeAndExpense = this.setTotalIncomeAndExpense(this.props.transactions)

        console.log(this.props);
        return (
            <div className='summary'>
                <div className='summary-container'>
                    <div className="summary-container-totals">
                        <div >
                            <p className='summary-container-totals-word'>Income</p>
                            <p className='summary-container-totals-number'>{totalIncomeAndExpense.totalIncome}</p>
                        </div>
                        
                    </div>
                    <div className="summary-container-totals">
                        <div>
                            <p className='summary-container-totals-word'>Expenses</p>
                            <p className='summary-container-totals-number'>{totalIncomeAndExpense.totalExpense}</p>
                        </div>
                        
                    </div>
                    <div className="summary-container-totals">
                        <div>
                            <p className='summary-container-totals-word'>Balance</p>
                            <p className='summary-container-totals-number'>{(totalIncomeAndExpense.totalIncome - totalIncomeAndExpense.totalExpense).toFixed(2)}</p>
                        </div>                        
                    </div>
                </div>
            </div>
        );
    }
}

export default Summary;