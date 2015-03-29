// var natural = require('natural');
// tokenizer = new natural.WordTokenizer();
var natural = require('natural'), 
stemmer = natural.PorterStemmer;
var natural = require('natural'),
tokenizer = new natural.WordTokenizer();
  stemmer.attach();

// var natural = require('natural'),
// stemmer = natural.PorterStemmer;
var _ = require('underscore');
var express = require("express");
app = express();
//the following tells express to use ejs to render views
app.set("view engine", "ejs");
app.use(express.static(__dirname + '/public'));




app.get("/", function(req, res){
  var natural = require("natural");
  var stemmer = natural.PorterStemmer;
  var tokenizer = new natural.WordTokenizer();
  res.render("index", {
    natural: natural,
    stemmer: stemmer,
    tokenizer: tokenizer
  });
  // res.redirect("/");
  // res.json();
  // res.status(500);
});

app.listen(3000, function(){
  console.log("Server Starting");
});