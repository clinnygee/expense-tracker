import React, { Component } from 'react';

class SignUp extends Component {


    state = {
        Username: "",
        Password: "",
        Confirm: "",
    };

    handleSubmit = (e) => {
        e.preventDefault();

        // this.registerUser({username: this.state.Username, password: this.state.Password});

        this.props.handleSignUpForm({username: this.state.Username, password: this.state.Password});
        
    }

    registerUser = (data) => {
        return fetch('/register',  {
            method: 'post',
            body: JSON.stringify(data),
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
          }).then(res => console.log(res));
    }

    onFieldChange = (e) => {
        // console.log(e.target.value);
        // console.log(e.target.placeholder);
        if(e.target.placeholder === 'Username'){
            this.setState({Username: e.target.value})
        } else if(e.target.placeholder === 'Password') {
            this.setState({Password: e.target.value})
        } else {
            this.setState({Confirm: e.target.value})
        }

        console.log(this.state.Username);
        console.log(this.state.Password)

        
    };

    render() {

        console.log(this.props)
        return (
            <div className='form-container'>
                <div className='form-container-header'>
                    <p>Sign Up</p>
                </div>
                
                <form className='form-container-form'>
                    <input onChange={this.onFieldChange} className='form-container-form-text'type='username' placeholder='Username' required />
                    <input onChange={this.onFieldChange} className='form-container-form-text' type='password' placeholder='Password' required />
                    <input onChange={this.onFieldChange} className='form-container-form-text' type='password' placeholder='Confirm Password' required />
                    <input onClick={this.handleSubmit} className='form-container-form-button' type='submit' value='SIGN UP' />
                </form>
                <div className='form-container-toggle'>
                    <p>Already have an account?</p>
                    <p className='link' onClick={this.props.onFormToggle}>Sign in!</p>
                </div>
                
            </div>
        );
    }
};

// 

export default SignUp;