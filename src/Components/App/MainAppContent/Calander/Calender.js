import React, { Component } from 'react';
import './Calender.css';
import Picker from 'react-month-picker'

class Calender extends Component {

    
    render() {
        let pickerLang = {
            months: ['Jan', 'Feb', 'Mar', 'Spr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            , from: 'From', to: 'To'
        },
        // default choice
        mvalue = {year: 2015, month: 11},
        // range of dates shown
        mrange = {from: {year: 2014, month: 8}, to: {year: 2016, month: 5}};

        let makeText = m => {
            if (m && m.year && m.month) return (pickerLang.months[m.month-1] + '. ' + m.year)
            return '?'
        }
        
        return (
            <div className="calender">
                 <li>
                <label>Pick A Month</label>
                {/* <div className="edit">
                    <Picker
                        ref="pickAMonth"
                        years={[2008, 2010, 2011, 2012, 2014, 2015, 2016, 2017]}
                        value={mvalue}
                        lang={pickerLang.months}
                        onChange={this.handleAMonthChange}
                        onDismiss={this.handleAMonthDissmis}


                    />
                        
                    
                </div> */}
            </li>
            </div>
        );
    }
}

export default Calender;