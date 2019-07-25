const config = require('./config');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

//Middleware

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: false
}))

// parse application/json
app.use(bodyParser.json())
app.use(cors());

const mongoose = require('mongoose');

mongoose.connect(config.dbString, {
    useNewUrlParser: true
}, (err, res) => {
    if (err) throw err;
    console.log('DB online ONLINE');
});

const routes = require('./routes/api/api.js');
app.use('/api', routes);

//Handle Production
if (process.env.NODE_ENV === 'production') {
    //static folder
    app.use(express.static(__dirname + '/public'));
    //Handle SPA
    app.get(/.*/, (req, res) => {
        res.sendFile(__dirname + '/public/index.html')
    });
}
process.env.PORT = process.env.PORT || 3000;
app.listen(process.env.PORT, () => {
    console.log(`Server starting on port ${process.env.PORT}`);
});