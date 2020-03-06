import React, {Component, useState} from 'react'
import ToggleableForm from '../../ToggleableForm/ToggleableForm';
import MainAppContainer from '../../Main'
import './landing.css';
import {UserConsumer} from '../../../user-context';
import apiCall from '../../../API_CALLS';
import {LoadingSymbol} from '../../ReusableComponents'

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
        } else if (this.props.authenticated){
            this.state = {
        
                logIn: false,
                loggedIn: true,
                token: token,
                authenticating: false,
            }
            console.log('the user is authenticated, so authenticating is now being set to false')
            // this.setState({authenticating:false})
        } else {
            this.state = {
                logIn: false,
                loggedIn: false,
                token: null,
                authenticating: false,
            }
        }

        
    }
    // refactor these to use apiCall
    handleSignUpForm = (credentials) => {
        console.log(credentials);
        return apiCall('/register', 'POST', credentials).then(res => {
            if (res.status === 200) this.handleLogInForm(credentials);
        });
    };

    

    handleLogInForm = (credentials) => {

        console.log(credentials)

        return apiCall('/login', 'POST', credentials).then(res => {
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

    handleRegisterPageRequest = () => {
        this.setState({logIn: true});
    }

    componentDidMount(){
        
    };

    shouldComponentUpdate(){
        
        // add a check here to see if theres a jwt, if theres not a jwt & authenticating is set to true
        // this seems like a ghetto work around, but it works.
        // not sure what the correct way to handle this is.

        let token = sessionStorage.getItem('jwt');

        if(!token && this.state.authenticating === true){
            
            this.setState({authenticating:false});
            return true;
        } else {
            return true
        }
        
    }

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
                <div className='app'>
                    <LoadingSymbol />
                </div>
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