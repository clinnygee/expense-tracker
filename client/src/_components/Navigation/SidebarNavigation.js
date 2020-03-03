import React, { Component } from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faColumns, faSignOutAlt} from '@fortawesome/free-solid-svg-icons';
import {faChartLine} from '@fortawesome/free-solid-svg-icons';
import {faBell} from '@fortawesome/free-solid-svg-icons';
import {faCogs} from '@fortawesome/free-solid-svg-icons';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';

class SidebarNavigation extends Component {
    render() {
        return (
            <div className = 'sidebar-nav-links-scrollable'>
                <Link to='/dashboard'>
                    <div className='sidebar-nav-links-scrollable-link'>
                        <div>
                            <FontAwesomeIcon icon={faColumns} />
                        </div>
                        <div>
                            Dashboard
                        </div>
                    </div>
                </Link>
                <Link to='/charts'>
                    <div className='sidebar-nav-links-scrollable-link'>
                        <div>
                            <FontAwesomeIcon icon={faChartLine} />
                        </div>
                        <div>
                            Charts
                        </div>
                    </div>
                </Link>
                {/* <div className='sidebar-nav-links-scrollable-link'>
                    <div>
                        <FontAwesomeIcon icon={faBars} />
                    </div>
                    <div>
                        Categories
                    </div>
                </div>
                <div className='sidebar-nav-links-scrollable-link'>
                    <div>
                        <FontAwesomeIcon icon = {faBell}/>
                    </div>
                    <div>
                        Notifications
                    </div>
                </div>
                <div className='sidebar-nav-links-scrollable-link'>
                    <div>
                        <FontAwesomeIcon icon = {faCogs}/>
                    </div>
                    <div>
                        Settings
                    </div>
                </div> */}
                <div className='sidebar-nav-links-scrollable-link' onClick={this.props.signOut}>
                    <div>
                        <FontAwesomeIcon icon = {faSignOutAlt}/>
                    </div>
                    <div>
                        Logout
                    </div>
                </div>
            </div>
        );
    }
}

export default SidebarNavigation;