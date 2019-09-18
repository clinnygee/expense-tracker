import React, { Component } from 'react';
import IncomeExpenseToggle from './IncomeExpenseToggle';
import IconSubmitForm from './IconSubmitForm';
import SubmitForm from './SubmitForm';
import { faUtensils, faHome, faCar, faGamepad, faFileInvoiceDollar, faPhoneSquare, faNetworkWired, faGlassCheers, faTv, faStar } from '@fortawesome/free-solid-svg-icons';

// Displays a top bar that is a choice between income/expense.

// Both income and expense are structured the same, they just display different icons.
// Submitting either income or expense sends the request to their routes. 
// /create expects to recieve {type: income/expense, category: String, description: String, amount: Number, Date, date}
// After choosing the category, a form is displayed as well,

class Create extends Component {

    state = {
        category: null,
        type: 'expense',
        date: new Date(),
        description: null,
        amount: null,
    }

    handleTypeToggle = () => {
        
        this.state.type === 'expense' ? this.setState({type: 'income', category: null}) : this.setState({type: 'expense', category: null});

        
    }

    handleDateSelect = date => this.setState({date: date});

    handleCategorySelect = (e) => {

        console.log(e.target);

        const icon = e.target.dataset.icon;

        console.log(icon);

        const category = categoriesAndIcons[icon].category;

        if(category){
            this.setState({category: category});
        }

        console.log(category);
    }

    render() {
        return (
            <div className='create-container'>
                <IncomeExpenseToggle activeType={this.state.type} onToggle={this.handleTypeToggle}/>

                <IconSubmitForm type={this.state.type} onCategorySelect={this.handleCategorySelect}/>
                    {/* Allows input of a date, into selected by react calendar, description, and amount */}
                <SubmitForm onDateSelect={this.handleDateSelect} date={this.state.date} display={this.state.category}/>

            </div>

            
        );
    }
}




    const categoriesAndIcons = {
        utensils: {
            icon: {faUtensils},
            category: 'food',
        },
        home: {
            icon: {faHome},
            category: 'rent'
        },
        car: {
            icon: {faCar},
            category: 'car',
        },
        gamepad: {
            icon: {faGamepad},
            category: 'entertainment'
        },
        file: {
            icon: {faFileInvoiceDollar},
            category: 'bills',
        },
        phone: {
            icon: {faPhoneSquare},
            category: 'phone',
        },
        internet: {
            icon: {faNetworkWired},
            category: 'internet',
        },
        glass: {
            icon: {faGlassCheers},
            category: 'kick-ons',
        }, 
        tv: {
            icon: {faTv},
            category: 'electronics',
        },
        star: {
            icon: {faStar},
            category: 'subscriptions'
        }
    }


export default Create;