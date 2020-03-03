import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';


const CalenderToggler = (props) => {

    return (
        <div className='calender-toggler' onClick={props.openMonthSelector}>
            <div className='calender-toggler-items'>
                <div className='calender-toggler-date'>
                    {props.month}. {props.year}
                </div>
                <div className='calender-toggler-button'>
                    <FontAwesomeIcon icon={props.open ? 'sort-up' : 'sort-down'}/>
                </div>
            </div>
            
        </div>
    )
};

export default CalenderToggler;