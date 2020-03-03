import React, { Component } from 'react';
import './toggleableForm.css';

class SignIn extends Component {

    state = {
        Username: '',
        Password: '',
    }

    onFieldChange = (e) => {
        
        
        if(e.target.placeholder === 'Username'){
            this.setState({Username: e.target.value})
        } else  {
            this.setState({Password: e.target.value})
        } 

        
    };

    handleFormSubmit = (e) => {
        e.preventDefault();

        console.log(this.state);
        
        this.props.handleLogInForm({username: this.state.Username, password: this.state.Password});

    }
    
    // unused
    authenticateUser = (credentials) => {
        return fetch('/login', {
            method: 'post',
            body: JSON.stringify(credentials),
            headers: {
                'Accept': 'application/json',
                'content-type': 'application/json',
            },
        }).then(res => console.log(res));
    }

    render() {
        return (
            <div className='form-container'>
                <div className='form-container-header'>
                    <p>Log In</p>
                </div>
                
                <form className='form-container-form'>
                    <input onChange={this.onFieldChange} className='form-container-form-text'type='username' placeholder='Username' required />
                    <input onChange={this.onFieldChange} className='form-container-form-text' type='password' placeholder='Password' required />
                    
                    <input onClick={this.handleFormSubmit} className='form-container-form-button' type='submit' value='LOG IN' />
                </form>
                <div className='form-container-toggle'>
                    <p>Dont have an account?</p>
                    <p className='link' onClick={this.props.onFormToggle}>Sign Up!</p>
                </div>
                
            </div>
        );
    }
}

export default SignIn;