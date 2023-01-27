// Assignment Code
// #generate is the red button.
var generateBtn = document.querySelector("#generate");

// This is inside the dashed bordered box on the webpage that displays Your Secure Password.
function generatePassword() {
      numberChoice = [1,2,3,4,5,6,7,8,9,0].split(',');
      lowercaseChoice = [a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z].split(',');
      uppercaseChoice = [A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z].split(',');
      specialChoice = [!,@,#,$,%,^,&,*,(,)].split(',');
      var charInputArray = []; // to store the user's selected characters.
  };
  // var uppercaseChoice = confirm('Passcode must contain one Uppercase character.');
  // var lowercaseChoice = confirm('Passcode must contain one Lowercase character.');
  // var specialChoice = confirm('Passcode must contain one Special character.');
  // var numberChoice = confirm('Passcode must contain one Numeric character.');

  // var length = Number(confirm(prompt("Please choose the length of your desired Passcode. (Must be 8 - 128 Characters)")));
  // return password;

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();      // defined generatePassword() line 6.
  var passwordText = document.querySelector("#password");   // #password is the card.

  passwordText.value = "test";

}


// var password = generatePassword(8, {digits: true, lowercase: true, uppercase: true, symbols: true});