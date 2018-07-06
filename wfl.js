 /*
  Johnson County Community College
  Fall 2017

   Web 114 Final Project
   What's For Lunch Game
   Author: Melissa Arroyo
   Date:  November 20, 2017

   Filename: wfl.js
*/

//if selected vegetarian on dietary requirements dropdown
  //requirement: arrays lines 15 - 19, 96
var mainDishVegetarian = ["Frosted Mini Wheats", "a piece of chocolate", "a cucumber", "hummus", "potatoes"];
//if selected meat lover on dietary requirements dropdown
var mainDishMeat = ["a whole turkey", "a KC Strip", "a pile of bacon", "Fireball Meatballs", "a BLT sandwhich"];
//if selected doesn't matter on dietary requirements dropdown
var mainDishIndiff = ["the tears of your enemies", "gummy bears", "glitter", "raisins", "marshmallows"];
//sets choice to 0
var choice = 0;

//function will create a personalized meal suggestion
//requirement: getElementById innerHTML lines 29 - 35
//requirement: getElementById value lines 27, 28, 49
//requirement: custom functions beginning at lines 27, 49, 80, 93, 113
function makeMeal() {
  var sideDishValue = sideDish();
  var name = document.getElementById("box1").value; //personalize by name entered in box1
  var dietChoice = document.getElementById("diet").value; //meal idea will be generated based on diet preference
    if(dietChoice === "vegetarian"){
      document.getElementById("paragraphText").innerHTML = "Hello " + name  + ", today you should eat: " + mainDishVegetarian[choice] + sideDishValue //else if statement will run through the options
} else if(dietChoice === "meat"){
  document.getElementById("paragraphText").innerHTML = "Hello " + name  + ", today you should eat: " + mainDishMeat[choice] + sideDishValue
} else if(dietChoice === "indiff"){
  document.getElementById("paragraphText").innerHTML = "Hello " + name  + ", today you should eat: " + mainDishIndiff[choice] + sideDishValue
} else if(dietChoice === "vegan"){
  document.getElementById("paragraphText").innerHTML = "Sorry " + name + ", you need to move to California."
}
//requirement: logical operator ||
  if(choice === mainDishVegetarian.length-1 || choice === mainDishMeat.length-1 || choice === mainDishIndiff.length-1){
  choice = 0; //the first meal idea in the array will appear
  //will choose the next item in the array
  } else {
    choice++;
  }
}

//this function will return a side dish based on nutrition preference
function sideDish() {
  //get the value of the preference dropdown
  var nutritionPreference = document.getElementById("preference").value;
  //do a switch statement based on preference
  //requirement: switch statement
  switch(nutritionPreference) {
    case "healthy":
      return " with roasted veggies.";
    case "delicious":
      return " with fries.";
    case "idc":
      return " with crackers.";
    default:
      return ".";
  }
}

//gives final result when clicking on button
//requirement: addEventListener lines 68, 76, 91, 119
document.getElementById("result").addEventListener("click", makeMeal, false);

//alert box message when trying to share your results
//requirement: window alert
function shareAway() {
  alert("These were some bad ideas...you probably don't want to share them. But hopefully you got entertained! :)")
}
//alert box will show when trying to share your results
document.getElementById("shareButton").addEventListener("click", shareAway, false);

//requirement: window prompt and window alert
//requirement: if...else statement
//window prompt for when subscribing to Newsletter
function subscribeBox() {
  var email = prompt("Subscribe for more meal ideas right to your inbox!");
  if (email.valueMissing) {
    alert("Try Again!");
  } else {
    alert("Thank you! ");
  }
}

//window prompt will show when trying to subscribe
document.getElementById("subsbox").addEventListener("click", subscribeBox, false);

//function to change the background color of the box
function resultsColor() {
  /*selection of colors for the results box:
  gray, yellow, blue, orange, purple*/
  //requirement: array
	var boxColor = ["rgb(195, 193, 199)", "rgb(252, 237, 140)", "rgb(140, 211, 252)", "rgb(252, 181, 140)", "rgb(213, 190, 253)"];
  /*this alert box used for debugging alert(document.getElementById("resultsbox").style.backgroundColor);*/
  do {
    //this line will pick a random number (color) in the selection
    var i = getRandomInt(0, boxColor.length-1);
    }
    //this line will ensure the new color will not match the existing color
    //requirement: getElementById .style line 98, 101
    //requirement: do...while loop
  while (document.getElementById("resultsbox").style.backgroundColor === boxColor[i]);

  //changes the background color of the box
  document.getElementById("resultsbox").style.backgroundColor=boxColor[i];
}

//this function returns a random color
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//random color will appear when clicking on result button
document.getElementById("result").addEventListener("click", resultsColor, false);
