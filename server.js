const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.use(bodyParser.urlencoded({extended: false,}));

app.use(bodyParser.json());

// app.use((req, res) => {
//     res.setHeader('Content-Type', 'text/plain');
//     res.write('you posted: \n');
//     res.end(JSON.stringify(req.body, null, 2));
// })

app.get('/', (req, res) => {
    console.log('at the log in page');
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
});

app.post('/register', (req, res) => {
    console.log(req.body);
    // console.log(req);
    console.log('hit the register route');
    res.json(req.body);
});



app.listen(process.env.PORT || 8080) 