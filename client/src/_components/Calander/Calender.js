import React, { Component } from 'react';
import './Calender.css';
import Picker from 'react-month-picker'
import CalenderToggler from './CalenderToggler';
import MonthSelector from './MonthSelector'

class Calender extends Component {

    state = {
        selectedMonth: this.props.selectedMonth,
        selectedYear: this.props.selectedYear,
        open: false,
    }

    openMonthSelector = () => {
        this.setState({open: !this.state.open});
    }

    handleSelectMonthAndYear = (month, year) => {
        this.setState({open: !this.state.open})
        this.props.updateContextMonth(month);
        this.props.updateContextYear(year);
    }
    
    render() {
        
        if (this.state.open){
            return (
                <React.Fragment>
                    <div className="calender-container-open">
                        {/* calander-selected shows the currently selected month. year,
                        clicking on it shows a year selected, followed by a selecter for any month of the selected year. */}
                        <CalenderToggler 
                        openMonthSelector={this.openMonthSelector} 
                        open={this.state.open}
                        month={months[this.props.selectedMonth]}
                        year={this.props.selectedYear}
                        />
                        
                        <MonthSelector year={this.state.selectedYear} onSelectMonthAndYear={this.handleSelectMonthAndYear}/>

                    </div>
                    
                </React.Fragment>
                  
            )
        } else {
        return (
            <div className="calender-container">
                {/* calander-selected shows the currently selected month. year,
                clicking on it shows a year selected, followed by a selecter for any month of the selected year. */}
                <CalenderToggler 
                openMonthSelector={this.openMonthSelector} 
                open={this.state.open}
                month={months[this.props.selectedMonth]}
                year={this.props.selectedYear}
                />
            </div>  
        );}
    }
};

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export default Calender;