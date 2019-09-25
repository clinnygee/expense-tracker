import React, {createContext} from 'react';


const UserContext = createContext({
    username: '',
    transactions: [],
    _id: '',
    authenticated: false,
    jwt: '',
    updateUserData: () => {},
    logInSuccess: () => {},
    setJwt: () => {},
    getUserData: () => {},
    requestUpdate: () => {},
});

export class UserProvider extends React.Component {

    
    // Change this to be a fetch call, so it can be called when a refresh is required when data is changed on the server, 
    // and when the user successfully logs in
    updateUserData = newUserData => {
        console.log(newUserData);
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

    state = {
        username: '',
        transactions: [],
        _id: '',
        updateUserData: this.updateUserData,
        logInSuccess: this.logInSuccess,
        setJwt: this.setJwt,
        getUserData: this.getUserData,
        requestUpdate: this.requestUpdate,
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