// Assignment Code
// #generate is the red button.
var generateBtn = document.querySelector("#generate");

// This is inside the dashed bordered box on the webpage that displays Your Secure Password.
function generatePassword() {
  var typesChar = prompt("Please choose one Uppercase, one Lowercase, one number, and one symbol character for your desired Passcode.");
  var length = prompt("Please choose the length of your desired Passcode. (Must be 8 - 128 Characters)");
  return "Password will be right here once I figure it out! haha"
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();      // Need to define generatePassword function.
  var passwordText = document.querySelector("#password");   // #password is the card.

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
