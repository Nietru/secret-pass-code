// Assignment Code
// #generate is the red button.
var generateBtn = document.querySelector("#generate");

// This is inside the dashed bordered box on the webpage that displays Your Secure Password.

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();      // Need to define generatePassword function.
  var passwordText = document.querySelector("#password");   // #password is the card.

  passwordText.value = password;

}

 function generatePassword(length, options) {
    var passwordText = {
        numberChoice: "1234567890",
        lowercaseChoice: "abcdefghijklmnopqrstuvwxyz",
        uppercaseChoice: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        specialChoice: "!@#$%^&*()"
    };
    var uppercaseChoice = prompt('Please choose one Uppercase character, and click "ok".');
    var lowercaseChoice = prompt('Please choose one lowercase character, and click "ok".');
    var specialChoice = prompt('Please choose one special character, *&^%! etc..., and click "ok".');
    var numberChoice = prompt('Please choose one numerical value character, and click "ok".');
  
    var length = prompt("Please choose the length of your desired Passcode. (Must be 8 - 128 Characters)");
    return password;
}

var password = generatePassword(8, {digits: true, lowercase: true, uppercase: true, symbols: true});

console.log(password);
