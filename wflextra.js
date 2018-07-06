/*
  Johnson County Community College
  Fall 2017

   Web 114 Final Project
   What's For Lunch Game
   Author: Melissa Arroyo
   Date:  November 20, 2017

   Filename: wflextra.js
*/

//Calculate with + - / *
//requirement: getElementById value lines 16 - 18
//requirement: var -- throughout this document :)
//requirement: custom functions beginning at lines 17, 61, 69
function calculate() {
  var firstNumber = parseInt(document.getElementById("num1box").value);
  var secondNumber = parseInt(document.getElementById("num2box").value);
  var operator = document.getElementById("operators").value;
  //requirement: switch statment
  //requirement: arithmetic and comparison operators
  switch(operator) {
  case '+':  // if (operator === '+')
    var result = firstNumber + secondNumber;
    break;
  case '-':  // if (operator === '-')
    var result = firstNumber - secondNumber;
    break;
  case '/':  // if (operator === '/')
    var result = firstNumber / secondNumber;
    break;
  case '*':  // if (operator === '*')
    var result = firstNumber * secondNumber;
    break;
  case '%':  // if (operator === '%')
    var result = firstNumber % secondNumber;
    break;
  case '<':  // if (operator === '<')
    var result = firstNumber < secondNumber;
    break;
  case '<=':  // if (operator === '<=')
    var result = firstNumber <= secondNumber;
    break;
  case '>':  // if (operator === '>')
    var result = firstNumber > secondNumber;
    break;
  case '>=':  // if (operator === '>=')
    var result = firstNumber >= secondNumber;
    break;
  case '==':  // if (operator === '==')
    var result = firstNumber == secondNumber;
    break;
  case '!==':  // if (operator === '!==')
    var result = firstNumber !== secondNumber;
    break;
  default:
    alert("Try again.");
    break;
}
  //total is...
  //requirement: getElementById innerHTML
  document.getElementById("calcTotalPara").innerHTML =  "The answer is: " + result;
}
//show total with eventListener
//requirement: addEventListener lines 60, 68, 75
document.getElementById("calcButton").addEventListener("click", calculate, false);

function newColor() {
//requirement: getElementById .style lines 60, 67
//requirement: querySelectorAll
var x = document.querySelectorAll("div.hi"); document.getElementById("extra").style.backgroundColor = "green";
}

document.getElementById("queryAllButton").addEventListener("click", newColor, false);

function newH1Color() {
//requirement: getElementsByTagName
var x = document.getElementsByTagName("h1"); document.getElementById("hello").style.color = "yellow";
}

document.getElementById("tagsButton").addEventListener("click", newH1Color, false);
