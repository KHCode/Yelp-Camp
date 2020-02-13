var express = require("express");
var app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res){
	res.render("landing");
});

app.get("/campgrounds", function(req, res){
	var campgrounds = [
		{name: "Salmon Creek", image: "https://live.staticflickr.com/3315/3647992218_7eda7a2a44_b.jpg"},
		{name: "Lake Sabrina", image: "https://farm8.staticflickr.com/7460/13884819293_5f2656f5a2_b.jpg"},
		{name: "Four Jeffries", image: "https://farm9.staticflickr.com/8583/16710089425_f257735c2d_b.jpg"}
	]
	res.render("campgrounds", {campgrounds:campgrounds});
});

app.listen(3000, function(){
	console.log("Now serving Yelp Camp!");
});