import React, { Component } from 'react';
import SideBar from './Navigation/sidebar';
import MainAppContent from './Main/MainAppContent';
import './mainappcontainer.css';
import {UserConsumer} from '../user-context';


class MainAppContainer extends Component {

    state = {
        username: '',
        transactions: null,
    }

    componentDidMount =  () => {
        
    };

    

    getTransactionData = () => {
        let token = sessionStorage.getItem('jwt');

        fetch('/dashboard', {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${token}`,
            }
        }).then(response => {
            return response.json();
        }).then(parsedJson => {
            console.log(parsedJson);
            this.setUserData(parsedJson);
            
        })
    };

    setUserData = (userData) => {
        this.props.updateUserData(userData);
        
    };

   

    render() {

        
        return (
            <UserConsumer >
                {context => (
                    <div className='main-app'>
                        <SideBar username={context.username}/>
                        <div className='main-app-container'>
                            <MainAppContent transactions={[...context.transactions]}/>
                        </div>
                    </div>
                )}
            </UserConsumer>
            

            
        );
    }
}

export default MainAppContainer;