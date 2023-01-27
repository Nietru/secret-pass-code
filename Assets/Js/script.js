// Assignment Code
// #generate is the red button.

var lowerChoice = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperChoice = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var specChoice = ['!','@','#','$','%','^','&','*','(',')','='];
var numChoice = [1,2,3,4,5,6,7,8,9,0];

// confirm-prompt for user to pick characters to include.
// need to figure out how to get yes or no response and store response showhow.

var wantUppers = confirm("Do you want to include upper-case letters?   Yes = OK    No = Cancel ");
console.log(wantUppers);
var wantLowers = confirm("Do you want to include lower-case letters?:   Yes = OK    No = Cancel ");
console.log(wantLowers);
var wantSpecial = confirm("Do you want to include special characters?:   Yes = OK    No = Cancel ");
console.log(wantSpecial);
var wantNum = confirm("Do you want to include numbers?:   Yes = OK    No = Cancel ");
console.log(wantNum);
// not really working but closer.
var passcodeLength = prompt("Please pick a numerical value, 8 - 128, for your passcode length: ");
console.log(passcodeLength);
  if ((passcodeLength < 8) || (passcodeLength > 128)) {
  //   alert("Invalid!");
    confirm(prompt("Please pick a numerical value, 8 - 128, for your passcode length: "));
  } 

//TUTOR helped huge with this... grabs random element for each character-type array the user said yes for.
function generatePasscode() { 
  var result = [];    
  if (wantLowers == true) {
    var lowerChoiceElement = getRandom(lowerChoice);
    result.push(lowerChoiceElement);
  }  
  if (wantUppers == true) {
    var upperChoiceElement = getRandom(upperChoice);
    result.push(upperChoiceElement);
  }
  if (wantSpecial == true) {
    var specChoiceElement = getRandom(specChoice);
    result.push(specChoiceElement);
  }
  if (wantNum == true) {
    var numChoiceElement = getRandom(numChoice);
    result.push(numChoiceElement);
  }

  return result.join('');   // joins together all user chosen character types.
}

function getRandom(arr) {
  console.log('you are inside random function');  //testing functionality.
  for (var i = 0; i < passcodeLength; i++) {    // will get passcodeLength from line 35.
    console.log('passcodeLength' + passcodeLength);
    var charArrayRandIndex = Math.floor(Math.random() * arr.length);
    console.log(charArrayRandIndex);
    var randomElement = arr[charArrayRandIndex];
    console.log(randomElement);
    return randomElement;   // return means it stops executing.
  }
}

// Write password to the #password input
function writePasscode() {
  console.log('you are inside write password'); // testing functionality.
  var passcode = generatePasscode();      // defined generatePasscode()
  var passcodeText = document.querySelector("#passcode");   // #passcode is the card.

  passcodeText.value = passcode;

}

  // Add event listener to generate button
var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", writePasscode);