import React, { Component } from 'react';
import Summary from './Summary/Summary';
import CreateButton from './CreateButton';
import {Link} from 'react-router-dom';

class Dashboard extends Component {
    render() {
        return (
            <div className='dashboard-container'>
                {/* Summary */}
                <Summary />
                {/* List of this months expenditures, which allows you when clicking on them to edit them */}
                {/* Bottom right, a create icon to add income or expense */}
                <Link to='/create'>
                    <CreateButton />
                </Link>
                
            </div>
        );
    }
}

export default Dashboard;