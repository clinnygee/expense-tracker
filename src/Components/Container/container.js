import React, {Component} from 'react'
import ToggleableForm from '../SignIn/ToggleableForm/ToggleableForm';
import './container.css';

class Container extends Component {


    render(){
        return (
            <div className='app'>
                <ToggleableForm />
            </div>
            
        )
    }
};

export default Container;