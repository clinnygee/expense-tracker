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

    handleCategorySelect = (category) => {

        console.log(category);

        this.setState({category: category});
        // console.log(e.target);

        // const icon = e.target.dataset.icon;

        // console.log(icon);

        // const category = categoriesAndIcons[icon].category;

        // if(category){
        //     this.setState({category: category});
        // }

        // console.log(category);
    }

    getSubmitFormIcon = () => {

        if (this.state.type === 'expense'){
        const category = expenseCategoriesAndIcons.filter((expense) => {
            console.log('expense categoory: ' + expense.category + ' state category: ' + this.state.category)
            return expense.category === this.state.category;
        })

        return category[0];
        } else {
            const category = incomeCategoriesAndIcons.filter((income) => {
                return income.category === this.state.category;
            })
            return category[0];
        }

    }

    handleCreateSubmit = (amount, description) => {
        console.log(amount + "" + description);
        console.log(this.state);

        this.setState({amount: amount, description: description});

        this.submitTransaction({category: this.state.category, type: this.state.type, date: this.state.date, amount: amount, description: description});

       
    };

    submitTransaction = (transaction) => {
        let token = sessionStorage.getItem('jwt');
        return fetch('/create', {
            method: 'POST',
            body: JSON.stringify(transaction),
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            
        }).then(res => console.log(res))
    }

    render() {
        return (
            <div className='create-container'>
                <IncomeExpenseToggle activeType={this.state.type} onToggle={this.handleTypeToggle}/>

                <IconSubmitForm 

                    type={this.state.type} 
                    onCategorySelect={this.handleCategorySelect} 
                    icons={this.state.type === 'expense' ? expenseCategoriesAndIcons : incomeCategoriesAndIcons}

                />
                    {/* Allows input of a date, into selected by react calendar, description, and amount */}
                <SubmitForm 

                    onDateSelect={this.handleDateSelect} 
                    date={this.state.date} 
                    display={this.state.category} 
                    icon={this.getSubmitFormIcon()}
                    onSubmit={this.handleCreateSubmit}
                
                />

            </div>

            
        );
    }
}



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
    ]
   

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
        ]
    



export default Create;