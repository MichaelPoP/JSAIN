var natural = require('natural');
natural.PorterStemmer.attach();
tokenizer = new natural.WordTokenizer();
var nounInflector = new natural.NounInflector();
//Requires the api package for the question answering api
var unirest = require('unirest');


var _ = require('underscore');
var express = require("express");
app = express();
//the following tells express to use ejs to render views
app.set("view engine", "ejs");
app.use(express.static(__dirname + '/public'));




app.get("/", function(req, res){
  
  res.render("index");

    
});

app.get("/go", function(req, res){
  
  var val = req.query.search;
  console.log(val);
  var tokenstem = val.tokenizeAndStem();
  res.send(tokenstem);
});

app.get("/search", function(req, res){
  var question = req.query.search;
  unirest.get("https://siris.p.mashape.com/json?clientFeatures=all&input=" + question + "&locale=en&timeZone=%2B120")
  .header("X-Mashape-Key", "MQPalSdM4lmshvpdJzl5GExkJExnp1S0q6xjsn0JlgNq889sAS")
  .header("Accept", "application/json")
  .end(function (result) {
  console.log(result.status, result.headers, result.body);
  console.log(result.output);
  var answer = result;
  res.send(answer);
});
  
});


//SETS THE PORT 
app.listen(1337, function(){
  console.log("Server Starting");
});





//OTHER REQUIREMENTS
// console.log(tokenizer.tokenize("your dog has fleas."));
// var natural = require('natural'), 
// stemmer = natural.PorterStemmer;
// var natural = require('natural'),
// tokenizer = new natural.WordTokenizer();
// stemmer.attach();
// var stemmer = require('natural').PorterStemmer;
// stemmer = natural.PorterStemmer;


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