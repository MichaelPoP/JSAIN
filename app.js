// =============REQ FOR NATURAL LIBRARY=====================
var natural = require('natural');
natural.PorterStemmer.attach();
tokenizer = new natural.WordTokenizer();
var nounInflector = new natural.NounInflector();
//Requires the api package for the question answering api
//===============REQ FOR MASHAPE API ========================
var unirest = require('unirest');


var _ = require('underscore');
var express = require("express");
app = express();
//the following tells express to use ejs to render views
app.set("view engine", "ejs");
app.use(express.static(__dirname + '/public'));

//===========================================================

app.get("/", function(req, res){

  res.render("landpage");

});


app.get("/home", function(req, res){
  
  res.render("index");
  
});


app.get("/go", function(req, res){
  
  var val = req.query.search;
  // console.log(val);
  var tokenstem = val.tokenizeAndStem();
  console.log(tokenstem);
  res.send(tokenstem);
});


app.get("/search", function(req, res){
  var question = req.query.search;
  unirest.get("https://siris.p.mashape.com/json?clientFeatures=all&input=" + question + "&locale=en&timeZone=%2B120")
  .header("X-Mashape-Key", "MQPalSdM4lmshvpdJzl5GExkJExnp1S0q6xjsn0JlgNq889sAS")
  .header("Accept", "application/json")
  .end(function (result) {
    // console.log(result.status, result.headers, result.body);
    // console.log(result.output);
    var answer = result;
    res.send(answer);
  });
  
});

app.get("/yoda", function(req, res){
  var statement = req.query.search;
  unirest.get("https://yoda.p.mashape.com/yoda?sentence=" + statement + "%3F")
  .header("X-Mashape-Key", "PGgxm8hbrhmshCXHXt067DSORcunp1Sni55jsnYozgx4fqt2vc")
  .header("Accept", "text/plain")
  .end(function (result) {
    console.log(result.status, result.headers, result.body);
    var translation = result;
    res.send(translation);
  });
});

app.get("/dictionary", function(req, res){
  var word = req.query.search;
  unirest.get("https://montanaflynn-dictionary.p.mashape.com/define?word="+ word)
  .header("X-Mashape-Key", "PGgxm8hbrhmshCXHXt067DSORcunp1Sni55jsnYozgx4fqt2vc")
  .header("Accept", "application/json")
  .end(function (result) {
    console.log(result.status, result.headers, result.body);
    var definition = result;
    res.send(definition);
  });
});

app.get("/lyrics", function(req, res){
  var artistSong = req.query.artistSong;
  var artist = artistSong[0];
  var song = artistSong[1];
  console.log(artist, song);
  unirest.get("https://musixmatchcom-musixmatch.p.mashape.com/wsr/1.1/matcher.lyrics.get?q_artist=" + artist + "&q_track=" + song)
    .header("X-Mashape-Key", "PGgxm8hbrhmshCXHXt067DSORcunp1Sni55jsnYozgx4fqt2vc")
    .header("Accept", "application/json")
    .end(function (result) {
      console.log(result);
      console.log(result.status, result.headers, result.body);
      var lyrics = result;
      res.send(lyrics);
    });
 
});

//SETS THE PORT 
app.listen(process.env.PORT || 1337, function(){
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