import React, { Component } from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const Icon = (props) => {

    const handleCategorySelect = () => {

        props.onCategorySelect(props.category);
    }

    

    
    
        return (
            <div className='create-submit-icon' onClick={handleCategorySelect}>
                <FontAwesomeIcon icon={`${props.icon}`}/>
                <p>{props.category}</p>
            </div>
        );
    
}

export default Icon;