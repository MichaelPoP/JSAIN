var natural = require('natural');
natural.LancasterStemmer.attach();
tokenizer = new natural.WordTokenizer();
var nounInflector = new natural.NounInflector();

// console.log(tokenizer.tokenize("your dog has fleas."));
// var natural = require('natural'), 
// stemmer = natural.PorterStemmer;
// var natural = require('natural'),
// tokenizer = new natural.WordTokenizer();
// stemmer.attach();
// var stemmer = require('natural').PorterStemmer;
// stemmer = natural.PorterStemmer;

var _ = require('underscore');
var express = require("express");
app = express();
//the following tells express to use ejs to render views
app.set("view engine", "ejs");
app.use(express.static(__dirname + '/public'));




app.get("/", function(req, res){
  
  res.render("index");

  // var val = req.query.command;
  // var tokenstem = val.tokenizeAndStem();
  // res.send(tokenstem);
    
});

app.get("/go", function(req, res){
  
  var val = req.query.search;
  console.log(val);
  var tokenstem = val.tokenizeAndStem();
  res.send(tokenstem);
});


//SETS THE PORT 
app.listen(1337, function(){
  console.log("Server Starting");
});









// app.get("/", function(req, res){
//   var natural = require("natural");
//   var stemmer = natural.PorterStemmer;
//   var tokenizer = new natural.WordTokenizer();
//   res.render("index", {
//     natural: natural,
//     stemmer: stemmer,
//     tokenizer: tokenizer
//   });
//   // res.redirect("/");
//   // res.json();
//   // res.status(500);
// });