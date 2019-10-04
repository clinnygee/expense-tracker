import React, { Component } from 'react';
import {RadialChart} from 'react-vis';
import './charts.css';


// the dash for charts, allows you to make a choice of what category you want to see,
// date to be displayed is chosen in the Calender component. 



class Charts extends Component {

    state = {
        category: null,
    }

    handleCategorySelect = (e) => {
        console.log(e.target.innerText);
        this.setState({category: e.target.innerText})
    };

    // works
    getChartTransactions = () => {

        if(!this.state.category){
            return this.props.transactions;
        }

        const type = this.state.category.toLowerCase();
        
        const transactions = this.props.transactions.filter(transaction => {
            
            return (transaction.type === type )
        });

        return transactions;
    }

    // Some function, that from transactions, returns an object

    render() {

        if(this.state.category){
            this.getChartTransactions()
        
        
        return (
            <div className='charts-container'>
                {/* category selector, options: income, expense, both */}
                <CategorySelector onCategorySelect={this.handleCategorySelect}/>
                <ChartRenderer category={this.state.category} transactions={this.getChartTransactions()}/>

            </div>
        );} else {
            return (
                <div className='charts-container'>
                {/* category selector, options: income, expense, both */}
                <CategorySelector onCategorySelect={this.handleCategorySelect}/>
                {/* <ChartRenderer category={this.state.category}/> */}

                </div>
            )
        }
    }
};

const CategorySelector = (props) => {

    return (
        <div className='charts-categories'>
            <div className='charts-categories-item'>
                <p onClick={props.onCategorySelect}>Income</p>
            </div>
            <div className='charts-categories-item'>
                <p onClick={props.onCategorySelect}>Expense</p>
            </div>
            <div className='charts-categories-item'>
                <p onClick={props.onCategorySelect}>Both</p>
            </div>

        </div>
    )
};

const ChartRenderer = (props) => {

    const createChartData = () => {
        let data = [];
        let sum = 0;
        let found;

        props.transactions.forEach((transaction) => {

            found = false;

            for(let i =0; i< data.length; i++){
                if(data[i].category === transaction.category){
                    data[i].amount += transaction.amount
                    sum += transaction.amount;
                    found = true;
                    break;
                }
            };
            if (!found){
                data.push({category: transaction.category, amount: transaction.amount});
                sum += transaction.amount;
            }
        })
        data.forEach(data => console.log(data));
        console.log(data + '' + sum);

        data = data.map(category => {
            return (
                {angle: category.amount/sum,  label: category.category}
            )
        });
        return data;
    }

    createChartData();

    // angle is the % of the chart.
    if(props.category){
        let myData = [ {angle: 1, radius: 10, label: 'eat pussy'}, {angle: 2, label: 'Super Custom label', subLabel: 'With annotation', radius: 20}, {angle: 5, radius: 5, label: 'Alt Label'}, {angle: 3, radius: 14}, {angle: 5, radius: 12, subLabel: 'Sub Label only', className: 'custom-class'} ];
        myData = createChartData()
        return(
            <div className='charts-display-container'>
                <RadialChart
                    data={myData}
                    width={300}
                    height={300}
                    showLabels={true}

                />
            </div>
        )
    } else {
        return (
            null
        )
    }
};


export default Charts;