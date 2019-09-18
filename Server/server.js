const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const path = require('path');
const app = express();

const User = require('./models/User/User');
const withAuth = require('./middleware/auth/auth');

const secret = 'expense-tracker';

const parent_dirname = process.cwd();



app.use(express.static(path.join(parent_dirname, 'build')));

app.use(bodyParser.urlencoded({extended: false,}));

app.use(cookieParser());

app.use(bodyParser.json());

const mongo_uri = 'mongodb://localhost/expense-tracker';

mongoose.connect(mongo_uri, {useNewUrlParser: true}, (err) => {
    if(err){
        throw err;
    } else {
        console.log(`Connected to ${mongo_uri}`);
    }
})

// app.use((req, res, next) => {
//     res.setHeader('Content-Type', 'application/json');
//     next();
// })
// app.use((req, res) => {
//     res.setHeader('Content-Type', 'text/plain');
//     res.write('you posted: \n');
//     res.end(JSON.stringify(req.body, null, 2));
// })

app.get('/', (req, res) => {
    console.log(parent_dirname)
    console.log('at the log in page');
    res.sendFile(path.join('../', 'build', 'index.html'))
});

app.post('/register', (req, res) => {
    const {username, password} = req.body;

    const user = new User({username, password});

    user.save((err) => {
        if(err){
            console.log(err);
            res.status(500).send("Error registering new user, please try again");
        } else {
            res.status(200).send('Signed up!');
        }
    })
    // console.log(req.body);
    // // console.log(req);
    // console.log('hit the register route');
    // res.json(JSON.stringify(req.body));
});

app.post('/login', (req, res) => {
    console.log(req.body);
    const {username, password} = req.body;

    User.findOne({username}, function(err, user) {
        if(err){
            // need to send a response here, to say the user was not found in the db.
            console.log(err);
            res.status(500).json({error: 'Internal error, please try again'});
        } else if (!user){
            res.status(401).json({error: 'Incorrect username or password'});
        } else {
            console.log(user);
            user.isCorrectPassword(password, user.password, function (err, same) {
                if(err){
                    console.log(err);
                    res.status(500).json({error: 'Internal error, please try again'});
                } else if (!same){
                    res.status(401).json({error: 'Incorrect username or password'});
                } else {
                    // issue token
                    const payload = {username};
                    const token = jwt.sign(payload, secret, {
                        expiresIn: '24h'
                    });
                    // res.cookie(`expense-tracker:${username}`, token, {httpOnly: true}).status(200);
                    res.json({token: token});
                    // res.json(JSON.stringify({user: username}));
                }
            })
        }
    })
});

app.get('/checkToken', withAuth, (req, res) => {
    console.log(req.username);
    res.sendStatus(200);
})

app.post('/create', withAuth, (req, res) => {
    
})

app.get('*', (req, res) => {
    res.sendFile(path.join(parent_dirname, 'build', 'index.html'));
})



app.listen(process.env.PORT || 8080) 