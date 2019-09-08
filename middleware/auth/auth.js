const jwt = require('jsonwebtoken');

const secret = 'expense-tracker';

// Everything that comes through this middlewares req.username will be = to the username. duh

const withAuth = (req, res, next) => {
    console.log(req.body);
    const token = 
    req.body.token ||
    req.query.token ||
    req.headers['x-access-token'] ||
    req.cookies.token;

    if(!token) {
        res.status(401).send('Unauthorized: No Logged in user');
    } else {
        jwt.verify(token, secret, function(err, decoded){
            if(err){
                res.status(401).send('Unauthorized: No Logged in user');
            } else {
                req.username = decoded.username;
                console.log(decoded);
                next();
            }
        })
    }

};

module.exports = withAuth;