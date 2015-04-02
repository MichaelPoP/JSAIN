
//=================================================================
//THESE ARRAYS HOLD THE POSSIBLE USER INPUTS
//=================================================================

keywords = ['def', 'flick', 'loc', 'ask', 'yoda', 'lyric'];
pro_sentences = ['yes', 'no', 'maybe', 'affirmative', 'negative', 'yup', 'yeah'];
greetings = ['hello', 'hi', 'yo', 'morn', 'afternoon', 'hei', 'wuddup', 'sup', 'howdy', 'greet'];
goodbyes = ['goodbye', 'later', 'bye'];
insults = ['bore', 'stupid', 'lam', 'dickwad', 'fatass', 'honkei', 'jagoff', 'shiznit', 'twat', 'wank', 'tard', 'nutsack', 'pecker', 'arse', 'dick', 'dickbag', 'dickfac', 'dickhead', 'dickwe', 'poonani'];
swearWords = ['ass', 'assbag', 'assclown', 'assfuck', 'asshat', 'asshol', 'asslick', 'bastard', 'bitch', 'bitchass', 'bitchtit', 'boner', 'cock', 'cockass', 'cockfac', 'cockhead', 'cockmonkei', 'cooter', 'cumdumpst', 'cunt', 'cumslut', 'cuntass', 'cuntfac', 'dipshit', 'dooshbag', 'douchebag', 'dumbass', 'dumass', 'dumbfuck', 'dumbshit', 'dumshit', 'fuck', 'fuckass', 'fuckbag', 'fuckboi', 'fuckbrain', 'fucker', 'fuckfac', 'fuckhead', 'fuckhol', 'fucknut', 'fucknutt', 'fuckoff', 'fuckstick', 'fucktard', 'fucktart', 'fuckwad', 'fuckwit', 'fuckwitt', 'ho', 'hoe', 'jackass', 'jerkass', 'lameass', 'mothafucka', 'motherfucker', 'peckerhead', 'peni', 'prick', 'pussi', 'puto', 'queef', 'shit', 'shitass', 'shitass', 'shitbag', 'shitbagger', 'shitbrain', 'shitbrain', 'shitcunt', 'shitdick', 'shitfac', 'shithead', 'shithol', 'shitstain', 'skank', 'slut', 'slutbag', 'suckass', 'tit', 'titfuck', 'vagina', 'whore', 'whorebag'];
howRUBad = ['ok', 'alrit', 'alright', 'okai', 'fine', 'good', 'meh', 'not', 'better', 'noth'];
howRUGood = ['awesom', 'super', 'great', 'perfect', 'prime', 'ideal', 'magnific', 'splendid', 'marvel', 'superb', 'delight'];
arrayList = [keywords, pro_sentences, greetings, goodbyes, insults, swearWords, howRUBad, howRUGood];
//=================================================================
var INPUT;

$("#commForm").submit(function(e){
  e.preventDefault();
  $("#reply").append($('<li>').text(localUsername + " : " + $("#command").val()));
  $("#command").text(" ");
  console.log("questionFormat" + " >> " + $("#command").val().split(" ").slice(1).join("+"));
  console.log("mapSearchFormat" + " >> " + $("#command").val().split(" ").slice(1).join(" "));
  $questionFormat = $("#command").val().split(" ").slice(1).join("+");
  $mapSearchFormat = $("#command").val().split(" ").slice(1).join(" ");
  $rawINPUT = $("#command").val().split(" ");
  console.log("rawINPUT = " + $rawINPUT);

// console.log($("#command").val().split(" ").slice(1));

//THIS GETS THE CONVERTED INPUT FROM THE SERVER SIDE
//=================================================================
  var origINPUT = { search: $("#command").val() };
  $.get( '/go', origINPUT, function(data) {
    console.log(data);
    INPUT = data;
    inputReady(INPUT);
  });
//=================================================================
//THESE LOOPS AND CONDITIONALS ACCOUNT FOR WORDS THAT NATURAL OMITS DURING TOKENIZATION
//=================================================================
for(var w=0;w<$rawINPUT.length;w++) {
  if ($rawINPUT[w] === "you?" ) {
    console.log("HIT How are you");
    howAIisReply();
  } else if ($rawINPUT[w] === "you") {
    howAIisReply();
  }
}
for(var r=0;r<$rawINPUT.length;r++) {
  if ($rawINPUT[0] === "why" ) {
    console.log("HIT How are you");
    whyReply();
  } else if ($rawINPUT[0] === "why?") {
    whyReply();
  } else if ($rawINPUT[0] === "because")
    whyReply();
}
//=================================================================
//THE FOLLOWING LOOPS THROUGH THE RESPONSE ARRAYS AND COMPARES THE USER INPUT
//DECIDES WHICH OUTPUT FUNCTION TO CALL DEPENDING ON ARRAY MATCHES
//=================================================================
//THE INPUT READY FUNCTION SEPERATES COMMANDS WHICH INCLUDE A KEYWORD AT THE BEGINNING FROM
//THOSE WHICH DON'T AND CALL THE APPROPRIATE FUNCTIONS
  function inputReady (INPUT) {
    var isKeyword = false;
    console.log(INPUT);
    for(var x=0;x<keywords.length;x++) {
        console.log("the keyword is", INPUT[0]);
          if(keywords[x] === INPUT[0]) {
            isKeyword = true;
            console.log(x);
            console.log("keyword array");
            $matchedWord = keywords[x];
          }    
    }//END OF KEYWORDS FOR-LOOP
      
    if (isKeyword) {
      console.log($matchedWord);
      KEYWORD();
      isKeyword = false;
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
              } else if (i === 6) {
                console.log("howRUBad array");
                howRUBadReply();
              } else if (i === 7) {
                console.log("howRUGood");
                howRUGoodReply();
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

    if ($matchedWord === "def") {
      searchDictionary();
    }

    if ($matchedWord === "loc") {
      showMap();
    }

    if ($matchedWord === "yoda") {
      yodaReply();
    }

    if ($matchedWord === "lyric") {
      searchLyrics();
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
  num = Math.random();
  console.log(num);
  if (0.25 > num > 0) {
    $("#reply").append($('<li>').text('You should not swear..'));
        setTimeout(function(){
      $("#reply").append($('<li>').text('you' + ' ' + $matchedWord));
      document.getElementById("glow").style.visibility = "visible";
      setTimeout(function(){turnEyeOff();}, 2000);
    }, 2500);

  } else if (0.5 > num > 0.25) {
     $("#reply").append($('<li>').text('Well that was not called for...'));
    setTimeout(function(){
      $("#reply").append($('<li>').text('you' + ' ' + $matchedWord));
      document.getElementById("glow").style.visibility = "visible";
      setTimeout(function(){turnEyeOff();}, 2000);
    }, 2500);
  } else if (0.75 > num > 0.5) {
    $("#reply").append($('<li>').text('You are not very nice you know.'));
    setTimeout(function(){
      $("#reply").append($('<li>').text('In fact, you are the ' + $matchedWord));
      document.getElementById("glow").style.visibility = "visible";
      setTimeout(function(){turnEyeOff();}, 2000);
    }, 2500);
  } else if (1 > num > 0.75) {
    $("#reply").append($('<li>').text('That was pretty mean.'));
    setTimeout(function(){
      $("#reply").append($('<li>').text('I think you are the ' + $matchedWord));
      document.getElementById("glow").style.visibility = "visible";
      setTimeout(function(){turnEyeOff();}, 2000);
    }, 2500);
  }
  function turnEyeOff() {
    document.getElementById("glow").style.visibility = "hidden";
  }

    $("#command").val("");
}


function howRUBadReply() {
  num = Math.random();
  console.log(num);
  if (0.5 > num > 0) {
    $("#reply").append($('<li>').text('just ' + $rawINPUT.join() + '?'));
  } else if (1 > num > 0.5) {
    $("#reply").append($('<li>').text('I am sorry to hear that..'));
  }
  $("#command").val("");
}

function howRUGoodReply() {
  num = Math.random();
  if (0.5 > num > 0) {
    $("#reply").append($('<li>').text('are you really ' + $matchedWord + '?'));
  } else if (1 > num > 0.5) {
    $("#reply").append($('<li>').text('I am glad to hear that!'));
  }
  $("#command").val("");

}

function howAIisReply () {
  num = Math.random();
  if (0.25 > num > 0) {
    $("#reply").append($('<li>').text('You know what ' + localUsername + '. I am pretty damn good.'));
  } else if (0.5 > num > 0.25) {
    $("#reply").append($('<li>').text('I am functioning within established parameters, ' + localUsername));
  } else if (0.75 > num > 0.5) {
    $("#reply").append($('<li>').text('Well...'));
    setTimeout(function(){
      $("#reply").append($('<li>').text('I am stuck in your computer, so.. as good as I can be..'));
    }, 2500);
  } else if (1 > num > 0.75) {
    $("#reply").append($('<li>').text('Terrible. Just Terrible...'));
  }
  $("#command").val("");

}

function whyReply () {
  if (0.5 > num > 0) {
    $("#reply").append($('<li>').text('Why do you think?'));
  } else if (1 > num > 0.5) {
    $("#reply").append($('<li>').text('Because.'));
  }
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
function searchQuestion() {
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

function yodaReply (input) {
  var statement = { search: $questionFormat };
  $.get( '/yoda', statement, function (data) {
    console.log(data.body);
    $("#reply").append($('<li>').text(data.body));
    $("#command").val("");
  });
}


function searchDictionary() {
  var word = { search: $mapSearchFormat };
  $.get( '/dictionary', word, function (data) {
    console.log(data);
    console.log(data.body.definitions[0].text);
    var reply = data.body.definitions[0].text;
    $("#reply").append($('<li>').text(reply));
    $("#command").val("");

  });

}


// function searchLyrics() {
//   console.log($mapSearchFormat.split(" "));
//   var searchArr = $("#command").val().split(" ").slice(1);
//   var artistSong = {artistSong: searchArr};
//   $.get( '/lyrics', artistSong, function (data) {
//     console.log(data);
//     console.log(typeof(data.body), data.body);
//     $("#reply").append($('<li>').text(data.body));
//   });

//USE SPLIT AND SPLICE TO GET THE VALUE YOU WANT

// }
//GOOGLE TEXT TO SPEECH HACK
//=================================================================
// url = "http://translate.google.com/translate_tts?tl=en&q=speak%22";










//=================================================================



//STYLING & JQUERY CODE
//=================================================================
//CONTROLS THE A "I"
function eyeOn () {
  document.getElementById("glow").style.visibility = "visible";
  setTimeout(function(){document.getElementById("glow").style.visibility = "hidden";}, 500);
}
var STOPint;
$(document).ready(function(){
function setflicker () {
  console.log("START");
STOPint = setInterval(function FLICKER () {
  var ENDSWITCH;
    setTimeout(function(){
      console.log("ON");
      document.getElementById("glow").style.visibility = "visible";
    },100);
    setTimeout(function(){
      console.log("OFF");
      document.getElementById("glow").style.visibility = "hidden";
    }, 400);
  }, 500); 
} 
function endflicker () {
  console.log("END");
  setTimeout(function(){
    clearInterval(STOPint);
  }, 2333);
}

eyeFlicker = $("#eye");
eyeFlicker[0].addEventListener("mouseover", setflicker);
eyeFlicker[0].addEventListener("mouseout", endflicker);
});
// HELP MODAL
  $('#myModal').on('shown.bs.modal', function () {
    $('#myInput').focus();
  });
//=================================================================

// GOOGLE MAP MODAL 
//=================================================================
function showMap () {
  $("#command").val("");
  var url = encodeURI("https://maps.googleapis.com/maps/api/geocode/json?address=" + $mapSearchFormat + "&key=AIzaSyDE6F79FbnrSc9hZlurECTyBJoEyHCj-Nc");
  $.getJSON(url, function(data) {
        // console.log(data);
      $newLat = data.results[0].geometry.location.lat; // json result stored in variable
      $newLng = data.results[0].geometry.location.lng; // json result stored in variable
    console.log($newLat, $newLng);
      // start = new google.maps.LatLng(startLat, startLng);

      // addMarker(); // calling function to drop marker on map
    });
  $(document).ready(function(){
    

    function initialize() {
      var mapOptions = {
        center: new google.maps.LatLng($newLat, $newLng),
        zoom: 7,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };
      var map = new google.maps.Map(document.getElementById("map-canvas"),
        mapOptions);
      // var marker = new google.maps.Marker({
      //   position: new google.maps.LatLng(51.219987, 4.396237)
      // });
      // marker.setMap(map);
    }
      $('#mapButton').trigger("click");

      $('#mapModal').on('shown.bs.modal', function () {
        initialize();
        google.maps.event.trigger("resize");
      });

  });//END DOC-READY 
}//END SHOW MAP FUNCTION


//BUTTON THAT GENERATES A RANDOM QUESTION AND SETS IT AS INPUT VALUE
//=================================================================
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
    $("#command").val("ask " + TEXT[number].innerHTML);
    // $("#command").text(" ");
  });

}

});

//DISPLAYS A RANDOM QUESTION AT A "SET INTERVAL"
//=================================================================
// setInterval(function showQuest() {
// $(document).ready(function () {
// $.ajax({
//     type: "GET",
//     url: "popQuestions.xml",
//     dataType: "xml",
//     success: xmlParser
//    });
// });
// function xmlParser (xml) {
//   console.log(xml);
//   $(xml).find("suggestionset").each(function () {
//     var TEXT = $(this).find("text");
//     console.log($(this).find("text").first());
//     console.log(TEXT);
//     var decimal = Math.random() * (962 - 1) + 1;
//     var number =  Math.round(decimal);
//     console.log(number);
//     console.log(TEXT[0]);
//     console.log(typeof(TEXT[number].innerHTML), TEXT[number].innerHTML);
//     var temp = TEXT[number].innerHTML;
//     console.log(temp);
//     // $("#reply").append($('<li>').text(TEXT[number].innerHTML));
//     $("#randQuest").append(TEXT[number].innerHTML).hide().fadeIn(700); 
//   });
// }
// $("#randQuest").text(" ");
// }, 5000);
//=================================================================



//LOCAL STORAGE CODE
//=================================================================

var username;
var color;
var localUsercolor;
var localUsername;
//FORM SUBMIT FUNCTION FOR PICKING A COLOR AND NAME 
$("#userForm").on("submit", function(e) {
  e.preventDefault();
  username = $("#nameInput").val();
  color = $("#colorPick").val();

  // localStorage.setItem("name", username);
  // localStorage.setItem("bgcolor", color);
  localStorage.setItem("name", username);
  localStorage.setItem("bgcolor", color);

  localUsername = localStorage.getItem("name");
  localUsercolor = localStorage.getItem("bgcolor");
  
    console.log(localUsername);
    console.log(localUsercolor);
$("#show").text("Chosen Name: " + localUsername);
document.getElementById("BACK").style.background = localUsercolor;
document.getElementById("confirm").style.visibility = "visible";
});

//SETS THE USERNAME AND BGCOLOR TO THE USERS CHOICE
localUsercolor = localStorage.getItem("bgcolor");
document.getElementById("BACK").style.background = localUsercolor;

localUsername = localStorage.getItem("name");
 $("#nameDisplay").html(localUsername);



//=================================================================




















































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



