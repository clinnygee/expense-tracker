const mongoose = require('mongoose');

const transactionsSchema = new mongoose.Schema({
    type: {type: String, required: true, },
    category: {type: String},
    date: {type: Date, required: true},
    description: {type: String},
    amount: {type: Number, required: true},
    // author: {
    //     id: {
    //         type: mongoose.Schema.Types.ObjectId,
    //         ref: 'User' 
    //     },
    //     username: String
    author: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'User', 
        },
    
});

module.exports = mongoose.model('Transactions', transactionsSchema);