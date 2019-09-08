import React, {Component} from 'react'
import ToggleableForm from '../SignIn/ToggleableForm/ToggleableForm';
import MainAppContainer from '../App/MainAppContainer'
import './container.css';

class Container extends Component {

    state = {
        // resStatus: null,
        resStatus: 200,
        loggedIn: false,
    }

    handleSignUpForm = (credentials) => {
        console.log(credentials);
        return fetch('/register',  {
            method: 'post',
            body: JSON.stringify(credentials),
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
          }).then(res => console.log(res));
    };

    

    handleLogInForm = (credentials) => {

        return fetch('/login', {
            method: 'post',
            body: JSON.stringify(credentials),
            headers: {
                'Accept': 'application/json',
                'content-type': 'application/json',
            },
        }).then(res => this.handleLogInResponse(res));
    };

    handleLogInResponse = (res) => {
        console.log(res);
        this.setState({resStatus: res.status});
    };

    authenticateUser = () => {
        fetch('/checkToken').then(res => {
            console.log(res);
        });
    }

    componentDidMount(){
        fetch('/checkToken').then(res => {
            console.log(res);
        })
        // check if the user is already logged in.
    }

    render(){

        console.log(this.state.resStatus);

        if(this.state.resStatus === 200){
            return (
                <div className='app'>
                    <MainAppContainer />
                </div>
            )
        } else {
            return (
                <div className='app'>
                    <ToggleableForm handleSignUpForm={this.handleSignUpForm} handleLogInForm={this.handleLogInForm}/>
                </div>
                
            )
        }
        
    }
};

export default Container;