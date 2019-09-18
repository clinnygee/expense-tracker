import React, {Component} from 'react'
import ToggleableForm from '../SignIn/ToggleableForm/ToggleableForm';
import MainAppContainer from '../App/MainAppContainer'
import './container.css';

class Container extends Component {

    state = {
        // resStatus: null,
        resStatus: null,
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
                this.setState({resStatus: 200});
                res.json().then( res => {
                    this.handleLogInResponse(res)
                });                              

            } else {
                console.log('No Token Authorized')
            }
        })
        
    };

    handleLogInResponse = (res) => {
        // set the token in state, or in the context api.
        console.log(res.token);
        sessionStorage.setItem('jwt', res.token);
        this.setState({token: res.token});
        // this.setState({resStatus: res.status});
        console.log(sessionStorage.getItem('jwt'));
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
            this.setState({resStatus: res.status});
        })
    }

    componentDidMount(){
        
        this.authenticateUser();
        // check if the user is already logged in.
    };

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