
const http = require("http");
const express = require("express");

var app = express();

app.get("/", function (req,res){
	
	res.writeHead(200, {'Content-Type':'text/plain'});
	
	res.end('Hello World !');
	
});

app.listen(8081);

module.exports = app;

console.log("Server running in http://127.0.0.1:8081/");