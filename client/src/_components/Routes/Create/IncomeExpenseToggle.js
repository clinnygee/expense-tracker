import React, { Component } from 'react';
import './create.css';

class IncomeExpenseToggle extends Component {


    render() {
        return (
            <div className='create-toggle-container'>
                <div className={`create-toggle-container-expense ${this.props.activeType === 'expense' ? 'toggle-active' : ''}`}
                    onClick={this.props.activeType === 'income' ? this.props.onToggle : null}
                >
                    <p>Expense</p>
                </div>
                <div className={`create-toggle-container-income ${this.props.activeType === 'income' ? 'toggle-active' : ''}`}
                    onClick={this.props.activeType === 'expense' ? this.props.onToggle : null}
                >
                    <p>Income</p>
                </div>
            </div>
        );
    }
}

export default IncomeExpenseToggle;