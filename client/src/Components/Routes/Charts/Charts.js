import React, { Component } from 'react';
import {RadialChart} from 'react-vis';
import './charts.css';


// the dash for charts, allows you to make a choice of what category you want to see,
// date to be displayed is chosen in the Calender component. 



class Charts extends Component {

    state = {
        category: 'Expense',
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
                {angle: category.amount/sum,  label: category.category, color: createRandomHexColour()}
            )
        });
        return {data: data, sum: sum}
    };

    const createRandomHexColour = () => {
        const literals = ['0', '1', '2', '3', '4', '5', '6', '7', '8','9','A','B','C','D','E','F'];

        let hexColor = ['#'];

        for(let i =0; i< 6; i++){
            hexColor.push(literals[getRandomInt(0, 16)])
        };

        return hexColor.join('');

    };

    const getRandomInt = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);

        return Math.floor(Math.random() * (max-min) + min);
    }

    createChartData();

    // angle is the % of the chart.
    if(props.category){
        
        let myData = createChartData();

        console.log(myData.data)

        const chartInformation = myData.data.map(chartItem => (
             <ChartInformationItem color={chartItem.color} label={chartItem.label} percent={Math.round(chartItem.angle * 100 * 10)/10}/>
        ));
        return(
            <div className='charts-display-container'>
                <div className='charts-display-header'>
                    <p>Monthly {props.category} Summary</p>
                    <p>Total {props.category}: ${myData.sum}</p>
                </div>
                <div className='charts-display-information'>
                    {chartInformation}
                </div>
                <RadialChart
                    data={myData.data}
                    width={300}
                    height={300}
                    showLabels={true}
                    colorType={'literal'}
                    animation

                />
            </div>
        )
    } else {
        return (
            null
        )
    }
};

const capitalize = (str) => {
    if (typeof str !== 'string') return '';

    else return str.charAt(0).toUpperCase() + str.slice(1);
};

const ChartInformationItem = (props) => {

    let bgColor = {
        backgroundColor: props.color,
    }

    return (
        <div className='charts-display-information-item'>
            <div className='charts-display-information-item-color' style={bgColor}>

            </div>
            <p>{capitalize(props.label)}, {props.percent}%</p>
        </div>
    )
}


export default Charts;