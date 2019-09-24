import React, {createContext} from 'react';


const UserContext = createContext({
    username: '',
    transactions: [],
    _id: '',
    updateUserData: () => {}
});

export class UserProvider extends React.Component {
    updateUserData = newUserData => {
        console.log(newUserData);
        this.setState({username: newUserData.username, transactions: newUserData.transactions, _id: newUserData._id})
    };

    state = {
        username: '',
        transactions: [],
        _id: '',
        updateUserData: this.updateUserData,
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