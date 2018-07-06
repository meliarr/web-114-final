/*
  Johnson County Community College
  Fall 2017

   Web 114 Final Project
   What's For Lunch Game
   Author: Melissa Arroyo
   Date:  November 20, 2017

   Filename: wflmenu.js
*/

//if selected vegetarian on dietary requirements dropdown
var mainDishVegetarian = ["Frosted Mini Wheats", "a piece of chocolate", "a cucumber", "hummus", "potatoes"];
//if selected meat lover on dietary requirements dropdown
var mainDishMeat = ["a whole turkey", "a KC Strip", "a pile of bacon", "Fireball Meatballs", "a BLT sandwhich"];
//if selected doesn't matter on dietary requirements dropdown
var mainDishIndiff = ["the tears of your enemies", "gummy bears", "glitter", "raisins", "marshmallows"];


//display the menu for vegetarian
//requirement: getElementById innerHTML line 53
//requirement: getElementById value line 25
//requirement: custom function
function makeMenu() {
  var menuPreference = document.getElementById("dietOptions").value;
  var text = "";
  //console.log(menuPreference);
  //do a switch statement based on preference
  //requirement: switch statement
  switch(menuPreference) {
    case "vegetarianMenu":
      var menuItems = mainDishVegetarian;
      break;
    case "meatMenu":
      var menuItems = mainDishMeat;
      break;
    case "indiffMenu":
      var menuItems = mainDishIndiff;
      break;
    case "veganMenu":
      var menuItems = "Sorry no vegan menu available.";
      break;
    default:
      var menuItems = "Please choose a menu.";
      break;
  }
  //nest a for loop inside an if else statement to ensure default message appears
  //requirement: for loop
  //requirement: if...else statement
  //requirement: assignment += = operators, arithmetic ++ operator, and comparison === operator
  if(Array.isArray(menuItems) === true) {
      for (i = 0; i < menuItems.length-1; i++) {
        text += menuItems[i] + "<br>";
    }
  } else {
    text = menuItems;
  }
  document.getElementById("menulist").innerHTML = text;
}

//event listener for menu display
//requirement: addEventListener
document.getElementById("dietOptions").addEventListener("change", makeMenu, false);
