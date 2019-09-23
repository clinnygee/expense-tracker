import React, { Component } from 'react';
import CategoryIcons from './CategoryIcons';

class IconSubmitForm extends Component {
    render() {
        return (
            <div className='create-submit-container'>
                <CategoryIcons display={this.props.type || null} onCategorySelect={this.props.onCategorySelect} icons={this.props.icons}/>
                
            </div>
        );
    }
}

export default IconSubmitForm;