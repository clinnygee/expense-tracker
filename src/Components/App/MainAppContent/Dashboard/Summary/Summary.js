import React, { Component } from 'react';
import './Summary.css'

class Summary extends Component {
    render() {

        console.log(this.props);
        return (
            <div className='summary'>
                <div className='summary-container'>
                    <div className="summary-container-totals">
                        <div >
                            <p className='summary-container-totals-word'>Income</p>
                            <p className='summary-container-totals-number'>{this.props.income}</p>
                        </div>
                        
                    </div>
                    <div className="summary-container-totals">
                        <div>
                            <p className='summary-container-totals-word'>Expenses</p>
                            <p className='summary-container-totals-number'>{this.props.expense}</p>
                        </div>
                        
                    </div>
                    <div className="summary-container-totals">
                        <div>
                            <p className='summary-container-totals-word'>Balance</p>
                            <p className='summary-container-totals-number'>{this.props.income - this.props.expense}</p>
                        </div>                        
                    </div>
                </div>
            </div>
        );
    }
}

export default Summary;