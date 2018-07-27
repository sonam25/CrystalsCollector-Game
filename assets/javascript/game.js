var targetNumber;
var win = 0;
var loss = 0;
var result = 0;
var StartAndReset = function(){
   $(".crystals").empty();
  // $("#message").empty();
   var images = ["assets/images/hexagon.jpg","assets/images/diamond.jpg",
   "assets/images/rombus.jpg","assets/images/square.jpg"];
  targetNumber = Math.floor(Math.random() * (120-19)) + 19;
  console.log(targetNumber);

    $("#number-to-guess").text(targetNumber);

  for(var i=0; i < 4; i++){
      var random = Math.floor(Math.random() * 11) + 1;
     // console.log(random);
      var crystal = $("<div>");
      crystal.attr({
          "class":'crystal',
          "data-random":random,
          });
      crystal.css({
        "background-image":"url(" + images[i] + ")",
        "background-size":"cover"
       // "images":"",
      });
     // crystal.html(random);
    $(".crystals").append(crystal);
    
  } $("#result").html(result);
  
}

StartAndReset();

$(document).on('click',".crystal",function(){
  var num = parseInt($(this).attr("data-random"));
 result += num;
 //console.log("result: " + result);
 $("#result").html(result);
 

 if(result > targetNumber){
   console.log("you lose");
   $("#message").html("You Lost!!");
   loss++;
   $("#loss").html( "Losses: " + loss);
   result = 0;
   StartAndReset();
 
 }
 else if(result === targetNumber){
  console.log("you win");
  $("#message").html("You Won!!");
  win++;
  $("#win").html( "Wins: " + win);
  result = 0;
  StartAndReset();
 
}
});
