import React, { Component } from 'react';
import './sidebar.css'
import ThumbnailPicture from '../../../img/default-icon.jpeg';
import SidebarNavigation from './SidebarNavigation';
import {UserConsumer} from '../../../user-context';


class sidebar extends Component {
    render() {
        // Set up react router, i think every link should be included in a <Link /> which references one of the different options to display
        // in the content display
        return (
            <div className='sidebar-nav'  >
                <div className='sidebar-nav-head'>
                    <div className='sidebar-nav-header-icon'>
                        <img src={ThumbnailPicture} alt='user-icon'/>
                    </div>
                    <div className='sidebar-nav-header-username'>
                        <p>{this.props.username}</p>
                    </div>
                    <div className='sidebar-nav-header-settings'>
                        <i className='fas fa-camera'></i>
                    </div>
                </div>
                <div className='sidebar-nav-links'>
                    <UserConsumer>
                        {
                            context => (
                                <SidebarNavigation signOut={context.signOut} />
                            )
                        }
                    </UserConsumer>
                    
                </div>

                
            </div>
        );
    }
}

export default sidebar;