import React, { Component } from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlus} from '@fortawesome/free-solid-svg-icons';
import './Dashboard.css';


const CreateButton = () => {



    return (
        <div className='create-icon'>
            <FontAwesomeIcon icon={faPlus} />
            
        </div>
    )
}


export default CreateButton;