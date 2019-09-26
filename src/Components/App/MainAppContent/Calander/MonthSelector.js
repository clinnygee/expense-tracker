import React from 'react';


class MonthSelector extends React.Component  {

    state = {
        selectedYear: this.props.year,
        selectedMonth: this.props.month,
    }

    decrementYear = () => {
        this.setState({selectedYear: this.state.selectedYear - 1})
    }

    incrementYear = () => {
        this.setState({selectedYear: this.state.selectedYear + 1})
    }

    handleMonthSelect = (clickedMonth) => {
        this.setState({selectedMonth: clickedMonth})
    }

    render(){

        const months = monthsArray.map(month => (
            <Month month={month.month} monthName={month.monthName} onMonthSelect={this.handleMonthSelect}/>
        ))
    return (
        <div className='calender-month-selector'>
            <div className='calender-month-selector-months'>
                <YearSelector 
                    year={this.state.selectedYear} 
                    incrementYear={this.incrementYear} 
                    decrementYear={this.decrementYear}
                />
                {months}
            </div>
            
        </div>
                    
    )}
};

const Month = (props) => {


    const handleMonthSelect = () => {
        props.onMonthSelect(props.month);
    }
    return (
        <div onClick={handleMonthSelect}>
            {props.monthName}
        </div>
    )
};

const YearSelector = (props) => {

    return (
        <div className='calender-month-selector-year'>
            <div onClick={props.decrementYear}>
                {"<"}
            </div>
            <div>
                {props.year}
            </div>
            <div onClick={props.incrementYear}>
                {">"}
            </div>
        </div>
    )
};

const monthsArray = [
    {
        month: 0,
        monthName: 'Jan'
    },
    {
        month: 1,
        monthName: 'Feb'
    },
    {
        month:2,
        monthName: 'Mar'
    },
    {
        month: 3,
        monthName: 'Apr'
    },
    {
        month: 4,
        monthName: 'May'
    },
    {
        month: 5,
        monthName: 'Jun'
    },
    {
        month: 6,
        monthName: 'Jul'
    },
    {
        month: 7,
        monthName: 'Aug'
    },
    {
        month: 8,
        monthName: 'Sep'
    },
    {
        month: 9,
        monthName: 'Oct'
    },
    {
        month: 10,
        monthName: 'Nov'
    },
    {
        month: 11,
        monthName: 'Dec'
    },
]




export default MonthSelector;