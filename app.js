const mongoose = require('mongoose');
var styleComp = require('./api/styles.js');
var server = require('./api/server.js');
var express = require('express');
var logger = require('morgan');
var path = require('path');
var api = require('./api');
var app = express();
app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(express.static("public"));


console.log(`enviroco:  ${app.get('env')}`);

mongoose.connect('mongodb://localhost:27017/mongo-excercises', { useNewUrlParser: true })
.then(()=>console.log("is connected and ready to poo mongoExcercises Mutant"))
.catch(err=>console.log("not connected because is not pooing2 mutant",err));


var routes = require('./api/router')(app);
//var footClan = require('./api/footSoldiers');
var grapher = require('./api/graphRouter');
//app.use('/', footClan);
app.use('/', grapher);
//ASYNC TUTORIAL
console.log("before");
// var callback = require('./api/asyncCallbackHellResolved');
// var callback2 = require('./api/asyncCallbackWay');
// var callback3 = require('./api/promisesWay');
// var callback4 = require('./api/promise-api');
// var callback5 = require('./api/parallelPromises');
// var callback5 = require('./api/sugar');
console.log("After");
//CRUD TUTORIAL
//var queryExcercise = require('./api/queryExcercise');
//RELATIONSHIP TUTORIAL
//var relationship = require('./api/relationships');
//var relationshipByme = require('./api/mutants');
//AUTHE-ORIZATION TUTORIAL
//var salt = require('./api/hash');
var oauth = require('./api/tmntUser');
const User = require('./api/tmntUser');
app.use('/', User);


app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public/*')));
app.use('/api', api);


var servicio = app.listen(3030);
var io = require('socket.io').listen(servicio);


io.on('connection', function(socket){
  console.log('a user connected');
});


module.exports = app;


