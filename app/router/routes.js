var filePath = "./app/router/website/graph1/graph1.html"
var resolvedPath = path.resolve(filePath);


app.get('/popo/', function(req, res) {
  res.sendFile(resolvedPath);
});