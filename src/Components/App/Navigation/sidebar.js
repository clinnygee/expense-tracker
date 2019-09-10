import React, { Component } from 'react';
import './sidebar.css'
import ThumbnailPicture from '../../../img/default-icon.jpeg';
import SidebarNavigation from './SidebarNavigation';


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
                        <p>Clinnygee</p>
                    </div>
                    <div className='sidebar-nav-header-settings'>
                        <i className='fas fa-camera'></i>
                    </div>
                </div>
                <div className='sidebar-nav-links'>
                    <SidebarNavigation />
                </div>

                
            </div>
        );
    }
}

export default sidebar;