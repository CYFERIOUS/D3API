var express = require('express');
var bodyParser = require('body-parser');





var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());




//--Routes will be added automatically--


app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.send(500, { message: err.message });
});



app.listen(8080, function() {

  console.log('Express server listening on port 8080');
});
