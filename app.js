var mongodb = require("mongodb");
var http = require("http");

console.log(mongodb);
var MongoClient = mongodb.MongoClient;

console.log("---------------MongoCleint----------------");
console.log(MongoClient);
var url = 'mongodb://localhost:27017/quotes';

MongoClient.connect(url,function(err,db){
	if(err){
		console.log("Error unbavle to connect ",err);
	}else{
		console.log("Connection established to ",url);

		db.close();
	}
});

http.createServer(function(request,response){
	console.log(request);
	response.writeHead(200,{'Content-Type':'text/plain'});
	response.end("Hello World");
}).listen('8081');

console.log("Hello World");
