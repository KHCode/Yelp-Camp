var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

var campgrounds = [
	{name: "Salmon Creek", image: "https://live.staticflickr.com/3315/3647992218_7eda7a2a44_b.jpg"},
	{name: "Lake Sabrina", image: "https://farm8.staticflickr.com/7460/13884819293_5f2656f5a2_b.jpg"},
	{name: "Four Jeffries", image: "https://farm9.staticflickr.com/8583/16710089425_f257735c2d_b.jpg"},
	{name: "Salmon Creek", image: "https://live.staticflickr.com/3315/3647992218_7eda7a2a44_b.jpg"},
	{name: "Lake Sabrina", image: "https://farm8.staticflickr.com/7460/13884819293_5f2656f5a2_b.jpg"},
	{name: "Four Jeffries", image: "https://farm9.staticflickr.com/8583/16710089425_f257735c2d_b.jpg"},
	{name: "Salmon Creek", image: "https://live.staticflickr.com/3315/3647992218_7eda7a2a44_b.jpg"},
	{name: "Lake Sabrina", image: "https://farm8.staticflickr.com/7460/13884819293_5f2656f5a2_b.jpg"},
	{name: "Four Jeffries", image: "https://farm9.staticflickr.com/8583/16710089425_f257735c2d_b.jpg"}
]

app.get("/", function(req, res){
	res.render("landing");
});

app.get("/campgrounds", function(req, res){
	res.render("campgrounds", {campgrounds:campgrounds});
});

app.post("/campgrounds", function(req, res){
	var name = req.body.name;
	var image = req.body.image;
	var newCampground = {name: name, image: image};
	campgrounds.push(newCampground);
	res.redirect("/campgrounds");
})

app.get("/campgrounds/new", function(req, res){
	res.render("new.ejs");
});

app.listen(3000, function(){
	console.log("Now serving Yelp Camp!");
});