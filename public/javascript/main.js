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
    console.log(INPUT);
    INPUT.forEach(function(element) {
      console.log(element);
      for(var i=0;i<arrayList.length;i++) {
        for(var j=0;j<arrayList[i].length;j++) {
        // console.log("hi", arrayList[i][j], arrayList);
          if(arrayList[i][j] === element) {
            console.log(i, j, arrayList[i], arrayList[i][j]);
            $matchedWord = arrayList[i][j];

            if(i === 0) {
                console.log("keyword array");
                console.log(arrayList[i][j], arrayList[i][2]);
                console.log(INPUT[i+1], INPUT[i+2], INPUT[i+3], INPUT[i+4]);
                $searchWord1 = INPUT[i+1];
                $searchWord2 = INPUT[i+2];
                $searchWord3 = INPUT[i+3];
                $searchWord4 = INPUT[i+4];
              KEYWORD();
            } else if (i === 1){
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
    }); //END OF FOREACH ITERATOR
    eyeOn();
  }
}); //END OF SUBMIT FUNCTION
//=================================================================


//KEYWORD CONDITIONALS
//=================================================================
function KEYWORD() {
    if ($matchedWord === "flick") {
      
      if ($searchWord4 !== undefined) {
        console.log("FOURTH WORD" + " " + $searchWord4);
        var filmInput4 = $searchWord1 + " " + $searchWord2 + " " + $searchWord3 + " " + $searchWord4;
        searchOmdb(filmInput4);
        console.log(filmInput4 );
      } else if ($searchWord3 !== undefined) {
        console.log("THIRD WORD" + " " + $searchWord3);
        var filmInput3 = $searchWord1 + " " + $searchWord2 + " " + $searchWord3;
        searchOmdb(filmInput3);
      } else if ($searchWord2 !== undefined) {
        console.log("SECOND WORD" + " " + $searchWord2);
        var filmInput2 = $searchWord1 + " " + $searchWord2;
        searchOmdb(filmInput2);
      } else {
      console.log("do function with" + " " + $searchWord1);
      var filmInput = $searchWord1;
      searchOmdb(filmInput);
      }
    }//END OF FILM CONDITIONS

    if ($matchedWord === "answer") {
      if ($searchWord4 !== undefined) {
        console.log("FOURTH WORD" + " " + $searchWord4);
        var questionInput4 = $searchWord1 + " " + $searchWord2 + " " + $searchWord3 + " " + $searchWord4;
        searchQuestion(questionInput4);
      } else if ($searchWord3 !== undefined) {
        console.log("THIRD WORD" + " " + $searchWord3);
        var questionInput3 = $searchWord1 + " " + $searchWord2 + " " + $searchWord3;
        searchQuestion(questionInput3);
      } else if ($searchWord2 !== undefined) {
        console.log("SECOND WORD" + " " + $searchWord2);
        var questionInput2 = $searchWord1 + " " + $searchWord2;
        searchQuestion(questionInput2);
      } else {
        console.log("do function with" + " " + $searchWord1);
        var questionInput = $searchWord1;
        searchQuestion(questionInput);
      }
    }

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
  }
function greeting() {
    $("#reply").append($('<li>').text('YO, wassup?'));
  }
function identify() {
    $("#reply").append($('<li>').text('I am J.S.A.I.N, the JavaScript Artificial Intelligence Network'));
  }
function reply() {
   $("#reply").append($('<li>').text('lame...'));
  }
function goodbye() {
   $("#reply").append($('<li>').text('PEACE!'));
  }
function insult() {
    $("#reply").append($('<li>').text('you are' + ' ' + $matchedWord));
  }
//=================================================================


//EXTERNAL API CALLS
//================================================================
//CALL TO OMDB API
function searchOmdb(input) {
  $.getJSON("http://www.omdbapi.com/", {s:input}, function (data) {
        // var $results = $("#results").empty();
        if (data.Error) {
          $("#reply").append($('<li>').text('I do not know that one!'));
          // $results.html("No results found.");
        } else {
          data.Search.forEach(function (movie) {
            $("#reply").append($('<li>').text(movie.Title));
            // var li = $("<li></li>").text(movie.Title);
            // $results.append(li);
          });
        }
      });
}
function searchQuestion(input) {
  unirest.get("https://webknox-question-answering.p.mashape.com/questions/quickAnswers?question=" + input)
  .header("X-Mashape-Key", "MQPalSdM4lmshvpdJzl5GExkJExnp1S0q6xjsn0JlgNq889sAS")
  .header("Accept", "application/json")
  .end(function (result) {
    console.log(result.status, result.headers, result.body);
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




