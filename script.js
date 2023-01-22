// Assignment Code
// #generate is the red button.
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  
  return "Poop"
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();      // Need to define generatePassword function.
  var passwordText = document.querySelector("#password");   // #password is the card.

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
