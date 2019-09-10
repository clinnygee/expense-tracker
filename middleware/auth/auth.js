const jwt = require('jsonwebtoken');

const secret = 'expense-tracker';

// Everything that comes through this middlewares req.username will be = to the username. duh

const withAuth = (req, res, next) => {
    console.log('withAuth');
    console.log(req.headers);
    console.log(req.body);
    // const token = 
    // req.headers.token ||
    // req.body.token ||
    // req.query.token ||
    // req.headers['x-access-token'] ||
    // req.cookies.token;

    const token = req.headers.cookie;

    const _token = token.split("=");

    console.log(_token);

    console.log(token);

    if(!token) {
        res.status(401).send('Unauthorized: No Logged in user');
    } else {
        console.log('token recieved');
        jwt.verify(_token[1], secret, function(err, decoded){
            if(err){
                console.log(_token[1]);
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