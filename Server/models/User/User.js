const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const saltRounds = 10;

const UserSchema = new mongoose.Schema({
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    transactions: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Transactions'

        }
    ],
    settings: {
        img: {
            data: Buffer,
            contentType: String,
            path: String,
        },
    },
});

UserSchema.pre('save', function(next)  {
    // Check if document is new, or a new password has been set.
    if(this.isNew || this.isModified('password')){
        // Saving reference to this because of changing scopes.
        const document = this;
        bcrypt.hash(this.password, saltRounds, (err, hashedPassword) => {
            if (err){
                next(err);
            } else {
                document.password = hashedPassword;
                next();
            }
        })
    } else {
        next();
    }
});

UserSchema.methods.isCorrectPassword = (password, storedPassword, callback) => {
    
    console.log(password);
    console.log(storedPassword);
    bcrypt.compare(password, storedPassword, (err, same) => {
        
        if(err){
            callback(err);
        } else {
            callback(err, same);
        }
    })
};

module.exports = mongoose.model('User', UserSchema);