var express = require('express');
var app = express();
var unirest = require("unirest");
app.set("view engine","ejs");

var req = unirest("GET", "https://sun.p.rapidapi.com/api/sun/");

//var longitude = 0;

req.query({
  "latitude":"49.0000",
  "longitude":"-97.0000",
  "date":"2019-11-01"
})
req.headers({
  "x-rapidapi-host": "sun.p.rapidapi.com",
	"x-rapidapi-key": "0dbfc41c85mshe36c22ae2876320p1c2a35jsn5c4862f7770a"
})

req.end(function (res) {
	if (res.error) throw new Error(res.error);

	console.log(res.body);
});


app.listen(3000, process.env.IP, function(){
	console.log("started");
});
