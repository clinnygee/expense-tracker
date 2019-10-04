import React, {createContext} from 'react';


const UserContext = createContext({
    username: '',
    transactions: [],
    _id: '',
    authenticated: false,
    jwt: '',
    updateUserData: () => {},
    logInSuccess: () => {},
    signOut: () => {},
    setJwt: () => {},
    getUserData: () => {},
    requestUpdate: () => {},
    selectedMonth: '',
    selectedYear: '',
    updateSelectedMonth: () => {},
    updateSelectedYear: () => {},
});

export class UserProvider extends React.Component {

    
    // Change this to be a fetch call, so it can be called when a refresh is required when data is changed on the server, 
    // and when the user successfully logs in
    updateUserData = newUserData => {
        console.log(newUserData);
        newUserData.transactions.sort((a, b) => {
            return new Date(b.date) - new Date(a.date);
        })
        console.log(newUserData.transactions);
        this.setState({username: newUserData.username, transactions: newUserData.transactions, _id: newUserData._id})
    };
    // When this is called, call the function to fetch user data.
    logInSuccess = () => {
        console.log('in context loginsuccess')
        this.setState({authenticated: true});
        this.getUserData()
        
    };

    setJwt = jwt => {
        console.log('in context setjwt')
        this.setState({jwt: jwt});
    };

    signOut = () => {
        this.setState({authenticated: false});
        sessionStorage.removeItem('jwt');
    };

    getUserData = () => {
        let token = sessionStorage.getItem('jwt');

        fetch('/dashboard', {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${token}`,
            }
        }).then(response => {
            return response.json();
        }).then(parsedJson => {
            console.log(parsedJson);
            this.updateUserData(parsedJson);
            // this.setTransactionData(parsedJson.transactions);
        })
    };

    requestUpdate = () => {
        console.log('update requested');
        this.getUserData();
    }

    updateSelectedMonth = (month) => {
        console.log('in updateSelectedMonth, month: ' + this.state.selectedMonth)
        this.setState({selectedMonth: month});
    };

    updateSelectedYear = (year) => {
        console.log('in updateSelected year, year: ' + this.state.selectedYear)
        this.setState({selectedYear: year});
    };

    state = {
        username: '',
        transactions: [],
        _id: '',
        selectedMonth: new Date().getMonth(),
        selectedYear: new Date().getFullYear(),
        updateUserData: this.updateUserData,
        logInSuccess: this.logInSuccess,
        setJwt: this.setJwt,
        signOut: this.signOut,
        getUserData: this.getUserData,
        requestUpdate: this.requestUpdate,
        updateSelectedMonth: this.updateSelectedMonth,
        updateSelectedYear: this.updateSelectedYear,
    };

    

    render(){
        return(
            <UserContext.Provider value={this.state}>
                {this.props.children}
            </UserContext.Provider>
        )
    };
};

export const UserConsumer = UserContext.Consumer;