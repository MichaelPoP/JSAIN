// var natural = require('natural'),
// tokenizer = new natural.WordTokenizer();

//THIS IS WHAT I WOULD LIKE TO USE!!!
   //=================================
   // var INPUTtoken = tokenizer.tokenize(INPUT);
   // console.log(INPUTtoken);
   //=================================

// for(var x=0;x<INPUT.length;x++){
//   console.log(INPUT[x]);
//      checkArrays(INPUT[x]);
// }
//=================================================================
//THESE ARRAYS HOLD THE POSSIBLE USER INPUTS
//=================================================================
symbols = ['!', '?', '/'];
keywords = ['define', 'flick', 'find', 'answer'];
greetings = ['hello', 'hi', 'yo'];
goodbyes = ['goodbye', 'later', 'bye'];
insults = ['boring', 'stupid', 'lam'];
arrayList = [keywords, symbols, greetings, goodbyes, insults];
//=================================================================
var INPUT;

$("#commForm").submit(function(e){

  e.preventDefault();
console.log($("#command").val().split(" ").slice(1).join("+"));
$questionFormat = $("#command").val().split(" ").slice(1).join("+");

//THIS GETS THE CONVERTED INPUT FROM THE SERVER SIDE
//=================================================================
  var origINPUT = { search: $("#command").val() };
  $.get( '/go', origINPUT, function(data) {
    console.log(data);
    INPUT = data;
    inputReady(INPUT);
  });
//=================================================================

  //ORIGINAL INPUT FORMAT
  //=======================
   // var INPUT = $("#command").val().split(" ");
  //=======================

//=================================================================
//THE FOLLOWING LOOPS THROUGH THE RESPONSE ARRAYS AND COMPARES THE USER INPUT
//DECIDES WHICH OUTPUT FUNCTION TO CALL DEPENDING ON ARRAY MATCHES
//=================================================================

  function inputReady (INPUT) {
    var anything = false;
    console.log(INPUT);
    for(var x=0;x<keywords.length;x++) {
        console.log("the keyword is", INPUT[0]);
          if(keywords[x] === INPUT[0]) {
            anything = true;
            console.log(x);
            console.log("keyword array");
            $matchedWord = keywords[x];
          }    
    }//END OF KEYWORDS FOR-LOOP
      
    if (anything) {
      console.log($matchedWord);
      KEYWORD();
    } else {
      INPUT.forEach(function(element) {
      for(var i=0;i<arrayList.length;i++) {
        for(var j=0;j<arrayList[i].length;j++) {
        // console.log("hi", arrayList[i][j], arrayList);

          if(arrayList[i][j] === element) {
            console.log(i, j, arrayList[i], arrayList[i][j]);
            $matchedWord = arrayList[i][j];

            if (i === 1){
              console.log("symbol array");
              symbol(); 
            } else if (i === 2){
              // var insultReply = arrayList[i][j];
               console.log("greeting array");
              greeting();

            } else if (i === 3) {
              console.log("goodbye array");
              goodbye();
            } else if (i === 4) {
              console.log("insult array");
              insult();
            }
          }     
        }
      }
    }); 
    }
    
      
     //END OF FOREACH ITERATOR
    eyeOn();
  }
}); //END OF SUBMIT FUNCTION
//=================================================================


//KEYWORD CONDITIONALS
//=================================================================
function KEYWORD() {
    if ($matchedWord === "flick") {
      searchOmdb();
      // if ($searchWord4 !== undefined) {
      //   console.log("FOURTH WORD" + " " + $searchWord4);
      //   var filmInput4 = $searchWord1 + " " + $searchWord2 + " " + $searchWord3 + " " + $searchWord4;
      //   searchOmdb(filmInput4);
      //   console.log(filmInput4 );
      // } else if ($searchWord3 !== undefined) {
      //   console.log("THIRD WORD" + " " + $searchWord3);
      //   var filmInput3 = $searchWord1 + " " + $searchWord2 + " " + $searchWord3;
      //   searchOmdb(filmInput3);
      // } else if ($searchWord2 !== undefined) {
      //   console.log("SECOND WORD" + " " + $searchWord2);
      //   var filmInput2 = $searchWord1 + " " + $searchWord2;
      //   searchOmdb(filmInput2);
      // } else {
      //   console.log("do function with" + " " + $searchWord1);
      //   var filmInput = $searchWord1;
      //   searchOmdb(filmInput);
      // }
    }//END OF FILM CONDITIONS

    if ($matchedWord === "answer") {
      searchQuestion();
    }//END OF SEARCH ANSWER

}//END OF KEYWORD FUNCTION
//=================================================================



//SYMBOL CONDITIONALS
//=================================================================
function symbol() {
  console.log("IS IT HERE?");
    if ($matchedWord === "answer") {
      if ($searchWord4 !== undefined) {
        console.log("FOURTH WORD" + " " + $searchWord4);
        var filmInput4 = $searchWord1 + " " + $searchWord2 + " " + $searchWord3 + " " + $searchWord4;
        searchQuestion(filmInput4);
        console.log(filmInput4 );
      } else if ($searchWord3 !== undefined) {
        console.log("THIRD WORD" + " " + $searchWord3);
        var filmInput3 = $searchWord1 + " " + $searchWord2 + " " + $searchWord3;
        searchQuestion(filmInput3);
      } else if ($searchWord2 !== undefined) {
        console.log("SECOND WORD" + " " + $searchWord2);
        var filmInput2 = $searchWord1 + " " + $searchWord2;
        searchQuestion(filmInput2);
      } else {
        console.log("do function with" + " " + $searchWord1);
        var filmInput = $searchWord1;
        searchQuestion(filmInput);
      }
    }
    

}



//=================================================================

//REPLY FUNCTIONS
//=================================================================
function noCompute() {
    $("#reply").append($('<li>').text('do not understand'));
    $("#command").val("");
  }
function greeting() {
    $("#reply").append($('<li>').text('YO, wassup?'));
    $("#command").val("");
  }
function identify() {
    $("#reply").append($('<li>').text('I am J.S.A.I.N, the JavaScript Artificial Intelligence Network'));
    $("#command").val("");
  }
function reply() {
   $("#reply").append($('<li>').text('lame...'));
   $("#command").val("");
  }
function goodbye() {
   $("#reply").append($('<li>').text('PEACE!'));
   $("#command").val("");
  }
function insult() {
    $("#reply").append($('<li>').text('you are' + ' ' + $matchedWord));
    $("#command").val("");
  }
//=================================================================


//EXTERNAL API CALLS
//================================================================
//CALL TO OMDB API
function searchOmdb(input) {
  $.getJSON("http://www.omdbapi.com/", {t: $questionFormat}, function (data) {
        // var $results = $("#results").empty();
        console.log(data);
        if (data.Error) {
          $("#reply").append($('<li>').text('I do not know that one!'));
          // $results.html("No results found.");
        } else {
          $("#reply").append($('<li>').text(data.Title + " , " + data.Plot));
          // data.Search.forEach(function (movie) {
          //   console.log(movie);
          //   $("#reply").append($('<li>').text(movie.Title));
          //   $("#command").val("");
          // });
        }
      });
}

//CALL TO QUESTION/ ANSWER API
function searchQuestion(input) {
 var QUESTION = { search: $questionFormat };
  $.get( '/search', QUESTION, function (data) {
    console.log(data);
    console.log(data.body.output[0].actions.say);
    var reply = data.body.output[0].actions.say.text;
    // for(var key in reply){
    //   ANSWER = reply[key];
    //   console.log(ANSWER);
    // }
      
      $("#reply").append($('<li>').text(reply));
      $("#command").val("");
    
    // ANSWER = $value;
    // console.log(ANSWER);
  });
}
//=================================================================



//FRONT END CODE
//=================================================================
function eyeOn () {
  document.getElementById("glow").style.visibility = "visible";
  setTimeout(function(){document.getElementById("glow").style.visibility = "hidden";}, 500);
}

$(document).ready(function(){
  $('#myModal').on('shown.bs.modal', function () {
    $('#myInput').focus();
  });
});


//=================================================================




