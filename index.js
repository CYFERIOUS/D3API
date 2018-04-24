var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

//--Routes will be added automatically--

var filePath = "./website/graph1/graph1.html"
 var resolvedPath = path.resolve(filePath);


 var filePath2 = "./website/graph2/graph2.html"
 var resolvedPath2 = path.resolve(filePath2);



app.use(function(err, req, res, next) {
  	console.error(err.stack);
	res.send("<h1>popo</h1>");
});

app.listen(8080, function() {
  console.log('Express server listening on port 8080');
});

app.use(express.static('website'));


app.get('/graph1/',function(req,res){
	 return res.sendFile(resolvedPath);
})

app.get('/graph2/',function(req,res){
	 return res.sendFile(resolvedPath2);
})





