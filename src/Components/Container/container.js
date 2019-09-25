import React, {Component} from 'react'
import ToggleableForm from '../SignIn/ToggleableForm/ToggleableForm';
import MainAppContainer from '../App/MainAppContainer'
import {Redirect} from 'react-router-dom';
import './container.css';
import {UserConsumer} from '../../user-context';

class Container extends Component {

    state = {
        
        
        loggedIn: false,
        token: null,
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
        }).then(res => {
            if(res.status === 200){
                
                
                res.json().then( res => {
                    this.handleLogInResponse(res)
                    this.props.logInSuccess();
                });                              

            } else {
                console.log('No Token Authorized')
            }
        })
        
    };

    handleLogInResponse = (res) => {
        // set the token in state, or in the context api.
        // console.log(res.token);
        sessionStorage.setItem('jwt', res.token);
        
        this.props.setJwt(res.token);
        // this.setState({resStatus: res.status});
        // console.log(sessionStorage.getItem('jwt'));
        // console.log(res.json());
    };

    authenticateUser = () => {
        
        let token = sessionStorage.getItem('jwt');

        
        fetch('/checkToken', {
            method: 'GET',
            headers : {
                'content-type': 'application/json',
                'Authorization': `Bearer ${token}`,
            }
        }).then(res => {
            if(res.status === 200){
                this.props.setJwt(token);
                this.props.logInSuccess()
            }
            
        })
    }

    componentDidMount(){
        
        this.authenticateUser();
        // check if the user is storing a valid jwt.
    };

    render(){

        console.log(this.props)

        

        if(this.props.authenticated){
            return (
                <div className='app'>
                    <UserConsumer>
                        {context => (
                            <MainAppContainer default='/dashboard' updateUserData={context.updateUserData}/>
                        )}
                        
                    </UserConsumer>
                    
                </div>
                // <Redirect to='/dashboard' />
            )
        } else {
            return (
                <div className='app'>
                    <UserConsumer>
                        
                        {
                            context => (
                            
                            <ToggleableForm 
                        
                            handleSignUpForm={this.handleSignUpForm} 
                            handleLogInForm={this.handleLogInForm}
                            logInSuccess={context.logInSuccess}

                            />     

                            )}
                    </UserConsumer>
                    
                </div>
                
            )
        }
        
    }
};

export default Container;