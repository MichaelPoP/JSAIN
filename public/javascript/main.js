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

keywords = ['define', 'flick', 'find', 'ask'];
symbols = ['!', '?', '/'];
greetings = ['hello', 'hi', 'yo'];
goodbyes = ['goodbye', 'later', 'bye'];
insults = ['bore', 'stupid', 'lam', 'dickwad', 'fatass', 'honkei', 'jagoff', 'shiznit', 'twat', 'wank', 'tard', 'nutsack', 'pecker', 'arse', 'dick', 'dickbag', 'dickfac', 'dickhead', 'dickwe', 'poonani'];
swearWords = ['ass', 'assbag', 'assclown', 'assfuck', 'asshat', 'asshol', 'asslick', 'bastard', 'bitch', 'bitchass', 'bitchtit', 'boner', 'cock', 'cockass', 'cockfac', 'cockhead', 'cockmonkei', 'cooter', 'cumdumpst', 'cunt', 'cumslut', 'cuntass', 'cuntfac', 'dipshit', 'dooshbag', 'douchebag', 'dumbass', 'dumass', 'dumbfuck', 'dumbshit', 'dumshit', 'fuck', 'fuckass', 'fuckbag', 'fuckboi', 'fuckbrain', 'fucker', 'fuckfac', 'fuckhead', 'fuckhol', 'fucknut', 'fucknutt', 'fuckoff', 'fuckstick', 'fucktard', 'fucktart', 'fuckwad', 'fuckwit', 'fuckwitt', 'ho', 'hoe', 'jackass', 'jerkass', 'lameass', 'mothafucka', 'motherfucker', 'peckerhead', 'peni', 'prick', 'pussi', 'puto', 'queef', 'shit', 'shitass', 'shitass', 'shitbag', 'shitbagger', 'shitbrain', 'shitbrain', 'shitcunt', 'shitdick', 'shitfac', 'shithead', 'shithol', 'shitstain', 'skank', 'slut', 'slutbag', 'suckass', 'tit', 'titfuck', 'vagina', 'whore', 'whorebag'];
arrayList = [keywords, symbols, greetings, goodbyes, insults, swearWords];
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
              } else if (i === 5) {
                console.log("swearWords array");
                curses();
              } else if (arrayList[i][j] !== element) {
                noCompute();
              }
            }

          }//INNER ARRAY LOOP
        }//OUTER ARRAY LOOP
      }); //END OF FOREACH ITERATOR
    }//END OF ELSE
    eyeOn();//OVERRIDES STYLING
  }//END OF INPUT READY FUNCTION
}); //END OF SUBMIT FUNCTION
//=================================================================


//KEYWORD CONDITIONALS
//=================================================================
function KEYWORD() {
    if ($matchedWord === "flick") {
      searchOmdb();
    }//END OF FILM CONDITIONS

    if ($matchedWord === "ask") {
      searchQuestion();
    }//END OF SEARCH ANSWER

    if ($matchedWord === "define") {
      searchDictionary();
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
  num = Math.random();
    $("#reply").append($('<li>').text('do not understand'));
    $("#command").val("");
}
function greeting() {
  num = Math.random();
  if (num > 0.5) {
    $("#reply").append($('<li>').text('Hello. How are you?'));
  } else if (num < 0.5) {
    $("#reply").append($('<li>').text('WASSUPPP?'));
  }
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
  num = Math.random();
  if (0.1 > num > 0) {
    $("#reply").append($('<li>').text('Goodbye human.'));
  } else if (0.2 > num > 0.1) {
    $("#reply").append($('<li>').text('Live Long and Prosper.'));
  } else if (0.3 > num > 0.2) {
    $("#reply").append($('<li>').text('Peace!'));
  } else if (0.4 > num > 0.3) {
    $("#reply").append($('<li>').text('Bye Bye.'));
  } else if (0.5 > num > 0.4) {
    $("#reply").append($('<li>').text('Have a good one!'));
  } else if (0.6 > num > 0.5) {
    $("#reply").append($('<li>').text('Take it easy.'));
  } else if (0.7 > num > 0.6) {
    $("#reply").append($('<li>').text('Ok..fine..leave me.'));
  } else if (0.8 > num > 0.7) {
    $("#reply").append($('<li>').text('You best come back now.'));
  } else if (0.9 > num > 0.8) {
    $("#reply").append($('<li>').text('There is no goodbye.'));
  } else if (1 > num > 0.9) {
    $("#reply").append($('<li>').text('Late.'));
  }
   
   $("#command").val("");
}
function insult() {
    $("#reply").append($('<li>').text('you are' + ' ' + $matchedWord));
    $("#command").val("");
}
function curses() {
    $("#reply").append($('<li>').text('You should not swear..'));
    // document.getElementById("glow").style.visibility = "visible";
    setTimeout(function(){
      $("#reply").append($('<li>').text('you' + ' ' + $matchedWord));
      document.getElementById("glow").style.visibility = "visible";
    }, 2500);
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
          $("#command").val("");
          // $results.html("No results found.");
        } else {
          $("#reply").append($('<li>').text(data.Title + " , " + data.Plot));
          $("#command").val("");
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

function searchDictionary() {

}
//=================================================================



//STYLING CODE
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

 // setInterval(function showQuest() {

$('#questButton').click(function(e) {
e.preventDefault();
$(document).ready(function () {
$.ajax({
    type: "GET",
    url: "popQuestions.xml",
    dataType: "xml",
    success: xmlParser
   });
});
function xmlParser (xml) {
  console.log(xml);
  $(xml).find("suggestionset").each(function () {
    var TEXT = $(this).find("text");
    console.log($(this).find("text").first());
    console.log(TEXT);
    var decimal = Math.random() * (962 - 1) + 1;
    var number =  Math.round(decimal);
    console.log(number);
    console.log(TEXT[0]);
    console.log(typeof(TEXT[number].innerHTML), TEXT[number].innerHTML);
    var temp = TEXT[number].innerHTML;
    console.log(temp);
    
    // console.log(this);
    // $("#reply").append($('<li>').text(TEXT[number].innerHTML));
    $("#command").text(TEXT[number].innerHTML);
    // $("#command").text(" ");
  });
}
});
// showQuest();

// }, 4000);







//THIS IS SOME LOGIC I DIDNT END UP NEEDING AFTER ALL
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



