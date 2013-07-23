var express = require('express');
var fs = require('fs');
var htmlfile = "index.html";

var app = express.createServer(express.logger());

app.use(express.static(__dirname + 'public'));

app.get('/', function(request, response) {
	var dataRead = fs.readFileSync(htmlfile);
	var buff = new Buffer(dataRead);
	response.send(buff.toString('utf-8'));
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
