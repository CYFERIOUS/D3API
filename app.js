var server = require('./app/model/server/server.js');
var express = require('express');
var logger = require('morgan');
var path = require('path');
var api = require('./app/model/server/');
var app = express();


app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'app/router/website')));
app.use('/app/model/server/', api);


module.exports = app;