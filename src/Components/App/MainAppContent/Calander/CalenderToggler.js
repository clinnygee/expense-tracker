import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';


const CalenderToggler = (props) => {

    return (
        <div className='calender-toggler' onClick={props.openMonthSelector}>
            <div className='calender-toggler-items'>
                <div className='calender-toggler-date'>
                    Sep. 2019
                </div>
                <div>
                    <FontAwesomeIcon icon={props.open ? 'sort-up' : 'sort-down'}/>
                </div>
            </div>
            
        </div>
    )
};

export default CalenderToggler;