// var natural = require('natural'),
// tokenizer = new natural.WordTokenizer();



$("#commForm").submit(function(e){

    e.preventDefault();
    greetings = ['hello', 'hi', 'yo'];
    goodbyes = ['goodbye', 'later', 'bye'];
    insults = ['boring', 'stupid', 'lame'];
    arrayList = [greetings, goodbyes, insults];
   var INPUT = $("#command").val().split();
   console.log($("#command").val().split(" "));
   // var INPUTtoken = tokenizer.tokenize(INPUT);
   // console.log(INPUTtoken);
for(var x=0;x<INPUT.length;x++){
  console.log(INPUT[x]);
     checkArrays(INPUT[x]);
}
// INPUT.forEach(function(element, index, array){
//    console.log('a[' + index + '] = ' + element);
//   checkArrays();
// });

  function checkArrays (element) {
    for(var i=0;i<arrayList.length;i++) {
      for(var j=0;j<arrayList[i].length;j++) {
        // console.log("hi", arrayList[i][j], arrayList);
        if(arrayList[i][j] === element) {
            console.log(i, j, arrayList[i], arrayList[i][j]);
            $matchedWord = arrayList[i][j];

            if(i === 0) {
                console.log("first array");
                greeting();
            } else if (i === 1){
                console.log("second array");
                goodbye();
            } else if (i === 2){
              // var insultReply = arrayList[i][j];
                console.log("third array");
                insult();

            } 
        
        } else {
          noCompute();
        }
      }
    }
  }
});


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




