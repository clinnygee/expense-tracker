import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faUtensils, faHome, faCar, faGamepad, faFileInvoiceDollar, faPhoneSquare, faNetworkWired, faGlassCheers, faTv, faStar } from '@fortawesome/free-solid-svg-icons';

const CategoryIcons = (props) => {

    const click = (e) => {
        console.log(e.target.dataset.icon);
    }

    if (props.display === 'income'){
        return (
            <div>Income</div>
        )
    } else {
        
        return (
            <div className='create-submit-icon-container'>
                <div className='create-submit-icon' >
                    <FontAwesomeIcon icon={faUtensils} onClick={props.onCategorySelect}/>
                </div>
                <div className='create-submit-icon'>
                    <FontAwesomeIcon icon={faHome}/>
                </div>
                <div className='create-submit-icon'>
                    <FontAwesomeIcon icon={faCar} />    
                </div>
                <div className='create-submit-icon'>
                    <FontAwesomeIcon icon={faGamepad}/>
                </div>
                <div className='create-submit-icon'>
                    <FontAwesomeIcon icon={faFileInvoiceDollar} />
                </div>
                <div className='create-submit-icon'>
                    <FontAwesomeIcon icon={faPhoneSquare}/>
                </div>
                <div className='create-submit-icon'>
                    <FontAwesomeIcon icon={faNetworkWired}/>
                </div>
                <div className='create-submit-icon'>
                    <FontAwesomeIcon icon={faGlassCheers}/>
                </div>
                <div className='create-submit-icon'>
                    <FontAwesomeIcon icon={faTv}/>
                </div>
                <div className='create-submit-icon'>
                    <FontAwesomeIcon icon={faStar}/>
                </div>
                
            </div>
        )
    }
};



export default CategoryIcons;

