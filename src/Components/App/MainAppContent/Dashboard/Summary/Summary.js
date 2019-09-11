import React, { Component } from 'react';
import './Summary.css'

class Summary extends Component {
    render() {
        return (
            <div className='summary'>
                <div className='summary-container'>
                    <div className="summary-container-totals">
                        <p className='summary-container-totals-word'>Income</p>
                        <p className='summary-container-totals-number'>770</p>
                    </div>
                    <div className="summary-container-totals">
                        <p className='summary-container-totals-word'>Expenses</p>
                        <p className='summary-container-totals-number'>408</p>
                    </div>
                    <div className="summary-container-totals">
                        <p className='summary-container-totals-word'>Balance</p>
                        <p className='summary-container-totals-number'>362</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Summary;