var jsonObj = require("../data/jsonTest.json");

var way = jsonObj;

///server to build the nav
var http = require("http");
var server = http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "application/json", "Access-Control-Allow-Origin": "*"});
  response.write(JSON.stringify(way));
  response.end();
});
server.listen(8080);