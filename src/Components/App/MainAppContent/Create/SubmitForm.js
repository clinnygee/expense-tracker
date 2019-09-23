import React, { Component } from 'react';
import Calendar from 'react-calendar';
import Icon from './Icon';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

class SubmitForm extends Component {

    state = {
        amount: '',
        description: '',
    }

    onAmountChange = (e) => {
        console.log(e.target.value)

        this.setState({amount: e.target.value});
    }

    onDescriptionChange = (e) => {
        this.setState({description: e.target.value});
    }

    handleSubmit = () => {

        this.props.onSubmit(this.state.amount, this.state.description);
    }

    render() {
    
        if(this.props.display){
            return (
                <div className='create-submit-form'>
                    <div className='create-submit-form-calendar'>
                        <Calendar 
                            onChange={this.props.onDateSelect}
                            date={this.props.date}
                        />
                    </div>
                    <div className='create-submit-form-form'>
                        <form>
                            <div className='create-submit-form-form-icon'>
                                <FontAwesomeIcon icon={`${this.props.icon.icon}`} />
                                <p>{this.props.icon.category}</p>
                            </div>
                            <div className='create-submit-form-form-amount'>
                                <label for='amount'>Amount</label>
                                <input name='amount' required type='number' onChange={this.onAmountChange}></input>
                            </div>
                            <div className='create-submit-form-form-description'> 
                                <label for='description'>Description</label>
                                <input name='description' onChange={this.onDescriptionChange}></input>
                            </div>
                            <div className='create-submit-form-form-submit'>
                                <button type="button" class="btn btn-primary btn-lg" onClick={this.handleSubmit}>Add</button>
                            </div>
                        </form>
                        
                    </div>
                </div>
            );
        } else {
            return (
                <div></div>
            )
        }
    }
}

export default SubmitForm;