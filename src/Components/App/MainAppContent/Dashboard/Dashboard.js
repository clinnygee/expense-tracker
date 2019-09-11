import React, { Component } from 'react';
import Summary from './Summary/Summary';
import CreateButton from './CreateButton';

class Dashboard extends Component {
    render() {
        return (
            <div className='dashboard-container'>
                {/* Summary */}
                <Summary />
                {/* List of this months expenditures, which allows you when clicking on them to edit them */}
                {/* Bottom right, a create icon to add income or expense */}
                <CreateButton />
            </div>
        );
    }
}

export default Dashboard;