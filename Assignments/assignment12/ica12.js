// Create two new variables that will allow user to click keys that link to the randomized number //
var randomkey;
var numberToEnter;


window.onload = function(){newNumber();};
window.setInterval(function(){newNumber();}, 500);

// Add function that creates the base of your "press enter" section, and attach it to your random click keys //
function newNumber() {
  var label = document.getElementById("out");
  randomkey = 97 + Math.floor(Math.random() * 26);
  numberToEnter = Math.floor(Math.random() * 10);
  label.innerHTML = "Please press " + String.fromCharCode(randomkey) + " to enter " + numberToEnter;
}

// Need a function that will add your slected clickled key unless its false then the user will be notified to try again. //
function checkKeyPress(e){
  var keynum;
  if(window.event) {keynum = e.keyCode;}
  else if(e.which){keynum = e.which;}
  if (keynum == randomkey) {
    var current = document.getElementById("phone").innerHTML;
    document.getElementById("phone").innerHTML = current + numberToEnter;
  }
  else {
    alert("You have clicked the incorrect key. Please Try again :)")
  }
}

// Create a function that will alert the user that their number is incorrect as no one will ever get their correct number. //
function submitNumber() {
    alert("NICE TRY. That is not your phone number.");
    document.getElementById("phone").innerHTML = "";
}

// Function that activates the shortcut button. //
function submitExcuse() {
    alert("Access Denied.");
}