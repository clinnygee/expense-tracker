import React, { Component } from 'react';
import './Calender.css';
import Picker from 'react-month-picker'
import CalenderToggler from './CalenderToggler';

class Calender extends Component {

    state = {
        selectedMonth: new Date().getMonth(),
        selectedYear: new Date().getFullYear(),
        open: false,
    }

    openMonthSelector = () => {
        this.setState({open: !this.state.open});
    }
    
    render() {
        
        if (this.state.open){
            return (
                <React.Fragment>
                    <div className="calender-container-open">
                        {/* calander-selected shows the currently selected month. year,
                        clicking on it shows a year selected, followed by a selecter for any month of the selected year. */}
                        <CalenderToggler openMonthSelector={this.openMonthSelector} open={this.state.open}/>
                        <div className='calender-month-selector'>
                            <div className='calender-month-selector-months'>
                                <div className='calender-month-selector-year'>
                                    <div>
                                        {"<"}
                                    </div>
                                    <div>
                                        {this.state.selectedYear - 1}
                                    </div>
                                    <div>
                                        {">"}
                                    </div>
                                </div>
                                <div>Jan</div>
                                <div>Feb</div>
                                <div>Mar</div>
                                <div>Apr</div>
                                <div>May</div>
                                <div>Jun</div>
                                <div>Jul</div>
                                <div>Aug</div>
                                <div>Sep</div>
                                <div>Oct</div>
                                <div>Nov</div>
                                <div>Dec</div>

                            </div>
                            
                        </div>
                    </div>
                    
                </React.Fragment>
                  
            )
        } else {
        return (
            <div className="calender-container">
                {/* calander-selected shows the currently selected month. year,
                clicking on it shows a year selected, followed by a selecter for any month of the selected year. */}
                <CalenderToggler openMonthSelector={this.openMonthSelector} open={this.state.open}/>
            </div>  
        );}
    }
}

export default Calender;