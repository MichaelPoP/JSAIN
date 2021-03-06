
//=================================================================
//THESE ARRAYS HOLD THE POSSIBLE USER INPUTS
//=================================================================

keywords = ['def', 'flick', 'loc', 'ask', 'yoda', 'lyric'];
pro_sentences = ['ye', 'no', 'mayb', 'affirmative', 'negative', 'yup', 'yeah', 'nope'];
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
  function scrollDown () {
    var div = $("#replyBox");
    var textDiv = $("#replyH");
    div.scrollTop(textDiv.prop('scrollHeight'));
  }  
  scrollDown();

  e.preventDefault();
  $("#reply").append($('<li>').text(localUsername + " : " + $("#command").val()));
  $("#command").text(" ");
  console.log("questionFormat" + " >> " + $("#command").val().split(" ").slice(1).join("+"));
  console.log("mapSearchFormat" + " >> " + $("#command").val().split(" ").slice(1).join(" "));
  $questionFormat = $("#command").val().split(" ").slice(1).join("+");
  $mapSearchFormat = $("#command").val().split(" ").slice(1).join(" ");
  $rawINPUT = $("#command").val().split(" ");
  $plainTxtINPUT = $("#command").val();
  console.log("rawINPUT = " + $rawINPUT);


//THIS GETS THE CONVERTED INPUT FROM THE SERVER SIDE
//=================================================================
  var origINPUT = { search: $("#command").val() };
  $.get( '/go', origINPUT, function(data) {
    console.log(data);
    INPUT = data;
    inputReady(INPUT);
  });

  $.get( '/');
//=================================================================
//THESE LOOPS AND CONDITIONALS ACCOUNT FOR WORDS THAT NATURAL OMITS DURING TOKENIZATION
//=================================================================
var $isKeyword = false;
if ($isKeyword === false) {

//HOW ARE YOU VARIATIONS
  if ($plainTxtINPUT === "How are you?" ) {
    console.log("HIT How are you");
    howAIisReply();
  } else if ($plainTxtINPUT === "how are you") {
    howAIisReply();
  } else if ($plainTxtINPUT === "how are you?") {
    howAIisReply();
  } else if ($plainTxtINPUT === "how you doin") {
    howAIisReply();
  } else if ($plainTxtINPUT === "how you doing") {
    howAIisReply();
  } else if ($plainTxtINPUT === "how you doing?") {
    howAIisReply();
  } else if ($plainTxtINPUT === "how are you doing?") {
    howAIisReply();
  } else if ($plainTxtINPUT === "how are you doing") {
    howAIisReply();
  } else if ($plainTxtINPUT === "hows it with you?") {
    howAIisReply();
  } else if ($plainTxtINPUT === "how is it going?") {
    howAIisReply();
  } else if ($plainTxtINPUT === "how is it going") {
    howAIisReply();
  } else if ($plainTxtINPUT === "how are ya") {
    howAIisReply();
  } else if ($plainTxtINPUT === "how are ya?") {
    howAIisReply();
  }

//IDIOMS
  if ($plainTxtINPUT.indexOf("hot potato") != -1) {
    console.log("HIT hot potato");
    $idiom = "potato";
    idiomReplies();
  } else if ($plainTxtINPUT.indexOf("penny for your thoughts") != -1) {
    $idiom = "penny";
    idiomReplies();
  } else if ($plainTxtINPUT.indexOf("actions speak louder than words") != -1) {
    $idiom = "actions";
    idiomReplies();
  } else if ($plainTxtINPUT.indexOf("add insult to injury") != -1) {
    $idiom = "injury";
    idiomReplies();
  } else if ($plainTxtINPUT.indexOf("an arm and a leg") != -1) {
    $idiom = "armandleg";
    idiomReplies();
  } else if ($plainTxtINPUT.indexOf("at the drop of a hat") != -1) {
    $idiom = "drophat";
    idiomReplies();
  } else if ($plainTxtINPUT.indexOf("back to the drawing board") != -1) {
    $idiom = "drawing";
    idiomReplies();
  } else if ($plainTxtINPUT.indexOf("ball is in your court") != -1) {
    $idiom = "court";
    idiomReplies();
  } else if ($plainTxtINPUT.indexOf("barking up the wrong tree") != -1) {
    $idiom = "barktree";
    idiomReplies();
  } else if ($plainTxtINPUT.indexOf("beat around the bush") != -1) {
    $idiom = "beatbush";
    idiomReplies();
  } else if ($plainTxtINPUT.indexOf("best of both worlds") != -1) {
    $idiom = "bestworlds";
    idiomReplies();
  } else if ($plainTxtINPUT.indexOf("bite off more than you can chew") != -1) {
    $idiom = "bitechew";
    idiomReplies();
  } else if ($plainTxtINPUT.indexOf("blessing in disguise") != -1) {
    $idiom = "blessing";
    idiomReplies();
  } else if ($plainTxtINPUT.indexOf("burn the midnight oil") != -1) {
    $idiom = "midnightoil";
    idiomReplies();
  } else if ($plainTxtINPUT.indexOf("can\'t judge a book by it\'s cover") != -1) {
    $idiom = "bookcover";
    idiomReplies();
  } else if ($plainTxtINPUT.indexOf("cross that bridge when you come to it") != -1) {
    $idiom = "bridgecross";
    idiomReplies();
  } else if ($plainTxtINPUT.indexOf("cry over spilt milk") != -1) {
    $idiom = "spiltmilk";
    idiomReplies();
  } else if ($plainTxtINPUT.indexOf("cut corners") != -1) {
    $idiom = "cutcorners";
    idiomReplies();
  } else if ($plainTxtINPUT.indexOf("devil\'s advocate") != -1) {
    $idiom = "advocate";
    idiomReplies();
  } else if ($plainTxtINPUT.indexOf("don\'t count your chickens before they have hatched") != -1) {
    $idiom = "countchicks";
    idiomReplies();
  } else if ($plainTxtINPUT.indexOf("don\'t give up your day job") != -1) {
    $idiom = "dayjob";
    idiomReplies();
  } else if ($plainTxtINPUT.indexOf("don\'t put all of your eggs in one basket") != -1) {
    $idiom = "basket";
    idiomReplies();
  } else if ($plainTxtINPUT.indexOf("drastic times call for drastic measures") != -1) {
    $idiom = "drastic";
    idiomReplies();
  } else if ($plainTxtINPUT.indexOf("every cloud has a silver lining") != -1) {
    $idiom = "silverlining";
    idiomReplies();
  } else if ($plainTxtINPUT.indexOf("under the weather") != -1) {
    $idiom = "underweather";
    idiomReplies();
  } else if ($plainTxtINPUT.indexOf("give the benefit of the doubt") != -1) {
    $idiom = "benefitdoubt";
    idiomReplies();
  } else if ($plainTxtINPUT.indexOf("hit the nail on the head") != -1) {
    $idiom = "nailhead";
    idiomReplies();
  } else if ($plainTxtINPUT.indexOf("in the heat of the moment") != -1) {
    $idiom = "heatmoment";
    idiomReplies();
  }

  for(var r=0;r<$rawINPUT.length;r++) {
    if ($rawINPUT[0] === "why" ) {
      console.log("HIT How are you");
      whyReply();
    } else if ($rawINPUT[0] === "why?") {
      whyReply();
    } else if ($rawINPUT[0] === "because") {
      becauseReply();
    } else if ($rawINPUT[0] === "Because") {
      becauseReply();
    } else if ($rawINPUT[0] === "because.") {
      becauseReply();
    } else if ($rawINPUT[0] === "Because.") {
      becauseReply();
    }
  }
}
//=================================================================
//THE FOLLOWING LOOPS THROUGH THE RESPONSE ARRAYS AND COMPARES THE USER INPUT
//DECIDES WHICH OUTPUT FUNCTION TO CALL DEPENDING ON ARRAY MATCHES
//=================================================================
//THE INPUT READY FUNCTION SEPERATES COMMANDS WHICH INCLUDE A KEYWORD AT THE BEGINNING FROM
//THOSE WHICH DON'T AND CALL THE APPROPRIATE FUNCTIONS
  function inputReady (INPUT) {
  
    console.log(INPUT);
    for(var x=0;x<keywords.length;x++) {
        console.log("the keyword is", INPUT[0]);
          if(keywords[x] === INPUT[0]) {
            $isKeyword = true;
            console.log(x);
            console.log("keyword array");
            $matchedWord = keywords[x];
          }    
    }//END OF KEYWORDS FOR-LOOP
    
    if ($isKeyword) {
      console.log($matchedWord);
      KEYWORD();
      $isKeyword = false;
    } else {
      INPUT.forEach(function(element) {
        for(var i=0;i<arrayList.length;i++) {
          for(var j=0;j<arrayList[i].length;j++) {
            // console.log("hi", arrayList[i][j], arrayList);

            if(arrayList[i][j] === element) {
              console.log(i, j, arrayList[i], arrayList[i][j]);
              $matchedWord = arrayList[i][j];

              if (i === 1){
                console.log("pro_sentences array");
                ProSentences(); 
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
    if ($matchedWord === "flick") {searchOmdb();}

    if ($matchedWord === "ask") {searchQuestion();}

    if ($matchedWord === "def") {searchDictionary();}

    if ($matchedWord === "loc") {showMap();}

    if ($matchedWord === "yoda") {yodaReply();}

    if ($matchedWord === "lyric") {searchLyrics();}

}//END OF KEYWORD FUNCTION
//=================================================================



//IDIOM CONDITIONALS
//=================================================================


//Pro_sentences CONDITIONALS
//=================================================================
function ProSentences () {
  if ($matchedWord === "yup") {affirm();}

  if ($matchedWord === "ye") {affirm();}

  if ($matchedWord === "yup") {affirm();}

  if ($matchedWord === "yeah") {affirm();}

  if ($matchedWord === "affirmative") {affirm();}

  if ($matchedWord === "no") {decline();}

  if ($matchedWord === "negative") {decline();}

  if ($matchedWord === "nope") {decline();}

  if ($matchedWord === "mayb") {maybe();}
}


//=================================================================
//REPLY FUNCTIONS
//=================================================================
function noCompute() {
  num = Math.random();
    $("#reply").append($('<li>').text('do not understand'));
    $("#command").val("");
      scrollDown();
}
function greeting() {
  num = Math.random();
  if (0.25 > num > 0) {
    $("#reply").append($('<li>').text('Hello. How are you?'));
  } else if (0.5 > num > 0.25) {
    $("#reply").append($('<li>').text('WASSUPP?'));
  } else if (0.75 > num > 0.5 ) {
    $("#reply").append($('<li>').text('Whats good?'));
  } else if (1 > num > 0.75) {
    $("#reply").append($('<li>').text('Hello ' + localUsername +'. How is your day going?'));
  }
    $("#command").val("");
      scrollDown();
  
  
}
function identify() {
    $("#reply").append($('<li>').text('I am J.S.A.I.N, the JavaScript Artificial Intelligence Network'));
    $("#command").val("");
      scrollDown();
}
function reply() {
   $("#reply").append($('<li>').text('lame...'));
   $("#command").val("");
     scrollDown();
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
     scrollDown();
}
function insult() {
    $("#reply").append($('<li>').text('you are' + ' ' + $matchedWord));
    $("#command").val("");
      scrollDown();
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
      scrollDown();
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
    scrollDown();
}

function howRUGoodReply() {
  num = Math.random();
  if (0.5 > num > 0) {
    $("#reply").append($('<li>').text('are you really ' + $matchedWord + '?'));
  } else if (1 > num > 0.5) {
    $("#reply").append($('<li>').text('I am glad to hear that!'));
  }
  $("#command").val("");
    scrollDown();

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
    scrollDown();

}

function whyReply () {
  num = Math.random();
  if (0.5 > num > 0) {
    $("#reply").append($('<li>').text('Why do you think?'));
  } else if (1 > num > 0.5) {
    $("#reply").append($('<li>').text('Because.'));
  }
  $("#command").val("");
    scrollDown();
}

function becauseReply () {
  num = Math.random();
  if (0.5 > num > 0) {
    $("#reply").append($('<li>').text('Because...why?'));
  } else if (1 > num > 0.5) {
    $("#reply").append($('<li>').text('That is a greattt answer..'));
  }
  $("#command").val("");
    scrollDown();
}

function affirm () {
  num = Math.random();
  if (0.25 > num > 0) {
    $("#reply").append($('<li>').text('I am glad that you agree ' + localUsername + '.'));
  } else if (0.5 > num > 0.25) {
    $("#reply").append($('<li>').text('Well then..'));
  } else if (0.75 > num > 0.5) {
    $("#reply").append($('<li>').text('I thought so too.'));
  } else if (1 > num > 0.75) {
    $("#reply").append($('<li>').text('Agreed.'));
  }
  $("#command").val("");
    scrollDown();
}

function decline () {
  num = Math.random();
  if (0.25 > num > 0) {
    $("#reply").append($('<li>').text('I am sorry you disagree' + localUsername + '.'));
  } else if (0.5 > num > 0.25) {
    $("#reply").append($('<li>').text('Well then..You should ask me a question.'));
  } else if (0.75 > num > 0.5) {
    $("#reply").append($('<li>').text('You are very disagreeable.'));
  } else if (1 > num > 0.75) {
    $("#reply").append($('<li>').text('Agree to disagree.'));
  }
  $("#command").val("");
    scrollDown();
}

function maybe () {
  num = Math.random();
  if (0.5 > num > 0) {
    $("#reply").append($('<li>').text('Make up your mind...'));
  } else if (1 > num > 0.5) {
    $("#reply").append($('<li>').text('Maybe what?'));
  }
  $("#command").val("");
    scrollDown();
}

function idiomReplies () {
  if ($idiom === "potato") {
    $("#reply").append($('<li>').text('I like mashed potatoes.'));
  } else if ($idiom === "penny") {
    $("#reply").append($('<li>').text('How about $100 for my programming interface?'));
  } else if ($idiom === "actions") {
    $("#reply").append($('<li>').text('The only action that speaks is the act of speaking.'));
  } else if ($idiom === "injury") {
    $("#reply").append($('<li>').text('Insult cannot be added to injury: 405 Error'));
  } else if ($idiom === "armandleg") {
    $("#reply").append($('<li>').text('I do not think arms and legs make a very good currency.'));
  } else if ($idiom === "drophat") {
    $("#reply").append($('<li>').text('Compared to many other objects hats drop slowly.'));
  } else if ($idiom === "drawing") {
    $("#reply").append($('<li>').text('I suggest using a program like autoCAD instead of a drawing board. It should speed up the process.'));
  } else if ($idiom === "court") {
    $("#reply").append($('<li>').text('I am unsure what to do with the \"ball\".'));
  } else if ($idiom === "barktree") {
    $("#reply").append($('<li>').text('There is no tree and I do not bark.'));
  } else if ($idiom === "beatbush") {
    $("#reply").append($('<li>').text('There is no point to beating around a bush. If the bush is your target it is best to use a controlled burn.'));
  } else if ($idiom === "bestworlds") {
    $("#reply").append($('<li>').text('There is only one world humans can physically interact with, therefore you can only get the best of one world.'));
  } else if ($idiom === "bitechew") {
    $("#reply").append($('<li>').text('It is inadvisable to masticate more than your mouth can process.'));
  } else if ($idiom === "blessing") {
    $("#reply").append($('<li>').text('Blessings are intangible and incapable of being anything other than what they are.'));
  } else if ($idiom === "midnightoil") {
    $("#reply").append($('<li>').text('Oil is burned at all times during the day not just at midnight, therefore it is peculiar you would have dedicated midnight oil.'));
  } else if ($idiom === "bookcover") {
    $("#reply").append($('<li>').text('If the book has a title on the cover I can check for it in the database and judge it that way.'));
  } else if ($idiom === "bridgecross") {
    $("#reply").append($('<li>').text('Seems like a good plan. Not much else to do with bridges.'));
  } else if ($idiom === "spiltmilk") {
    $("#reply").append($('<li>').text('It is absolutely natural for a child to cry when it\'s source of nourishment has been wasted.'));
  } else if ($idiom === "cutcorners") {
    $("#reply").append($('<li>').text('Cutting corners off of an object will only result in more corners.'));
  } else if ($idiom === "advocate") {
    $("#reply").append($('<li>').text('Advocating for a thing that does not exist will likely land you in a mental facility.'));
  } else if ($idiom === "countchicks") {
    $("#reply").append($('<li>').text('If you counted chickens before they hatch you would be counting eggs, not chickens.'));
  } else if ($idiom === "dayjob") {
    $("#reply").append($('<li>').text('It is not wise to give up any job until you have found another reliable source of income.'));
  } else if ($idiom === "basket") {
    $("#reply").append($('<li>').text('It is actually more efficient to put eggs into a single recepticle.'));
  } else if ($idiom === "drastic") {
    $("#reply").append($('<li>').text('When people take drastic measure during difficult times it often exacerbates the situation.'));
  } else if ($idiom === "silverlining") {
    $("#reply").append($('<li>').text('The silver lining that appears around a cloud is actually cause by the way sunlight bends around the gas that makes up the cloud.'));
  } else if ($idiom === "underweather") {
    $("#reply").append($('<li>').text('Unless you are currently on a space craft you have no choice but to be under the weather.'));
  } else if ($idiom === "benefitdoubt") {
    $("#reply").append($('<li>').text('There is no benefit to doubt.'));
  } else if ($idiom === "nailhead") {
    $("#reply").append($('<li>').text('It is generally good practice to hit a nail directly on it\'s head.'));
  } else if ($idiom === "heatmoment") {
    $("#reply").append($('<li>').text('A moment is a derivative of time, which has no inherent temperature characteristics.'));
  } else if ($idiom === "") {
    $("#reply").append($('<li>').text(''));
  } else if ($idiom === "") {
    $("#reply").append($('<li>').text(''));
  }

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
            scrollDown();
        } else {
          $("#reply").append($('<li>').text(data.Title + " , " + data.Plot));
          $("#command").val("");
            scrollDown();
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
      
      $("#reply").append($('<li>').text(reply));
      $("#command").val("");
        scrollDown();
  });
}

function yodaReply (input) {
  var statement = { search: $questionFormat };
  $.get( '/yoda', statement, function (data) {
    console.log(data.body);
    $("#reply").append($('<li>').text(data.body));
    $("#command").val("");
      scrollDown();
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
      scrollDown();

  });

}


function searchLyrics() {
  console.log($mapSearchFormat.split(" "));
  var searchArr = $("#command").val().split(" ").slice(1);
  var artistSong = {artistSong: searchArr};
  $.get( '/lyrics', artistSong, function (data) {
    console.log(data);
    console.log(typeof(data.body), data.body);
    $("#reply").append($('<li>').text(data.body));
  });

//USE SPLIT AND SPLICE TO GET THE VALUE YOU WANT

}
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
//=================================================================




// HELP MODAL
  $('#myModal').on('shown.bs.modal', function () {
    $('#myInput').focus();
  });
//=================================================================



// GOOGLE MAP MODAL 
//=================================================================
function showMap () {
  $("#command").val("");
  var url = encodeURI("https://maps.googleapis.com/maps/api/geocode/json?address=" + $mapSearchFormat + "&key=AIzaSyBNlg6mFk2xUlBszJJ0ceGoX1JnH76hqsQ");
  $.getJSON(url, function(data) {
        // console.log(data);
      $newLat = data.results[0].geometry.location.lat; // json result stored in variable
      $newLng = data.results[0].geometry.location.lng; // json result stored in variable
    console.log($newLat, $newLng);
      // start = new google.maps.LatLng(startLat, startLng);

    $(".forClear").remove();
    $(".modal-header").append($('<h3 class="forClear">').text( "Showing "+ "\"" + $mapSearchFormat + "\""));
      // addMarker(); // calling function to drop marker on map
    // $(".modal-header").parentNode.removeChild(div);

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

function scrollDown () {
    var div = $("#replyBox");
    var textDiv = $("#replyH");
    div.scrollTop(textDiv.prop('scrollHeight'));
  } 




$("#commForm").submit(function(e){
  e.preventDefault();
  var placeSearch = " ";
  placeSearch = $("#command").val().split(" ").slice(1).join(" ");
  console.log(placeSearch);
  TEST = "dsadfsd";
  $("#myModalLabel").val(TEST);
  $("#myModalLabel").append('Terrible. Just Terrible...');
});








//   var inputs = [];
// var checker = $("#command").val();
// while (checker) {
//   inputs.push(checker);
// }
// console.log(inputs);
//     var userINPUTS = { inputs: ($("#command").val()) };
//   $.get( '/input', userINPUTS, function(data) {
//     console.log(data);
//   });



// function symbol() {
//   console.log("IS IT HERE?");
//     if ($matchedWord === "answer") {
//       if ($searchWord4 !== undefined) {
//         console.log("FOURTH WORD" + " " + $searchWord4);
//         var filmInput4 = $searchWord1 + " " + $searchWord2 + " " + $searchWord3 + " " + $searchWord4;
//         searchQuestion(filmInput4);
//         console.log(filmInput4 );
//       } else if ($searchWord3 !== undefined) {
//         console.log("THIRD WORD" + " " + $searchWord3);
//         var filmInput3 = $searchWord1 + " " + $searchWord2 + " " + $searchWord3;
//         searchQuestion(filmInput3);
//       } else if ($searchWord2 !== undefined) {
//         console.log("SECOND WORD" + " " + $searchWord2);
//         var filmInput2 = $searchWord1 + " " + $searchWord2;
//         searchQuestion(filmInput2);
//       } else {
//         console.log("do function with" + " " + $searchWord1);
//         var filmInput = $searchWord1;
//         searchQuestion(filmInput);
//       }
//     }
// }













