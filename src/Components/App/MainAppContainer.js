import React, { Component } from 'react';
import SideBar from './Navigation/sidebar';
import './mainappcontainer.css';

class MainAppContainer extends Component {
    render() {
        return (
            <div className='main-app'>
                <SideBar />
                <div className='main-app-content'>

                </div>
            </div>
        );
    }
}

export default MainAppContainer;