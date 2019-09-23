import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

class EditableTransaction extends Component {

    state = {
        open: false,
    }

    getTransactionIcon = (type, category) => {

        if (type === 'expense'){
        const cat = expenseCategoriesAndIcons.filter((expense) => {
            
            return expense.category === category;
        })
        
        return cat[0].icon;
        } else {
            const cat = incomeCategoriesAndIcons.filter((income) => {
                return income.category === category;
            })
            
            return cat[0].icon;
        }

    };

    toggleExpand = () => {
        this.setState({open: !this.state.open});
    }

    render() {

        const iconStyle = {
            backgroundColor: this.props.type === 'expense' ? '#eb5960' : '#6ee05a'
        };

        console.log(this.state.open);

        const date = new Date(this.props.date).toUTCString().split(" ").slice(0, 3).join(" ");

        if(this.state.open){
            return(
                <div className='dashboard-scrollable-item open' onClick={this.toggleExpand}>
                    <div className='dashboard-scrollable-item-topbar'>
                        <div className='dashboard-scrollable-item-date'>
                            <p >{date}</p>
                        </div>
                        <div className='dashboard-scrollable-item-type'>
                            <p>{this.props.type}: {this.props.amount}</p>
                        </div>
                    </div>
                    <div className='dashboard-scrollable-item-bottom'>
                        <div className='dashboard-scrollable-item-bottom-icon' style={iconStyle}>

                            <FontAwesomeIcon icon={`${this.getTransactionIcon(this.props.type, this.props.category)}`}/> 


                        </div>
                        <div className='dashboard-scrollable-item-bottom-category'>
                            <p>{this.props.category}: {this.props.description}</p>
                        </div>
                        <div className='dashboard-scrollable-item-bottom-amount'>
                            <p>
                                {this.props.type === 'expense' ? `-${this.props.amount}` : this.props.amount}
                            </p>
                        </div>

                    </div>
                    <div className='dashboard-scrollable-item-open'>
                        <div className='dashboard-scrollable-item-open-edit'>
                            <FontAwesomeIcon icon={'edit'} />
                        </div>
                        <div className='dashboard-scrollable-item-open-delete'>
                            <FontAwesomeIcon icon={'trash-alt'} />
                        </div>
                    </div> 
                </div>
            )
        } else {
        return (
            <div className='dashboard-scrollable-item' onClick={this.toggleExpand}>
                <div className='dashboard-scrollable-item-topbar'>
                    <div className='dashboard-scrollable-item-date'>
                        <p >{date}</p>
                    </div>
                    <div className='dashboard-scrollable-item-type'>
                        <p>{this.props.type}: {this.props.amount}</p>
                    </div>
                </div>
                <div className='dashboard-scrollable-item-bottom'>
                    <div className='dashboard-scrollable-item-bottom-icon' style={iconStyle}>
                        
                        <FontAwesomeIcon icon={`${this.getTransactionIcon(this.props.type, this.props.category)}`}/> 
                        
                        
                    </div>
                    <div className='dashboard-scrollable-item-bottom-category'>
                        <p>{this.props.category}: {this.props.description}</p>
                    </div>
                    <div className='dashboard-scrollable-item-bottom-amount'>
                        <p>
                            {this.props.type === 'expense' ? `-${this.props.amount}` : this.props.amount}
                        </p>
                    </div>
                    
                </div>       
                {/* {this.props.key}
                {this.props.category}
                {this.props.amount}                
                {this.props.description}
                {this.props.type} */}
            </div>
        )};
    }
};

EditableTransaction.propTypes = {
    key: PropTypes.string,
    category: PropTypes.string,
    amount: PropTypes.number,
    date: PropTypes.string,
    description: PropTypes.string,
    type: PropTypes.string,
};

const expenseCategoriesAndIcons = [
    {
       icon: 'utensils',
       category: 'food',
   },
   {
       icon: 'home',
       category: 'rent'
   },
    {
       icon: 'car',
       category: 'car',
   },
    {
       icon: 'gamepad',
       category: 'entertainment'
   },
    {
       icon: 'file-invoice-dollar',
       category: 'bills',
   },
    {
       icon: 'phone-square',
       category: 'phone',
   },
    {
       icon: 'network-wired',
       category: 'internet',
   },
    {
       icon: 'glass-cheers',
       category: 'kick-ons',
   }, 
    {
       icon: 'tv',
       category: 'electronics',
   },
    {
       icon: 'star',
       category: 'subscriptions'
    }
   ];

   const incomeCategoriesAndIcons = [
    {
        icon: 'wallet',
        category: 'salary',
    }, 
    {
        icon: 'chart-line',
        category: 'dividends',
    },
    {
        icon: 'gift',
        category: 'gift'
    },
    {
        icon: 'money-check-alt',
        category: 'investment'
    },
    {
        icon: 'undo',
        category: 'refund',
    }
    ];


export default EditableTransaction;