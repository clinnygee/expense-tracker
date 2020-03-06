import React, {createContext} from 'react';
import apiCall from './API_CALLS'

const UserContext = createContext({
    username: '',
    transactions: [],
    _id: '',
    imageHex: '',
    authenticated: false,
    jwt: '',
    authenticateUser: () => {},
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

    
    authenticateUser = () => {

        console.log('in context authenticateUser')

        
        
        let token = sessionStorage.getItem('jwt');

        this.setJwt(token);

        if(token){
            
            apiCall('/checkToken', 'GET').then(res => {
                if(res.status === 200){
                    this.setJwt(token);
                    this.logInSuccess()
                    
                } else{
                    sessionStorage.removeItem('jwt')
                }
                
            })
        };
        this.setState({authenticating: false});
    }
    // Change this to be a fetch call, so it can be called when a refresh is required when data is changed on the server, 
    // and when the user successfully logs in
    updateUserData = newUserData => {
        console.log(newUserData);
        newUserData.transactions.sort((a, b) => {
            return new Date(b.date) - new Date(a.date);
        })
        console.log(newUserData.transactions);
        console.log(newUserData.settings);
        // : null for imageHex needs to be changed to the default Hex for the default image
        this.setState({username: newUserData.username, transactions: newUserData.transactions, _id: newUserData._id, imageHex: newUserData.settings ? newUserData.settings.img.data.data : null})
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

        apiCall('/dashboard', 'GET').then(response => {
            return response.json();
        }).then(parsedJson => {
            // this does not always return an image, if the user hasnt stored an image, and will break if they dont have one
            console.log(parsedJson);
            this.updateUserData(parsedJson);
            
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
        imageHex: null,
        authenticated: false,
        selectedMonth: new Date().getMonth(),
        selectedYear: new Date().getFullYear(),
        authenticateUser: this.authenticateUser,
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