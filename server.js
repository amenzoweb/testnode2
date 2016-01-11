var path = require('path');
var express = require('express');
// sans var -> rend global
Promise = require('bluebird');
mongoose = require('mongoose');
fs = Promise.promisifyAll(require('fs'));
logLib= require('./meslibs/log');



app = express();


var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));

//configs
app.use(express.static('public'));
mongoose.connect('mongodb://localhost/book_phone');

// import models

models = require('./models');

// import routing
require('./routing/callback');
require('./routing/users');
require('./routing/user');



console.log(new models.User());

app.listen(3000);