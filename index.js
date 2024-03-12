if(process.env.NODE_ENV !== 'production'){
    const dotenv = require('dotenv').config({path : __dirname+'./env'});
}

const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
app.use(express.static('public'));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/home', require('./routes'));
app.listen(process.env.PORT || 8000);