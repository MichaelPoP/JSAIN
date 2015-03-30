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


keywords = ['define', 'find', 'show'];
greetings = ['hello', 'hi', 'yo'];
goodbyes = ['goodbye', 'later', 'bye'];
insults = ['boring', 'stupid', 'lam'];
arrayList = [keywords, greetings, goodbyes, insults];
 var INPUT;

$("#commForm").submit(function(e){

  e.preventDefault();
// var soconfused = function () {
  var origINPUT = { search: $("#command").val() };
  $.get( '/go', origINPUT, function(data) {
    console.log(data);
    INPUT = data;
    inputReady(INPUT);
  });
// return INPUT;
// }();

  //ORIGINAL INPUT FORMAT
  //=======================
   // var INPUT = $("#command").val().split(" ");
  //=======================
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
                console.log(INPUT[i+1], INPUT[i+2]);
                $searchWord1 = INPUT[i+1];
                $searchWord2 = INPUT[i+2];
                $searchWord3 = INPUT[i+3];
              KEYWORD();
            } else if (i === 1){
                console.log("greeting array");
              greeting(); 
            } else if (i === 2){
              // var insultReply = arrayList[i][j];
              console.log("goodbye array");
              goodbye();

            } else if (i === 3) {
              console.log("insult array");
              insult();
            }
        
        }  
          
        
      }
    }
  }); //END OF FOREACH ITERATOR
}
}); //END OF SUBMIT FUNCTION


function KEYWORD() {
   if ($matchedWord === "find") {
     console.log("do function with" + " " + $searchWord1);
    var userInput = $searchWord1;
    searchOmdb(userInput);

     if ($searchWord2 !== undefined) {
      console.log("SECOND WORD" + $searchWord2);
    var userInput2 = $searchWord1 + " " + $searchWord2;
    searchOmdb(userInput2);
     }
   }
}

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





$(document).ready(function(){
  $('#myModal').on('shown.bs.modal', function () {
    $('#myInput').focus();
  });
});







