import React, { Component } from 'react';
import Calendar from 'react-calendar';

class SubmitForm extends Component {
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
    
                            </div>
                            <div className='create-submit-form-form-amount'>
                                <label for='amount'>Amount</label>
                                <input name='amount' required type='number'></input>
                            </div>
                            <div className='create-submit-form-form-description'> 
                                <label for='description'>Description</label>
                                <input name='description'></input>
                            </div>
                            <div className='create-submit-form-form-submit'>
    
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