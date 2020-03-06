import React, {Component, useState} from 'react'
import ToggleableForm from '../../ToggleableForm/ToggleableForm';
import MainAppContainer from '../../Main'
import './landing.css';
import {UserConsumer} from '../../../user-context';

class Container extends Component {

    constructor(props){
        super(props);
        console.log(this.props)

        let token = sessionStorage.getItem('jwt');
        if(token && !this.props.authenticated){

            this.state = {
        
                logIn: false,
                loggedIn: false,
                token: token,
                authenticating: true,
            }
            console.log('there is a token, but the user is not authenticated')
            // this.setState({authenticating: true});
            this.props.authenticateUser();
        }

        if (this.props.authenticated){

            this.state = {
        
                logIn: false,
                loggedIn: true,
                token: token,
                authenticating: false,
            }
            console.log('the user is authenticated, so authenticating is now being set to false')
            // this.setState({authenticating:false})
        }
        // this.props.authenticateUser(); 
    }

    // state = {
        
    //     logIn: false,
    //     loggedIn: false,
    //     token: null,
    //     authenticating: false,
    // }

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
        
        sessionStorage.setItem('jwt', res.token);
        
        this.props.setJwt(res.token);
        
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
    };

    handleRegisterPageRequest = () => {
        this.setState({logIn: true});
    }

    componentDidMount(){
        // this.props.authenticateUser();
        // this.authenticateUser();
        // // check if the user is storing a valid jwt.
    };

    render(){

        

        console.log('in render method, landing');
        console.log(this.props.authenticated);
        console.log(this.state.authenticating);

        // should wait to render the next page, if the user is currently authenticating.

        

        if(this.props.authenticated){
            return (
                <div className='app'>
                    <UserConsumer>
                        {context => (
                            <MainAppContainer  updateUserData={context.updateUserData}/>
                        )}
                        
                    </UserConsumer>
                    
                </div>
            )
        } else if (this.state.authenticating) {
            return (
                <div>AUTHENTICATING</div>
            )
        } else if (this.state.logIn){
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
        }  else {
            return (
                <div className='app'>
                    <Landing onRegisterPageRequest={this.handleRegisterPageRequest}/>
                </div>
                
            )
        }
        
    }
};

const Landing = (props) => {


    const [open, setOpen] = useState(false);

    const handleModalToggle = () => {
        setOpen(!open);
    };

    console.log('THE COMPONENT WE DONT WANT TO RENDER IS RENDERING')

    return (
        
        <div className='landing-container'>
            <div className='landing-content'>
                <div className='landing-header'>
                    <p className='landing-header-title'>
                        Budget Tracker
                    </p>
                </div>
                <div className='landing-navigation'>
                    <div className='landing-navigation-register' onClick={props.onRegisterPageRequest}>
                        <p>Log In / Register</p>
                    </div>
                    <div className='landing-navigation-about'>
                        <p onClick={handleModalToggle}>About</p>
                    </div>
                </div>
            </div>
            {open && <ModalAbout closeModal={handleModalToggle} content={aboutText}/>  }
        </div>
    )
};

const aboutText = {
    headers: ['An Expense Tracker by CLINNYGEE'],
    text: ['This expense tracker is built using react, node and express. ', 
    'You can filter your expenses and income by month, add income or expenses by category, and view summarys in graph format.',
    'The full code is available on github at https://github.com/clinnygee/expense-tracker',
    'Also, check me out on LinkedIn at https://www.linkedin.com/in/clinton-gillespie-128624175/']
};

const ModalAbout = (props) => {

    console.log(props.content.header)
    
    return (

        
        <div className='modal-container'>
            <div className='modal-content'>
                <div className='modal-button-container'>
                    <div className='modal-close' onClick={props.closeModal}>
                        <p>X</p>
                    </div>
                </div>
                {props.content.headers.map((header) => (
                    <h1 className='about-header'>
                        {header}
                    </h1>
                ))}
                {props.content.text.map(text => (
                    <p>
                        {text}
                    </p>
                ))}
            </div>
        </div>
    )
};

export default Container;